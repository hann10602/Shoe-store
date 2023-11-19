package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/category")
@CrossOrigin
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
