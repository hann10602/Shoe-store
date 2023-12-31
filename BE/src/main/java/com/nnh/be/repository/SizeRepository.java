package com.nnh.be.repository;

import com.nnh.be.model.Shoe;
import com.nnh.be.model.Size;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SizeRepository extends JpaRepository<Size, Long> {
    Optional<Size> findByCode(String code);
    List<Size> findByCodeIn(List<String> sizeCodes);
}
