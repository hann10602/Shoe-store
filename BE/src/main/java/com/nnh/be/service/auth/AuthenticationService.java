package com.nnh.be.service.auth;

import com.nnh.be.dto.auth.AuthenticationSdi;
import com.nnh.be.dto.auth.AuthenticationSdo;
import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.User;
import com.nnh.be.repository.RoleRepository;
import com.nnh.be.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
        try {
            List<User> usersExist = userRepo.findByUsernameOrEmailOrPhoneNum(req.getUsername(), req.getEmail(), req.getPhoneNum());

            if (usersExist.isEmpty()) {
                User user = new User();
                user.setUsername(req.getUsername());
                user.setPassword(passwordEncoder.encode(req.getPassword()));
                user.setFullName(req.getFullName());
                user.setEmail(req.getEmail());
                user.setPhoneNum(req.getPhoneNum());
                user.setAddress(req.getAddress());
                user.setUserRole(roleRepo.findByCode("ROLE_USER").get());
                userRepo.save(user);

                return MessageSdo.of("Success");

            } else {
                for(User user : usersExist) {
                    if(Objects.equals(user.getUsername(), req.getUsername())) {
                        return MessageSdo.of("Username is exist");
                    }

                    if(Objects.equals(user.getEmail(), req.getEmail())) {
                        return MessageSdo.of("Email is exist");
                    }

                    if(Objects.equals(user.getPhoneNum(), req.getPhoneNum())) {
                        return MessageSdo.of("Phone number is exist");
                    }
                };

                return MessageSdo.of("Undefined");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }


    public AuthenticationSdo authenticate(AuthenticationSdi req) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword()));

        User user = userRepo.findByUsername(req.getUsername()).get();
        String jwtToken = jwtService.generateToken(user);

        return new AuthenticationSdo(jwtToken);

    }
}
