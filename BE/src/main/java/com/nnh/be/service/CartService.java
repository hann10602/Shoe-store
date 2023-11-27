package com.nnh.be.service;

import com.nnh.be.dto.sdi.cart.CreateCartSdi;
import com.nnh.be.dto.sdi.cart.DeleteCartSdi;
import com.nnh.be.dto.sdi.cart.UpdateCartSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.cart.CartSelfSdo;
import com.nnh.be.model.Cart;
import com.nnh.be.model.User;

import java.util.List;

public interface CartService {
    List<CartSelfSdo> findAll();
    List<CartSelfSdo> findAllByUser(Long userId);

    List<Cart> findAllByIdIn(List<Long> ids);
    MessageSdo create(CreateCartSdi req);
    MessageSdo update(UpdateCartSdi req);
    MessageSdo delete(Long id);
    void deleteAll(List<Long> req);
}
