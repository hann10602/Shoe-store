package com.nnh.be.service;

import com.nnh.be.dto.sdi.category.CreateCategorySdi;
import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdi.category.UpdateCategorySdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.model.Category;

import java.util.List;

public interface CategoryService {
    CategorySelfSdo self(SelfCategorySdi req);
    List<CategorySelfSdo> findAll();
    MessageSdo create(CreateCategorySdi req);
    MessageSdo update(UpdateCategorySdi req);
    MessageSdo delete(Long id);
}
