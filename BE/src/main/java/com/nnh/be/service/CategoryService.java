package com.nnh.be.service;

import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.model.Category;

import java.util.List;

public interface CategoryService {
    CategorySelfSdo self(SelfCategorySdi req);
    List<CategorySelfSdo> findAll();
}
