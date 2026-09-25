package com.ileristy.platform.contact;

import com.ileristy.platform.contact.dto.ContactResponse;
import com.ileristy.platform.contact.dto.CreateContactRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> create(@Valid @RequestBody CreateContactRequest request) throws DuplicateContactException {
        ContactResponse response = contactService.createContact(request);
        return ResponseEntity.created(URI.create("/api/contacts/" + response.id())).body(response);
    }
}
