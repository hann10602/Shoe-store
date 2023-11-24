package com.nnh.be.repository;

import com.nnh.be.model.Shoe;
import com.nnh.be.model.ShoeSize;
import com.nnh.be.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoeSizeRepository extends JpaRepository<ShoeSize, Long> {
    List<ShoeSize> findAllByShoeSize(Shoe shoe);
    void deleteAllByShoeSize(Shoe shoe);

    @Query(value = "SELECT s.code FROM shoe_size ss JOIN size s ON ss.size_id = s.id WHERE ss.shoe_id = :shoeId", nativeQuery = true)
    List<String> getSizesByShoeId(Long shoeId);
}
