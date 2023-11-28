package com.nnh.be.service;

import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.Size;

import java.util.List;

public interface ShoeSizeService {
    MessageSdo create(Shoe shoe, List<Size> sizes);
    MessageSdo update(Shoe shoe, List<Size> sizes);
    void deleteAllByShoe(Shoe shoe);
    List<String> getSizesByShoeId(Long id);
    Integer getTotalQuantityByShoeId(Long shoeId);
}
