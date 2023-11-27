package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.cart.CreateCartSdi;
import com.nnh.be.dto.sdi.cart.DeleteCartSdi;
import com.nnh.be.dto.sdi.cart.UpdateCartSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.cart.CartSelfSdo;
import com.nnh.be.model.Cart;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.Size;
import com.nnh.be.model.User;
import com.nnh.be.repository.CartRepository;
import com.nnh.be.repository.ShoeSizeRepository;
import com.nnh.be.repository.SizeRepository;
import com.nnh.be.service.CartService;
import com.nnh.be.service.ShoeService;
import com.nnh.be.service.SizeService;
import com.nnh.be.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService {
    private final CartRepository cartRepo;
    private final ShoeSizeRepository shoeSizeRepo;
    private final UserService userService;
    private final SizeRepository sizeRepo;
    private final ShoeService shoeService;

    @Override
    public List<CartSelfSdo> findAll() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        try {
            List<CartSelfSdo> dtoList = new ArrayList<>();

            List<Cart> entityList = cartRepo.findAll();

            entityList.forEach(entity -> {
                CartSelfSdo dto = new CartSelfSdo();

                BeanUtils.copyProperties(entity, dto);

                dto.setShoeId(entity.getShoeCart().getId());
                dto.setShoeName(entity.getShoeCart().getName());
                dto.setShoePrice(entity.getShoeCart().getPrice());
                dto.setShoeSalePrice(entity.getShoeCart().getSalePrice());
                dto.setShoeImage(entity.getShoeCart().getImages().get(0).getUrl());
                dto.setUserId(entity.getUserCart().getId());
                dto.setSizeCode(entity.getSizeCart().getCode());
                dto.setMaxQuantity(shoeSizeRepo.getQuantity(dto.getShoeId(), dto.getSizeCode()));
                dto.setCreatedBy(entity.getCreatedBy());
                dto.setCreatedDate(sdf.format(entity.getCreatedDate()));

                dtoList.add(dto);
            });

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<CartSelfSdo> findAllByUser(Long userId) {
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            List<CartSelfSdo> dtoList = new ArrayList<>();

            List<Cart> entityList = cartRepo.findByuserId(userId);

            entityList.forEach(entity -> {
                CartSelfSdo dto = new CartSelfSdo();

                BeanUtils.copyProperties(entity, dto);

                dto.setShoeId(entity.getShoeCart().getId());
                dto.setShoeName(entity.getShoeCart().getName());
                dto.setShoePrice(entity.getShoeCart().getPrice());
                dto.setShoeSalePrice(entity.getShoeCart().getSalePrice());
                dto.setShoeImage(entity.getShoeCart().getImages().get(0).getUrl());
                dto.setUserId(entity.getUserCart().getId());
                dto.setSizeCode(entity.getSizeCart().getCode());
                dto.setMaxQuantity(shoeSizeRepo.getQuantity(dto.getShoeId(), dto.getSizeCode()));
                dto.setCreatedBy(entity.getCreatedBy());
                dto.setCreatedDate(sdf.format(entity.getCreatedDate()));

                dtoList.add(dto);
            });

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Cart> findAllByIdIn(List<Long> ids) {
        return cartRepo.findByIdIn(ids);
    }

    @Override
    public MessageSdo create(CreateCartSdi req) {
        try {
            Cart newCart = new Cart();

            User user = userService.findOne(req.getUserId());
            Shoe shoe = shoeService.findOne(req.getShoeId());
            Size size = sizeRepo.findByCode(req.getSizeCode()).get();

            Cart currentCart = cartRepo.findByUserCartAndShoeCartAndSizeCart(user, shoe, size);

            if(currentCart == null) {
                newCart.setUserCart(user);
                newCart.setShoeCart(shoe);
                newCart.setSizeCart(size);
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
    public MessageSdo delete(Long id) {
        try {
            cartRepo.deleteById(id);

            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }
}
