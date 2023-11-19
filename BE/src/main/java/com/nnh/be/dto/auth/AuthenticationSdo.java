package com.nnh.be.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationSdo {
    private Long id;
    private String role;
    private String avatar;
    private String fullName;
    private String username;
    private String password;
    private String address;
    private String email;
    private String phoneNum;
    private String token;
}
