package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.size.SizeSelfSdi;
import com.nnh.be.dto.sdo.size.SizeSelfSdo;
import com.nnh.be.model.Size;
import com.nnh.be.repository.ShoeSizeRepository;
import com.nnh.be.repository.SizeRepository;
import com.nnh.be.service.SizeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SizeServiceImpl implements SizeService {
    private final SizeRepository sizeRepo;
    private final ShoeSizeRepository shoeSizeRepo;

    @Override
    public Size self(String code) {
        return sizeRepo.findByCode(code).get();
    }

    @Override
    public List<Size> searchByCodes(List<String> sizeCodes) {
        return sizeRepo.findByCodeIn(sizeCodes);
    }

    @Override
    public SizeSelfSdo getQuantity(SizeSelfSdi req) {
        return SizeSelfSdo.of(shoeSizeRepo.getQuantity(req.getShoeId(), req.getSizeCode()));
    }
}
