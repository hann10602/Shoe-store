package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.user.*;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.user.UserSelfSdo;
import com.nnh.be.service.UserService;
import com.nnh.be.service.auth.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {
    private final UserService userService;
    private final AuthenticationService authService;

    @GetMapping("/self/{id}")
    public UserSelfSdo self(@PathVariable Long id) {
        return userService.self(id);
    }

    @GetMapping("/get-all")
    public List<UserSelfSdo> findAll() {
        return userService.findAll();
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateUserSdi req) {
        return authService.update(req);
    }

    @PutMapping("/change-password")
    public MessageSdo changePassword(@RequestBody ChangePasswordUserSdi req) {
        return authService.changePassword(req);
    }

    @DeleteMapping("/delete/{id}")
    public MessageSdo delete(@PathVariable("id") Long id) {
        return userService.delete(id);
    }
}
