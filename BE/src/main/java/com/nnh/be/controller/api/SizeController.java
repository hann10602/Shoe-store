package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.size.SizeSelfSdi;
import com.nnh.be.dto.sdo.size.SizeSelfSdo;
import com.nnh.be.service.SizeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/size/")
@CrossOrigin
public class SizeController {
    private final SizeService sizeService;

    @GetMapping("/get-quantity")
    public SizeSelfSdo getQuantityBySizeIdAndShoeId(SizeSelfSdi req) {
        return sizeService.getQuantity(req);
    }
}
