package com.ileristy.platform.courses;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CoursesRepository extends JpaRepository<Course, Long> {
    List<Course> findAllByOrderByNameAsc();

    Optional<Course> findBySlugIgnoreCase(String slug);
}
