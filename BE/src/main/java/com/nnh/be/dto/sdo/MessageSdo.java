package com.nnh.be.dto.sdo;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(staticName = "of")
public class MessageSdo {
    private String message;
}
