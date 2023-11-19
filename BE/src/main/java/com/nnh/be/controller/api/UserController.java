package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.DeleteShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdi.user.CreateUserSdi;
import com.nnh.be.dto.sdi.user.DeleteUserSdi;
import com.nnh.be.dto.sdi.user.SelfUserSdi;
import com.nnh.be.dto.sdi.user.UpdateUserSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.dto.sdo.user.UserSelfSdo;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {
    private final UserService userService;

    @GetMapping("/self")
    public UserSelfSdo self(@RequestBody SelfUserSdi req) {
        return userService.self(req);
    }

    @GetMapping("/get-all")
    public List<UserSelfSdo> findAll() {
        return userService.findAll();
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateUserSdi req) {
        return userService.update(req);
    }

    @DeleteMapping("/delete")
    public MessageSdo delete(@RequestBody DeleteUserSdi req) {
        return userService.delete(req);
    }
}
