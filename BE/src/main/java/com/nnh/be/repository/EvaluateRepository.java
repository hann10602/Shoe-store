package com.nnh.be.repository;

import com.nnh.be.model.Evaluate;
import com.nnh.be.model.Shoe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EvaluateRepository extends JpaRepository<Evaluate, Long> {
    List<Evaluate> findByShoeEvaluate(Shoe shoe);

    @Query(value = "SELECT AVG(star) FROM evaluate WHERE shoe_id = :shoeId", nativeQuery = true)
    Integer getAverageStarByShoeId(Long shoeId);
}
