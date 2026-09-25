package com.ileristy.platform.contact;

import com.ileristy.platform.contact.dto.ContactResponse;
import com.ileristy.platform.contact.dto.CreateContactRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Locale;

@Service
@Transactional
public class ContactService {
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactResponse createContact(CreateContactRequest request) throws DuplicateContactException {
        String normalizedEmail = request.email()
                .trim()
                .toLowerCase(Locale.ROOT);

        if (contactRepository.existsByEmailIgnoreCase(normalizedEmail)) {
            throw new DuplicateContactException();
        }
        Contact newContact = new Contact(
                request.firstName(),
                request.lastName(),
                normalizedEmail,
                request.phoneNumber(),
                request.contactOrigin(),
                request.marketingConsent()
        );

        Contact contact = contactRepository.saveAndFlush(newContact);
        return new ContactResponse(contact.getId(), contact.getFirstName(), contact.getLastName(), contact.getEmail(), contact.getPhoneNumber(), contact.getOrigin(), contact.isMarketingConsent(), contact.getCreatedAt());
    }
}
