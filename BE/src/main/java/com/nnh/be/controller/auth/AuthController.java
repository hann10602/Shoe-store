package com.nnh.be.controller.auth;

import com.nnh.be.dto.auth.AuthenticationSdi;
import com.nnh.be.dto.auth.AuthenticationSdo;
import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.service.auth.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<MessageSdo> register(@RequestBody CreateUserSdi request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationSdo> login(@RequestBody AuthenticationSdi request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
