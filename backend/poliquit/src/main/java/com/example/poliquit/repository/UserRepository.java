package com.poliquit.backend.repository;

import com.poliquit.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // This method is crucial! It allows us to search by username string.
    User findByUsername(String username);
}