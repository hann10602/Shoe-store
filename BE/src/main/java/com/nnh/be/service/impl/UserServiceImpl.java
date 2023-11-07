package com.nnh.be.service.impl;


import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdi.user.DeleteUserSdi;
import com.nnh.be.dto.sdi.user.SelfUserSdi;
import com.nnh.be.dto.sdi.user.UpdateUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.user.UserSelfSdo;
import com.nnh.be.model.User;
import com.nnh.be.repository.RoleRepository;
import com.nnh.be.repository.UserRepository;
import com.nnh.be.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;

    @Override
    public List<UserSelfSdo> findAll() {
        List<UserSelfSdo> dtoList = new ArrayList<>();
        userRepo.findAll().forEach((entity) -> {
            UserSelfSdo dto = new UserSelfSdo();
            BeanUtils.copyProperties(entity, dto);

            dto.setRole(entity.getUserRole().getName());

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public UserSelfSdo self(SelfUserSdi req) {
        UserSelfSdo dto = new UserSelfSdo();
        User entity = findOne(req.getId());
        BeanUtils.copyProperties(entity, dto);

        dto.setRole(entity.getUserRole().getName());

        return dto;
    }

    @Override
    public MessageSdo create(CreateUserSdi req) {
        try {
            User user = new User();
            BeanUtils.copyProperties(req, user);

            user.setUserRole(roleRepo.findByCode("ROLE_USER").get());

            userRepo.save(user);

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo update(UpdateUserSdi req) {
        try {
            User user = findOne(req.getId());
            BeanUtils.copyProperties(req, user);

            userRepo.save(user);

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo delete(DeleteUserSdi req) {
        try {
            userRepo.deleteById(req.getId());

            return MessageSdo.of("Success");
        } catch (Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public User findOne(Long id) {
        return userRepo.findById(id).get();
    }
}
