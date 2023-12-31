package com.nnh.be.dto.sdi.bill;

import lombok.Data;

@Data
public class UpdateBillSdi {
    private Long id;
    private Integer quantity;

    private String received;

    private String status;

    private Boolean isEvaluate;
}
