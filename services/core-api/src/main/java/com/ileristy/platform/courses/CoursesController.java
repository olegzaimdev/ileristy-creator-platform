package com.ileristy.platform.courses;

import com.ileristy.platform.courses.dto.CourseResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    private final CoursesService coursesService;

    public CoursesController(CoursesService coursesService) {
        this.coursesService = coursesService;
    }

    @GetMapping
    public List<CourseResponse> list() {
        return coursesService.listCourses();
    }

    @GetMapping("/{slug}")
    @ApiResponse(responseCode = "200")
    @ApiResponse(responseCode = "404")
    public CourseResponse get(@PathVariable String slug) {
        return coursesService.getCourse(slug);
    }
}
