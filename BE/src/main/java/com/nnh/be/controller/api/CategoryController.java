package com.nnh.be.controller.api;

import com.nnh.be.dto.sdi.category.CreateCategorySdi;
import com.nnh.be.dto.sdi.category.SelfCategorySdi;
import com.nnh.be.dto.sdi.category.UpdateCategorySdi;
import com.nnh.be.dto.sdo.MessageSdo;
import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/create")
    public MessageSdo create(@RequestBody CreateCategorySdi req) {
        return categoryService.create(req);
    }

    @PutMapping("/update")
    public MessageSdo update(@RequestBody UpdateCategorySdi req) {
        return categoryService.update(req);
    }

    @DeleteMapping("/delete/{id}")
    public MessageSdo delete(@PathVariable Long id) {
        return categoryService.delete(id);
    }
}
