package com.nnh.be.controller.auth;

import com.nnh.be.dto.auth.AuthenticationSdi;
import com.nnh.be.dto.auth.AuthenticationSdo;
import com.nnh.be.dto.sdi.user.ChangePasswordUserSdi;
import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdi.user.RegisterUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.service.auth.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin
public class AuthController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<MessageSdo> register(@RequestBody RegisterUserSdi request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationSdo> login(@RequestBody AuthenticationSdi request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
