package com.nnh.be.repository;

import com.nnh.be.model.Evaluate;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EvaluateRepository extends JpaRepository<Evaluate, Long> {
    @Query(value = "SELECT * FROM evaluate WHERE shoe_id = :shoeId", nativeQuery = true)
    List<Evaluate> findByShoeId(Long shoeId);
    @Query(value = "SELECT * FROM evaluate WHERE user_id = :userId AND shoe_id = :shoeId", nativeQuery = true)
    Optional<Evaluate> findByUserIdAndShoeId(Long userId, Long shoeId);
    @Query(value = "SELECT AVG(star) FROM evaluate WHERE shoe_id = :shoeId", nativeQuery = true)
    Integer getAverageStarByShoeId(Long shoeId);

    void deleteByUserEvaluate(User user);
    void deleteByShoeEvaluate(Shoe shoe);
}
