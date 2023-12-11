package com.nnh.be.service.auth;

import com.nnh.be.dto.auth.AuthenticationSdi;
import com.nnh.be.dto.auth.AuthenticationSdo;
import com.nnh.be.dto.sdi.user.ChangePasswordUserSdi;
import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdi.user.RegisterUserSdi;
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

    public MessageSdo register(RegisterUserSdi req) {
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
                        throw new MessageException("Username is exist");
                    }

                    if(Objects.equals(user.getEmail(), req.getEmail())) {
                        throw new MessageException("Email is exist");
                    }

                    if(Objects.equals(user.getPhoneNum(), req.getPhoneNum())) {
                        throw new MessageException("Phone number is exist");
                    }
                };

                throw new MessageException("Register fail");
            }
        } catch (Exception e) {
            throw e;
//            return MessageSdo.of("Failed");
        }
    }

    public MessageSdo create(CreateUserSdi req) {
        List<User> usersExist = userRepo.findByUsernameOrEmailOrPhoneNum(req.getUsername(), req.getEmail(), req.getPhoneNum());

        try {
            if (usersExist.isEmpty()) {
                User user = new User();
                BeanUtils.copyProperties(req, user);
                user.setPassword(passwordEncoder.encode(req.getPassword()));
                if (req.getRole().isBlank()) {
                    user.setUserRole(roleRepo.findByCode("ROLE_USER").get());
                } else {
                    user.setUserRole(roleRepo.findByCode(req.getRole()).get());
                }
                userRepo.save(user);

                return MessageSdo.of("Success");

            } else {
                for(User user : usersExist) {
                    if(Objects.equals(user.getUsername(), req.getUsername())) {
                        throw new MessageException("Username is exist");
                    }

                    if(Objects.equals(user.getEmail(), req.getEmail())) {
                        throw new MessageException("Email is exist");
                    }

                    if(Objects.equals(user.getPhoneNum(), req.getPhoneNum())) {
                        throw new MessageException("Phone number is exist");
                    }
                };

                throw new MessageException("Register fail");
            }
        } catch (Exception e) {
            throw e;
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
            if (usersExist.isEmpty() || (usersExist.size() == 1 && req.getId() == usersExist.get(0).getId())) {
                User user = new User();
                BeanUtils.copyProperties(req, user);
                if(req.getPassword() == null || req.getPassword() == "") {
                    user.setPassword(userRepo.findById(req.getId()).get().getPassword());
                } else {
                    user.setPassword(passwordEncoder.encode(req.getPassword()));
                }
                user.setUserRole(roleRepo.findByCode(req.getRole()).get());
                userRepo.save(user);

                return MessageSdo.of("Success");

            } else {
                    if(Objects.equals(usersExist.get(1).getUsername(), req.getUsername())) {
                        throw new MessageException("Username is exist");
                    }

                    if(Objects.equals(usersExist.get(1).getEmail(), req.getEmail())) {
                        throw new MessageException("Email is exist");
                    }

                    if(Objects.equals(usersExist.get(1).getPhoneNum(), req.getPhoneNum())) {
                        throw new MessageException("Phone number is exist");
                    }


                throw new MessageException("Update fail");
            }
        } catch (Exception e) {
            throw e;
//            return MessageSdo.of("Failed");
        }
    }
}
