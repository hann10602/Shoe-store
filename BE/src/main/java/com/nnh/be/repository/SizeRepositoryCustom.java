package com.nnh.be.repository;

import com.nnh.be.model.Size;

import java.util.List;

public interface SizeRepositoryCustom {
    List<Size> findAllByShoeSize(List<String> sizeCodes);
}
