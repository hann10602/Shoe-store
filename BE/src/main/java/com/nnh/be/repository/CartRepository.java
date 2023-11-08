package com.nnh.be.repository;

import com.nnh.be.model.Cart;
import com.nnh.be.model.Shoe;
import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findByUserCart(User user);
    void deleteByUserCart(User user);
    Cart findByUserCartAndShoeCart(User user, Shoe shoe);
}
