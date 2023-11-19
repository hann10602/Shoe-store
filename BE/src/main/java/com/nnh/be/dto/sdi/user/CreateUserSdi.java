package com.nnh.be.dto.sdi.user;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateUserSdi {
    private String fullName;
    private String username;
    private String avatar;
    private String password;
    private String address;
    private String email;
    private String phoneNum;
}
