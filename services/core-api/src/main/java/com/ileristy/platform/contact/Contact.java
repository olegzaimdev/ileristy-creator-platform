package com.ileristy.platform.contact;


import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

@Entity
@Table(name = "contact")
@EntityListeners(AuditingEntityListener.class)
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String email;

    @Column(name="phone_number")
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ContactOrigin origin;

    @Column(name = "marketing_consent", nullable = false)
    private boolean marketingConsent;

    @Column(name = "marketing_consent_at")
    private Instant marketingConsentAt;

    @Column(name = "marketing_consent_withdrawn_at")
    private Instant marketingConsentWithdrawnAt;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    private Contact() {
    }

    public Contact(String firstName, String lastName, String email, String phoneNumber, ContactOrigin origin, boolean marketingConsent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.origin = origin;
        this.marketingConsent = marketingConsent;
        this.marketingConsentAt = marketingConsent ? Instant.now() : null;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public ContactOrigin getOrigin() {
        return origin;
    }

    public boolean isMarketingConsent() {
        return marketingConsent;
    }

    public Instant getMarketingConsentAt() {
        return marketingConsentAt;
    }

    public Instant getMarketingConsentWithdrawnAt() {
        return marketingConsentWithdrawnAt;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
}
