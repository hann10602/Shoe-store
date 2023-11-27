package com.nnh.be.dto.sdo.bill;

import com.nnh.be.dto.common.CommonSdo;
import lombok.Data;

@Data
public class BillSelfSdo extends CommonSdo {
    private Long id;
    private Integer quantity;
    private String userName;
    private Long shoeId;
    private String shoeName;
    private String shoeSize;
    private String status;

    private Boolean received;

    private Boolean isEvaluate;
    private Integer totalPrice;
}
