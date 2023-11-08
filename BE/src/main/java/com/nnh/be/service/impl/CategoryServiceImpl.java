package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.model.Category;
import com.nnh.be.repository.CategoryRepository;
import com.nnh.be.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepo;

    @Override
    public CategorySelfSdo self(SelfCategorySdi req) {
        try {
            Category entity = categoryRepo.findById(req.getId()).get();
            CategorySelfSdo sdo = new CategorySelfSdo();

            BeanUtils.copyProperties(entity, sdo);

            return sdo;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<CategorySelfSdo> findAll() {
        try {
            List<Category> entityList = categoryRepo.findAll();
            List<CategorySelfSdo> dtoList = new ArrayList<>();

            entityList.forEach(entity -> {
                CategorySelfSdo dto = new CategorySelfSdo();

                BeanUtils.copyProperties(entity, dto);
                dtoList.add(dto);
            });

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
