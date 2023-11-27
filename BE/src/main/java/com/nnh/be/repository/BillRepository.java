package com.nnh.be.repository;

import com.nnh.be.model.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
    @Query(value = "SELECT * FROM bill WHERE user_id = :userId", nativeQuery = true)
    List<Bill> findByUserId(Long userId);
}
