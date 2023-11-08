package com.nnh.be.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationSdi {
    private String username;
    private String password;
}
