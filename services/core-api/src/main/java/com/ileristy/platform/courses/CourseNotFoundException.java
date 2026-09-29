package com.ileristy.platform.courses;

public class CourseNotFoundException extends RuntimeException {

    public CourseNotFoundException(String slug) {
        super("Course with slug '" + slug + "' does not exist");
    }
}
