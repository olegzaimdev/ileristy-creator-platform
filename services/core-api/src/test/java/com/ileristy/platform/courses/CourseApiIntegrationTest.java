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
@SpringBootTest(properties = "spring.liquibase.contexts=test")
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

    @Test
    void shouldReturnCourseWithActivePackagesAndNextCohort() throws Exception {
        // Arrange: course, active/inactive packages, past and future cohorts
        Long courseId = jdbcTemplate.queryForObject("""
        INSERT INTO course (slug, name, description)
        VALUES ('ugc-smm', 'UGC & SMM', 'Test course')
        RETURNING id
        """, Long.class);

        jdbcTemplate.update("""
        INSERT INTO course_package
            (course_id, code, name, price_amount_minor, currency, active)
        VALUES
            (?, 'PRO', 'Pro', 19900, 'EUR', true),
            (?, 'PREMIUM', 'PREMIUM', 49900, 'EUR', false),
            (?, 'START', 'START', 9900, 'EUR', true)
        """, courseId, courseId, courseId);

        jdbcTemplate.update("""
        INSERT INTO cohort (course_id, starts_at, ends_at, capacity)
        VALUES
            (?, now() - interval '30 days', now() - interval '1 day', 99),
            (?, now() + interval '60 days', now() + interval '90 days', 15),
            (?, now() + interval '14 days', now() + interval '44 days', 10)
        """, courseId, courseId, courseId);

        // Act + Assert
        mockMvc.perform(get("/api/courses/ugc-smm"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.slug").value("ugc-smm"))
                .andExpect(jsonPath("$.packages.length()").value(2))
                .andExpect(jsonPath("$.packages[0].code").value("START"))
                .andExpect(jsonPath("$.packages[1].code").value("PRO"))
                .andExpect(jsonPath("$.nextCohort.capacity").value(10));
    }

    @Test
    void shouldReturnNotFoundWhenCourseDoesNotExist() throws Exception {
        mockMvc.perform(get("/api/courses/non-existent"))
                .andExpect(status().isNotFound());
    }

    @Test
    void shouldReturnCourseWithoutNextCohort() throws Exception {
        Long courseId = jdbcTemplate.queryForObject("""
        INSERT INTO course (slug, name, description)
        VALUES ('ugc-smm-2', 'UGC & SMM', 'Test course')
        RETURNING id
        """, Long.class);

        jdbcTemplate.update("""
        INSERT INTO course_package
            (course_id, code, name, price_amount_minor, currency, active)
        VALUES
            (?, 'PRO', 'Pro', 19900, 'EUR', true)
        """, courseId);

        jdbcTemplate.update("""
        INSERT INTO cohort (course_id, starts_at, ends_at, capacity)
        VALUES
            (?, now() - interval '30 days', now() - interval '1 day', 99)
        """, courseId);

        // Act + Assert
        mockMvc.perform(get("/api/courses/ugc-smm-2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nextCohort").value(nullValue()));
    }

}
