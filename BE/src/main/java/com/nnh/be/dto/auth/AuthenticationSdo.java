package com.nnh.be.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationSdo {
    private Long id;
    private String role;
    private String token;
}
