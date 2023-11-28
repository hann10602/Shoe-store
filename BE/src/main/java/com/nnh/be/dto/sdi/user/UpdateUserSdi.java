package com.nnh.be.dto.sdi.user;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateUserSdi {
    private Long id;
    private String fullName;
    private String avatar;
    private String username;
    private String password;
    private String address;
    private String role;
    private String email;
    private String phoneNum;
}
