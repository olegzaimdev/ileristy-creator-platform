package com.ileristy.platform.courses;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

@Entity
@Table(name = "course_package")
@EntityListeners(AuditingEntityListener.class)
public class CoursePackage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "price_amount_minor", nullable = false)
    private long priceAmountMinor;

    @Column(nullable = false, length = 3)
    private String currency;

    @Column(nullable = false, length = 50)
    private String code;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Column(columnDefinition = "text")
    private String description;

    @Column(nullable = false)
    private boolean active;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    protected CoursePackage() {
    }

    public CoursePackage(Course course, String code, String name, long priceAmountMinor, String currency, String description) {
        this.course = course;
        this.code = code;
        this.name = name;
        this.priceAmountMinor = priceAmountMinor;
        this.currency = currency;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public long getPriceAmountMinor() {
        return priceAmountMinor;
    }

    public String getCurrency() {
        return currency;
    }

    public String getCode() {
        return code;
    }

    public Course getCourse() {
        return course;
    }

    public String getDescription() {
        return description;
    }

    public boolean isActive() {
        return active;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
}
