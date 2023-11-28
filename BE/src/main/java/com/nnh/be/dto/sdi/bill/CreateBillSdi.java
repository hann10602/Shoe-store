package com.nnh.be.dto.sdi.bill;

import lombok.Data;

@Data
public class CreateBillSdi {
    private Integer quantity;
    private String sizeCode;
    private Integer totalPrice;
    private Long userId;
    private Long shoeId;
}
