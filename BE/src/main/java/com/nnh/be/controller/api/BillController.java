package com.nnh.be.controller.api;


import com.nnh.be.dto.sdi.bill.CreateBillFromCartSdi;
import com.nnh.be.dto.sdi.bill.CreateBillSdi;
import com.nnh.be.dto.sdi.bill.DeleteBillSdi;
import com.nnh.be.dto.sdi.bill.UpdateBillSdi;
import com.nnh.be.dto.sdi.cart.CreateCartSdi;
import com.nnh.be.dto.sdi.cart.DeleteCartSdi;
import com.nnh.be.dto.sdi.cart.UpdateCartSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.bill.BillSelfSdo;
import com.nnh.be.dto.sdo.cart.CartSelfSdo;
import com.nnh.be.service.BillService;
import com.nnh.be.service.CartService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/bill")
@CrossOrigin
public class BillController {
    private final BillService billService;

    @GetMapping("/get-all")
    public List<BillSelfSdo> findAll() {
        return billService.findAll();
    }

    @GetMapping("/get-by-user-id/{user-id}")
    public List<BillSelfSdo> findByUser(@PathVariable("user-id") Long id) {
        return billService.findByUser(id);
    }

    @PostMapping("/create")
    public MessageSdo create(@RequestBody CreateBillSdi req) {
        return billService.create(req);
    }

    @PostMapping("/create-from-cart")
    public MessageSdo createFromCart(@RequestBody CreateBillFromCartSdi req) {
        return billService.createFromCart(req);
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateBillSdi req) {
        return billService.update(req);
    }

    @DeleteMapping("/delete")
    public MessageSdo update(@RequestBody DeleteBillSdi req) {
        return billService.delete(req);
    }
}
