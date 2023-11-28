package com.nnh.be.repository;

import com.nnh.be.model.Cart;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.Size;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query(value = "SELECT * FROM cart WHERE user_id = :userId", nativeQuery = true)
    List<Cart> findByUserId(Long userId);

    @Query(value = "SELECT * FROM cart WHERE id in :ids", nativeQuery = true)
    List<Cart> findByIdIn(List<Long> ids);
    void deleteByUserCart(User user);
    void deleteByShoeCart(Shoe shoe);
    Cart findByUserCartAndShoeCartAndSizeCart(User user, Shoe shoe, Size size);
}
