package com.nnh.be.service;

import com.nnh.be.dto.sdi.bill.CreateBillFromCartSdi;
import com.nnh.be.dto.sdi.bill.CreateBillSdi;
import com.nnh.be.dto.sdi.bill.UpdateBillSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.bill.BillSelfSdo;
import com.nnh.be.model.Bill;

import java.util.List;

public interface BillService {
    List<BillSelfSdo> findAll();
    List<BillSelfSdo> findByUser(Long userId);
    MessageSdo create(CreateBillSdi req);
    MessageSdo createFromCart(CreateBillFromCartSdi req);
    MessageSdo update(UpdateBillSdi req);
    MessageSdo delete(Long id);

    Bill findOne(Long id);
}
