package com.nnh.be.service;

import com.nnh.be.dto.sdi.size.SizeSelfSdi;
import com.nnh.be.dto.sdo.size.SizeSelfSdo;
import com.nnh.be.model.Size;

import java.util.List;

public interface SizeService {
    Size self(String code);
    List<Size> searchByCodes(List<String> sizeCodes);
    SizeSelfSdo getQuantity(SizeSelfSdi req);
}
