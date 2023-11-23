package com.nnh.be.dto.sdi.user;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChangePasswordUserSdi {
    private Long id;
    private String password;
}
