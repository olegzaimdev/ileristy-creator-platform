package com.ileristy.platform.contact;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.postgresql.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@Testcontainers
@SpringBootTest
@AutoConfigureMockMvc
class ContactApiIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ContactRepository contactRepository;

    @Container
    @ServiceConnection
    static PostgreSQLContainer postgres =
            new PostgreSQLContainer("postgres:17-alpine");

    @BeforeEach
    void cleanDatabase() {
        contactRepository.deleteAll();
    }

    @Test
    void shouldCreateContact() throws Exception {
        // Arrange
        String requestBody = """
                {
                  "firstName": " Jane ",
                  "lastName": "Stark",
                  "email": " jane@EXAMPLE.COM ",
                  "phoneNumber": "+359888123456",
                  "origin": "INSTAGRAM",
                  "marketingConsent": true
                }
                """;

        // Act + Assert HTTP contract
        mockMvc.perform(
                        post("/api/contacts")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestBody)
                )
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").isNumber())
                .andExpect(jsonPath("$.firstName").value("Jane"))
                .andExpect(jsonPath("$.email").value("jane@example.com"))
                .andExpect(jsonPath("$.marketingConsent").value(true))
                .andExpect(jsonPath("$.createdAt").exists());

        // Assert persistence
        assertThat(contactRepository.count()).isEqualTo(1);

        List<Contact> contacts = contactRepository.findAll();

        Contact savedContact = contacts.getFirst();

        assertThat(savedContact.getId()).isNotNull();
        assertThat(savedContact.getFirstName()).isEqualTo("Jane");
        assertThat(savedContact.getLastName()).isEqualTo("Stark");
        assertThat(savedContact.getEmail()).isEqualTo("jane@example.com");
        assertThat(savedContact.getOrigin()).isEqualTo(ContactOrigin.INSTAGRAM);
    }

    @Test
    void shouldRejectDuplicateEmailIgnoringCase() throws Exception {
        // Arrange
        String firstRequest = """
                {
                  "firstName": "Jane",
                  "lastName": "Stark",
                  "email": "jane@example.com",
                  "phoneNumber": "+359888123456",
                  "origin": "INSTAGRAM",
                  "marketingConsent": true
                }
                """;

        String duplicateRequest = """
                {
                  "firstName": "Another",
                  "lastName": "Person",
                  "email": "JANE@EXAMPLE.COM",
                  "origin": "DIRECT",
                  "marketingConsent": false
                }
                """;

        mockMvc.perform(
                post("/api/contacts")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(firstRequest)
        ).andExpect(status().isCreated());


        mockMvc.perform(
                        post("/api/contacts")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(duplicateRequest)
                )
                .andDo(print())
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.title").value("Contact already exists"));

        // Assert persistence
        assertThat(contactRepository.count()).isEqualTo(1);

        List<Contact> contacts = contactRepository.findAll();

        Contact savedContact = contacts.getFirst();

        assertThat(savedContact.getFirstName()).isEqualTo("Jane");
        assertThat(savedContact.getEmail()).isEqualTo("jane@example.com");
        assertThat(savedContact.getOrigin()).isEqualTo(ContactOrigin.INSTAGRAM);
    }
}
