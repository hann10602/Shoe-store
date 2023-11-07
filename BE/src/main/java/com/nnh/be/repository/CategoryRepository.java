package com.nnh.be.repository;

import com.nnh.be.model.Category;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByCode(String code);
}
