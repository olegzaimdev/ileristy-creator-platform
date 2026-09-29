package com.ileristy.platform.courses.dto;

import com.ileristy.platform.courses.Cohort;
import com.ileristy.platform.courses.Course;
import com.ileristy.platform.courses.CoursePackage;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;

public record CourseResponse(
        String slug,
        String name,
        String description,
        List<PackageResponse> packages,
        CohortResponse nextCohort
) {
    public record PackageResponse(
            String code,
            String name,
            long priceAmountMinor,
            String currency,
            String description
    ) {
        static PackageResponse from(CoursePackage coursePackage) {
            return new PackageResponse(
                    coursePackage.getCode(),
                    coursePackage.getName(),
                    coursePackage.getPriceAmountMinor(),
                    coursePackage.getCurrency(),
                    coursePackage.getDescription()
            );
        }
    }

    public record CohortResponse(Instant startsAt, Instant endsAt, int capacity) {
        static CohortResponse from(Cohort cohort) {
            return new CohortResponse(cohort.getStartsAt(), cohort.getEndsAt(), cohort.getCapacity());
        }
    }

    public static CourseResponse from(Course course, Instant now) {
        return new CourseResponse(
                course.getSlug(),
                course.getName(),
                course.getDescription(),
                course.getPackages().stream()
                        .filter(CoursePackage::isActive)
                        .sorted(Comparator.comparingLong(CoursePackage::getPriceAmountMinor))
                        .map(PackageResponse::from)
                        .toList(),
                course.getCohorts().stream()
                        .filter(cohort -> cohort.getStartsAt().isAfter(now))
                        .min(Comparator.comparing(Cohort::getStartsAt))
                        .map(CohortResponse::from)
                        .orElse(null)
        );
    }
}
