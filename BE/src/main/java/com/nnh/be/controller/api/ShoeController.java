package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.shoe.CreateShoeSdi;
import com.nnh.be.dto.sdi.shoe.DeleteShoeSdi;
import com.nnh.be.dto.sdi.shoe.SelfShoeSdi;
import com.nnh.be.dto.sdi.shoe.UpdateShoeSdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.service.ShoeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/shoe")
public class ShoeController {
    @Autowired
    private ShoeService shoeService;

    @GetMapping("/self")
    public ShoeSelfSdo self(@RequestBody SelfShoeSdi req) {
        return shoeService.self(req);
    }

    @GetMapping("/search")
    public List<ShoeSelfSdo> findAll() {
        return shoeService.findAll();
    }

    @PostMapping("/create")
    public MessageSdo create(@RequestBody CreateShoeSdi req) {
        return shoeService.create(req);
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateShoeSdi req) {
        return shoeService.update(req);
    }

    @DeleteMapping("/delete")
    public MessageSdo delete(@RequestBody DeleteShoeSdi req) {
        return shoeService.delete(req);
    }
}
