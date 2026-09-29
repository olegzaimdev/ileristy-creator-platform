package com.ileristy.platform.courses;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.postgresql.PostgreSQLContainer;

import java.sql.Timestamp;
import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.nullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Testcontainers
@SpringBootTest
@AutoConfigureMockMvc
class CourseApiIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Container
    @ServiceConnection
    static PostgreSQLContainer postgres =
            new PostgreSQLContainer("postgres:17-alpine");

    @BeforeEach
    void cleanDatabase() {
        jdbcTemplate.execute("DELETE FROM cohort");
        jdbcTemplate.execute("DELETE FROM course_package");
        jdbcTemplate.execute("DELETE FROM course");
    }

    @Test
    void shouldListCoursesWithActivePackagesAndNextCohort() throws Exception {
        // Arrange
        Instant now = Instant.now().truncatedTo(ChronoUnit.SECONDS);
        long styling = insertCourse("styling", "Styling", "Learn styling");
        insertPackage(styling, "premium", "Premium", 90000, true);
        insertPackage(styling, "basic", "Basic", 45000, true);
        insertPackage(styling, "legacy", "Legacy", 10000, false);
        insertCohort(styling, now.minus(Duration.ofDays(30)), 10);
        insertCohort(styling, now.plus(Duration.ofDays(60)), 20);
        insertCohort(styling, now.plus(Duration.ofDays(14)), 12);

        insertCourse("art", "Art", "Learn art");

        // Act + Assert
        mockMvc.perform(get("/api/courses"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].slug").value("art"))
                .andExpect(jsonPath("$[0].packages", hasSize(0)))
                .andExpect(jsonPath("$[0].nextCohort").value(nullValue()))
                .andExpect(jsonPath("$[1].slug").value("styling"))
                .andExpect(jsonPath("$[1].packages", hasSize(2)))
                .andExpect(jsonPath("$[1].packages[0].code").value("basic"))
                .andExpect(jsonPath("$[1].packages[0].priceAmountMinor").value(45000))
                .andExpect(jsonPath("$[1].packages[0].currency").value("EUR"))
                .andExpect(jsonPath("$[1].packages[1].code").value("premium"))
                .andExpect(jsonPath("$[1].nextCohort.capacity").value(12));
    }

    @Test
    void shouldGetCourseBySlugIgnoringCase() throws Exception {
        // Arrange
        long styling = insertCourse("styling", "Styling", "Learn styling");
        insertPackage(styling, "basic", "Basic", 45000, true);

        // Act + Assert
        mockMvc.perform(get("/api/courses/STYLING"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.slug").value("styling"))
                .andExpect(jsonPath("$.packages", hasSize(1)))
                .andExpect(jsonPath("$.nextCohort").value(nullValue()));
    }

    @Test
    void shouldReturnNotFoundForUnknownSlug() throws Exception {
        mockMvc.perform(get("/api/courses/unknown"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.title").value("Course not found"));
    }

    private long insertCourse(String slug, String name, String description) {
        return jdbcTemplate.queryForObject(
                "INSERT INTO course (slug, name, description) VALUES (?, ?, ?) RETURNING id",
                Long.class, slug, name, description);
    }

    private void insertPackage(long courseId, String code, String name, long priceAmountMinor, boolean active) {
        jdbcTemplate.update(
                "INSERT INTO course_package (course_id, code, name, price_amount_minor, currency, active) VALUES (?, ?, ?, ?, 'EUR', ?)",
                courseId, code, name, priceAmountMinor, active);
    }

    private void insertCohort(long courseId, Instant startsAt, int capacity) {
        jdbcTemplate.update(
                "INSERT INTO cohort (course_id, starts_at, ends_at, capacity) VALUES (?, ?, ?, ?)",
                courseId, Timestamp.from(startsAt), Timestamp.from(startsAt.plus(Duration.ofDays(28))), capacity);
    }
}
