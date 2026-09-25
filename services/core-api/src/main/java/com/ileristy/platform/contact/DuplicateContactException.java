package com.ileristy.platform.contact;

public class DuplicateContactException extends RuntimeException {

    public DuplicateContactException() {
        super("Contact with email already exists");
    }
}