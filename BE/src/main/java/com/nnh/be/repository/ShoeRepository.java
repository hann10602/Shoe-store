package com.nnh.be.repository;

import com.nnh.be.model.Cart;
import com.nnh.be.model.Category;
import com.nnh.be.model.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShoeRepository extends JpaRepository<Shoe, Long>, ShoeRepositoryCustom {
    Optional<Shoe> findByCode(String code);
    List<Shoe> findByIdIn(List<Long> ids);
    List<Shoe> findByShoeCategory(Category category);

    @Query(value = "SELECT COUNT(id) FROM shoe WHERE category_id = :categoryId", nativeQuery = true)
    Integer findByCategoryId(Long categoryId);
}
