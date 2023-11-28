package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.category.CreateCategorySdi;
import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdi.category.UpdateCategorySdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.exception.MessageException;
import com.nnh.be.model.Cart;
import com.nnh.be.model.Category;
import com.nnh.be.repository.CategoryRepository;
import com.nnh.be.repository.ShoeRepository;
import com.nnh.be.service.CategoryService;
import jakarta.persistence.Tuple;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Data
@AllArgsConstructor
@Service
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepo;
    private final ShoeRepository shoeRepo;


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
            List<Integer> statisticalList = categoryRepo.findAllWithStatistical();
            List<Category> categoryList = categoryRepo.findAll();
            List<CategorySelfSdo> dtoList = new ArrayList<>();

            for(int i = 0; i < statisticalList.size(); i++) {
                CategorySelfSdo dto = new CategorySelfSdo();
                BeanUtils.copyProperties(categoryList.get(i), dto);
                dto.setProductQuantity(statisticalList.get(i));

                dtoList.add(dto);
            }

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MessageSdo create(CreateCategorySdi req) {
        try {
            if(!categoryRepo.findByCode(req.getCode()).isPresent()) {
                Category entity = new Category();
                BeanUtils.copyProperties(req, entity);

                categoryRepo.save(entity);

                return MessageSdo.of("Success");
            }
        } catch(Exception e) {
            e.printStackTrace();
        }

        throw new MessageException("Update category fail");
    }

    @Override
    public MessageSdo update(UpdateCategorySdi req) {
        Optional<Category> currentCategory = categoryRepo.findByCode(req.getCode());
        try {
            if(currentCategory.isEmpty() || currentCategory.get().getId() == req.getId()) {
                Category entity = new Category();
                BeanUtils.copyProperties(req, entity);

                categoryRepo.save(entity);

                return MessageSdo.of("Success");
            }
        } catch(Exception e) {
            e.printStackTrace();
        }

        throw new MessageException("Update category fail");
    }

    @Override
    public MessageSdo delete(Long id) {
        try {
            if(shoeRepo.findByCategoryId(id) == 0) {
                categoryRepo.deleteById(id);

                return MessageSdo.of("Success");
            }
        } catch(Exception e) {
            e.printStackTrace();
        }

        throw new MessageException("Delete category fail");
    }
}
