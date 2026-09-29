package com.ileristy.platform.courses;

import com.ileristy.platform.courses.dto.CourseResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class CoursesService {
    private final CoursesRepository coursesRepository;

    public CoursesService(CoursesRepository coursesRepository) {
        this.coursesRepository = coursesRepository;
    }

    public List<CourseResponse> listCourses() {
        Instant now = Instant.now();
        return coursesRepository.findAllByOrderByNameAsc().stream()
                .map(course -> CourseResponse.from(course, now))
                .toList();
    }

    public CourseResponse getCourse(String slug) {
        Course course = coursesRepository.findBySlugIgnoreCase(slug.trim())
                .orElseThrow(() -> new CourseNotFoundException(slug));
        return CourseResponse.from(course, Instant.now());
    }
}
