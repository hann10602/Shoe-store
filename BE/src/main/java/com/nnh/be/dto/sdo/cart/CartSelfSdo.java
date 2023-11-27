package com.nnh.be.dto.sdo.cart;

import com.nnh.be.dto.common.CommonSdo;
import lombok.Data;

@Data
public class CartSelfSdo extends CommonSdo {
    private Long id;
    private Integer quantity;
    private Integer maxQuantity;
    private Long userId;
    private Long shoeId;
    private String shoeName;
    private String shoeImage;
    private String sizeCode;
    private Integer shoePrice;
    private Integer shoeSalePrice;
}
