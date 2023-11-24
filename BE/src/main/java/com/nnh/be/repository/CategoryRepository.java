package com.nnh.be.repository;

import com.nnh.be.dto.sdo.category.CategorySelfSdo;
import com.nnh.be.model.Category;
import com.nnh.be.model.User;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>, CategoryRepositoryCustom {
    Category findByCode(String code);
    @Query(value = "SELECT COUNT(s.id) AS product_quantity FROM `vmo-project`.`category` c LEFT JOIN `vmo-project`.`shoe` s ON c.id = s.category_id GROUP BY c.id", nativeQuery = true)
    List<Integer> findAllWithStatistical();
}
