package com.nnh.be.dto.sdi.bill;

import lombok.Data;

import java.util.List;

@Data
public class CreateBillFromCartSdi {
    private List<Long> cartIdList;
}
