package com.nnh.be.dto.sdo.cart;

import lombok.Data;

@Data
public class CartSelfSdo {
    private Long id;
    private Integer quantity;
    private Long userId;
    private Long shoeId;
    private Long shoePrice;
}
