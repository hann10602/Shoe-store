package com.nnh.be.service.impl;

import com.nnh.be.model.Size;
import com.nnh.be.repository.SizeRepository;
import com.nnh.be.service.SizeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SizeServiceImpl implements SizeService {
    @Autowired
    private SizeRepository sizeRepo;
    @Override
    public Size self(String code) {
        return sizeRepo.findByCode(code).get();
    }

    @Override
    public List<Size> searchByCodes(List<String> sizeCodes) {
        return sizeRepo.findAllByShoeSize(sizeCodes);
    }
}
