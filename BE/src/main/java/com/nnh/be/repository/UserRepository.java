package com.nnh.be.repository;

import com.nnh.be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String name);
    List<User> findByUsernameOrEmailOrPhoneNum(String username, String email, String phoneNum);
}
