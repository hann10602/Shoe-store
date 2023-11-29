package com.nnh.be.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class MessageException extends RuntimeException {

    public MessageException(String message) {
        super(message);
    }
}
