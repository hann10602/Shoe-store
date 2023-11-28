package com.nnh.be.service.auth;

import com.nnh.be.dto.auth.AuthenticationSdi;
import com.nnh.be.dto.auth.AuthenticationSdo;
import com.nnh.be.dto.sdi.user.ChangePasswordUserSdi;
import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdi.user.UpdateUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.exception.AuthenticationExceptionCustom;
import com.nnh.be.exception.MessageException;
import com.nnh.be.model.User;
import com.nnh.be.repository.RoleRepository;
import com.nnh.be.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicReference;

@Service
@AllArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public MessageSdo register(CreateUserSdi req) {
        List<User> usersExist = userRepo.findByUsernameOrEmailOrPhoneNum(req.getUsername(), req.getEmail(), req.getPhoneNum());

        try {
            if (usersExist.isEmpty()) {
                User user = new User();
                BeanUtils.copyProperties(req, user);
                user.setPassword(passwordEncoder.encode(req.getPassword()));
                user.setUserRole(roleRepo.findByCode("ROLE_USER").get());
                userRepo.save(user);

                return MessageSdo.of("Success");

            } else {
                for(User user : usersExist) {
                    if(Objects.equals(user.getUsername(), req.getUsername())) {
//                        return MessageSdo.of("Username is exist");
                        throw new MessageException("register fail");
                    }

                    if(Objects.equals(user.getEmail(), req.getEmail())) {
//                        return MessageSdo.of("Email is exist");
                        throw new MessageException("register fail");
                    }

                    if(Objects.equals(user.getPhoneNum(), req.getPhoneNum())) {
//                        return MessageSdo.of("Phone number is exist");
                        throw new MessageException("register fail");
                    }
                };

//                return MessageSdo.of("Undefined");
                throw new MessageException("register fail");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new MessageException("register fail");
//            return MessageSdo.of("Failed");
        }
    }


    public AuthenticationSdo authenticate(AuthenticationSdi req) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword()));

            User user = userRepo.findByUsername(req.getUsername()).get();
            String jwtToken = jwtService.generateToken(user);

            return new AuthenticationSdo(
                    user.getId(),
                    user.getUserRole().getCode(),
                    user.getAvatar(),
                    user.getFullName(),
                    user.getUsername(),
                    user.getPassword(),
                    user.getAddress(),
                    user.getEmail(),
                    user.getPhoneNum(),
                    jwtToken);
        } catch(AuthenticationException e) {
            throw e;
        }
    }
    public MessageSdo changePassword(ChangePasswordUserSdi req) {
        try {
            User user = userRepo.findById(req.getId()).get();

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), req.getOldPassword()));

            user.setPassword(passwordEncoder.encode(req.getNewPassword()));

            userRepo.save(user);

            return MessageSdo.of("Success");
        } catch(AuthenticationException e) {
            throw e;
        }
    }

    public MessageSdo update(UpdateUserSdi req) {
        List<User> usersExist = userRepo.findByUsernameOrEmailOrPhoneNum(req.getUsername(), req.getEmail(), req.getPhoneNum());

        try {
            if (usersExist.isEmpty()) {
                User user = new User();
                BeanUtils.copyProperties(req, user);
                user.setPassword(passwordEncoder.encode(req.getPassword()));
                user.setUserRole(roleRepo.findByCode(req.getRole()).get());
                userRepo.save(user);

                return MessageSdo.of("Success");

            } else {
                for(User user : usersExist) {
                    if(Objects.equals(user.getUsername(), req.getUsername())) {
//                        return MessageSdo.of("Username is exist");
                        throw new MessageException("update fail");
                    }

                    if(Objects.equals(user.getEmail(), req.getEmail())) {
//                        return MessageSdo.of("Email is exist");
                        throw new MessageException("update fail");
                    }

                    if(Objects.equals(user.getPhoneNum(), req.getPhoneNum())) {
//                        return MessageSdo.of("Phone number is exist");
                        throw new MessageException("update fail");
                    }
                };

//                return MessageSdo.of("Undefined");
                throw new MessageException("update fail");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new MessageException("update fail");
//            return MessageSdo.of("Failed");
        }
    }
}
