package com.nnh.be.repository;

import com.nnh.be.model.Image;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
//    void deleteAllByShoeId(Long id);
}
