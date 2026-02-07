package com.example.poliquit.repository;

import com.example.poliquit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    // Required for Login and Registration checks
    Optional<User> findByEmail(String email);
    
    // Optional: Useful if you want to check for unique usernames
    Optional<User> findByUsername(String username);
}