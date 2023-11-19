package com.nnh.be.dto.sdo.cart;

import lombok.Data;

@Data
public class CartSelfSdo {
    private Long id;
    private Integer quantity;
    private Integer maxQuantity;
    private Long userId;
    private Long shoeId;
    private String shoeName;
    private String shoeImage;
    private String sizeCode;
    private Long shoePrice;
    private Long shoeSalePrice;
}
