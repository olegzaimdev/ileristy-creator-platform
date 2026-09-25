package com.ileristy.platform.contact;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    boolean existsByEmailIgnoreCase(String email);
}
