package com.nnh.be.service;

import com.nnh.be.model.Size;

import java.util.List;

public interface SizeService {
    Size self(String code);
    List<Size> searchByCodes(List<String> sizeCodes);
}
