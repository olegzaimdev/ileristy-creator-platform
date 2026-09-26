package com.ileristy.platform.contact.dto;

import com.ileristy.platform.contact.ContactOrigin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CreateContactRequest(
        @NotBlank
        @Size(max = 255)
        String firstName,

        @NotBlank
        @Size(max = 255)
        String lastName,

        @NotBlank
        @Email
        @Size(max = 255)
        String email,

        @Size(max = 255)
        String phoneNumber,

        @NotNull
        ContactOrigin origin,

        boolean marketingConsent
) {
        public CreateContactRequest {
                firstName = trim(firstName);
                lastName = trim(lastName);
                email = trim(email);
                phoneNumber = trim(phoneNumber);
        }

        private static String trim(String value) {
                return value == null ? null : value.trim();
        }
}
