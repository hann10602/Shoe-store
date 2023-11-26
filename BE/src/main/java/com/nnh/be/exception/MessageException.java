package com.nnh.be.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MessageException extends RuntimeException {

    public MessageException(String message) {
        super(message);
    }
}
