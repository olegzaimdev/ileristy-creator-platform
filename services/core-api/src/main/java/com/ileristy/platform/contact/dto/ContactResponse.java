package com.ileristy.platform.contact.dto;

import com.ileristy.platform.contact.Contact;
import com.ileristy.platform.contact.ContactOrigin;

import java.time.Instant;

public record ContactResponse (
        Long id,
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        ContactOrigin origin,
        boolean marketingConsent,
        Instant createdAt
){
}

