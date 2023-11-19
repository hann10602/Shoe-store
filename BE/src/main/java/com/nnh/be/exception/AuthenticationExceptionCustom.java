package com.nnh.be.exception;

import org.springframework.security.core.AuthenticationException;

public class AuthenticationExceptionCustom extends AuthenticationException {
    public AuthenticationExceptionCustom(String msg) {
        super(msg);
    }
}
