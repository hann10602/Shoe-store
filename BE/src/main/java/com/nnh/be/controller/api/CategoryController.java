package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/category")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/self")
    public CategorySelfSdo self(@RequestBody SelfCategorySdi req) {
        return categoryService.self(req);
    }

    @GetMapping("/get-all")
    public List<CategorySelfSdo> findAll() {
        return categoryService.findAll();
    }
}
