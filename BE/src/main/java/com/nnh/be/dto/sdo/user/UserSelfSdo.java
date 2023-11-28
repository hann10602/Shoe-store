package com.nnh.be.dto.sdo.user;

import com.nnh.be.dto.common.CommonSdo;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserSelfSdo extends CommonSdo {
    private Long id;
    private String fullName;
    private String username;
    private String password;
    private String email;
    private String avatar;
    private String address;
    private String phoneNum;
    private String role;
}
