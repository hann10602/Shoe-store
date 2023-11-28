package com.nnh.be.repository;

import com.nnh.be.model.Bill;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
    @Query(value = "SELECT * FROM bill WHERE user_id = :userId", nativeQuery = true)
    List<Bill> findByUserId(Long userId);
    @Modifying
    @Transactional
    @Query(value = "UPDATE evaluate SET is_evaluate = true WHERE user_id = :userId AND shoe_id = :shoeId", nativeQuery = true)
    Integer setIsEvaluateByShoeIdAndUserId(Long userId, Long shoeId);

    void deleteByUserOrder(User user);
    void deleteByShoeOrder(Shoe shoe);
}
