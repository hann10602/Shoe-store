package com.nnh.be.repository;

import com.nnh.be.model.Image;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByShoeImage(Shoe shoe);
    void deleteAllByShoeImage(Shoe shoe);

    @Query(value = "SELECT url FROM image WHERE shoe_id = :shoeId", nativeQuery = true)
    List<String> getImageUrlsByShoeId(Long shoeId);
}
