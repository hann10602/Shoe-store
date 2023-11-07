package com.nnh.be.repository;

import com.nnh.be.model.ShoeSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoeSizeRepository extends JpaRepository<ShoeSize, Long> {
    List<ShoeSize> findAllByShoeId(Long id);
}
