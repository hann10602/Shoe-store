package com.nnh.be.controller.api;


import com.nnh.be.dto.sdi.cart.CreateCartSdi;
import com.nnh.be.dto.sdi.cart.DeleteCartSdi;
import com.nnh.be.dto.sdi.cart.UpdateCartSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.cart.CartSelfSdo;
import com.nnh.be.service.CartService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/cart")
@CrossOrigin
public class CartController {
    private final CartService cartService;

    @GetMapping("/get-all")
    public List<CartSelfSdo> findAll() {
        return cartService.findAll();
    }

    @GetMapping("/get-by-user-id/{user-id}")
    public List<CartSelfSdo> findByUser(@PathVariable("user-id") Long id) {
        return cartService.findAllByUser(id);
    }

    @PostMapping("/create")
    public MessageSdo create(@RequestBody CreateCartSdi req) {
        return cartService.create(req);
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateCartSdi req) {
        return cartService.update(req);
    }

    @DeleteMapping("/delete/{id}")
    public MessageSdo update(@PathVariable  Long id) {
        return cartService.delete(id);
    }
}
