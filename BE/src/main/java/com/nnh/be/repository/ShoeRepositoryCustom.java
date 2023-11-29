package com.nnh.be.repository;

import com.nnh.be.dto.sdo.shoe.ShoeSelfSdo;
import com.nnh.be.model.Shoe;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShoeRepositoryCustom {
    List<ShoeSelfSdo> search(String search, String size, String category, Integer from, Integer to);
}
