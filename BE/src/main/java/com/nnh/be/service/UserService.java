package com.nnh.be.service;

import com.nnh.be.dto.sdi.user.*;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.user.UserSelfSdo;
import com.nnh.be.model.User;

import java.util.List;

public interface UserService {
    List<UserSelfSdo> findAll();
    UserSelfSdo self(SelfUserSdi req);
    MessageSdo update(UpdateUserSdi req);
    MessageSdo delete(DeleteUserSdi req);
    User findOne(Long id);
    User findOneByUsername(String username);
}
