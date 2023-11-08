package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.cart.CreateCartSdi;
import com.nnh.be.dto.sdi.cart.DeleteCartSdi;
import com.nnh.be.dto.sdi.cart.UpdateCartSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.cart.CartSelfSdo;
import com.nnh.be.model.Cart;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.User;
import com.nnh.be.repository.CartRepository;
import com.nnh.be.service.CartService;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepo;
    private final UserService userService;
    private final ShoeService shoeService;

    @Override
    public List<CartSelfSdo> findAll() {
        try {
            List<CartSelfSdo> dtoList = new ArrayList<>();
            Map<Cart ,Shoe> entityMap = new HashMap<>();
            List<Long> shoeIdList = new ArrayList<>();

            List<Cart> entityList = cartRepo.findAll();

            entityList.forEach(entity -> {
                entityMap.put(entity, entity.getShoeCart());
                shoeIdList.add(entity.getShoeCart().getId());
            });

            List<Shoe> shoeList = shoeService.findByIds(shoeIdList);

            entityMap.forEach((entity, shoe) -> {
                CartSelfSdo dto = new CartSelfSdo();
                dto.setId(entity.getId());
                dto.setQuantity(entity.getQuantity());
                dto.setShoePrice(shoeList.get(shoeList.indexOf(shoe)).getPrice());

                dtoList.add(dto);
            });

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<CartSelfSdo> findAllByUser(Long id) {
        try {
            List<CartSelfSdo> dtoList = new ArrayList<>();
            Map<Cart ,Shoe> entityMap = new HashMap<>();
            List<Long> shoeIdList = new ArrayList<>();

            User user = userService.findOne(id);
            List<Cart> entityList = cartRepo.findByUserCart(user);

            entityList.forEach(entity -> {
                entityMap.put(entity, entity.getShoeCart());
                shoeIdList.add(entity.getShoeCart().getId());
            });

            List<Shoe> shoeList = shoeService.findByIds(shoeIdList);

            entityMap.forEach((entity, shoe) -> {
                CartSelfSdo dto = new CartSelfSdo();
                dto.setId(entity.getId());
                dto.setQuantity(entity.getQuantity());
                dto.setShoePrice(shoeList.get(shoeList.indexOf(shoe)).getPrice());

                dtoList.add(dto);
            });

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MessageSdo create(CreateCartSdi req) {
        try {
            Cart newCart = new Cart();

            User user = userService.findOne(req.getUserId());
            Shoe shoe = shoeService.findOne(req.getShoeId());

            Cart currentCart = cartRepo.findByUserCartAndShoeCart(user, shoe);

            if(currentCart == null) {
                newCart.setUserCart(user);
                newCart.setShoeCart(shoe);
                newCart.setQuantity(1);
            } else {
                BeanUtils.copyProperties(currentCart, newCart);
                newCart.setQuantity(currentCart.getQuantity() + 1);
            }

            cartRepo.save(newCart);

            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo update(UpdateCartSdi req) {
        try {
            Cart currentCart = cartRepo.findById(req.getId()).get();

            currentCart.setQuantity(req.getQuantity());

            if(currentCart.getQuantity() <= 0) {
                cartRepo.deleteById(currentCart.getId());
            } else {
                cartRepo.save(currentCart);
            }

            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo delete(DeleteCartSdi req) {
        try {
            cartRepo.deleteById(req.getId());


            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }
}
