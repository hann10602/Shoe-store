package com.nnh.be.service.impl;

import com.nnh.be.dto.sdi.category.CreateCategorySdi;
import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdi.category.UpdateCategorySdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.model.Cart;
import com.nnh.be.model.Category;
import com.nnh.be.repository.CategoryRepository;
import com.nnh.be.service.CategoryService;
import jakarta.persistence.Tuple;
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
            List<Integer> statisticalList = categoryRepo.findAllWithStatistical();
            List<CategorySelfSdo> dtoList = new ArrayList<>();

            categoryRepo.findAll().forEach((entity) -> {
                CategorySelfSdo dto = new CategorySelfSdo();
                BeanUtils.copyProperties(entity, dto);
                dto.setProductQuantity(statisticalList.get(entity.getId().intValue() - 1));

                dtoList.add(dto);
            });

            return dtoList;
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public MessageSdo create(CreateCategorySdi req) {
        try {
            Cart currentCart = cartRepo.findById(req.getId()).get();

            currentCart.setQuantity(req.getQuantity());

            if(currentCart.getQuantity() <= 0) {
                cartRepo.deleteById(currentCart.getId());
            } else {
                cartRepo.save(currentCart);
            }

            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo update(UpdateCategorySdi req) {
        try {
            Cart currentCart = cartRepo.findById(req.getId()).get();

            currentCart.setQuantity(req.getQuantity());

            if(currentCart.getQuantity() <= 0) {
                cartRepo.deleteById(currentCart.getId());
            } else {
                cartRepo.save(currentCart);
            }

            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }

    @Override
    public MessageSdo delete(Long id) {
        try {
            Cart currentCart = cartRepo.findById(req.getId()).get();

            currentCart.setQuantity(req.getQuantity());

            if(currentCart.getQuantity() <= 0) {
                cartRepo.deleteById(currentCart.getId());
            } else {
                cartRepo.save(currentCart);
            }

            return MessageSdo.of("Success");
        } catch(Exception e) {
            e.printStackTrace();
            return MessageSdo.of("Failed");
        }
    }
}
