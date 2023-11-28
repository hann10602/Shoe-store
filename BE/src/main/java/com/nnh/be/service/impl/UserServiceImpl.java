package com.nnh.be.service.impl;


import com.nnh.be.dto.sdi.user.SelfUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.user.UserSelfSdo;
import com.nnh.be.model.User;
import com.nnh.be.repository.BillRepository;
import com.nnh.be.repository.CartRepository;
import com.nnh.be.repository.EvaluateRepository;
import com.nnh.be.repository.UserRepository;
import com.nnh.be.service.UserService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepo;
    private final CartRepository cartRepo;
    private final BillRepository billRepo;
    private final EvaluateRepository evaluateRepo;

    @Override
    public List<UserSelfSdo> findAll() {
        List<UserSelfSdo> dtoList = new ArrayList<>();
        userRepo.findAll().forEach((entity) -> {
            UserSelfSdo dto = new UserSelfSdo();
            BeanUtils.copyProperties(entity, dto);

            dto.setRole(entity.getUserRole().getCode());

            dtoList.add(dto);
        });

        return dtoList;
    }

    @Override
    public UserSelfSdo self(SelfUserSdi req) {
        UserSelfSdo dto = new UserSelfSdo();
        User entity = findOne(req.getId());
        BeanUtils.copyProperties(entity, dto);

        dto.setRole(entity.getUserRole().getCode());

        return dto;
    }

    @Override
    @Transactional
    public MessageSdo delete(Long id) {
        try {
            User user = userRepo.findById(id).get();
            cartRepo.deleteByUserCart(user);
            billRepo.deleteByUserOrder(user);
            evaluateRepo.deleteByUserEvaluate(user);
            userRepo.deleteById(id);

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

    @Override
    public User findOneByUsername(String username) {
        return userRepo.findByUsername(username).get();
    }
}
