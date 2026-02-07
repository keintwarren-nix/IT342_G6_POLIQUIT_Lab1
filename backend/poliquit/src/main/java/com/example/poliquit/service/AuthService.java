package com.example.poliquit.service;

import com.example.poliquit.model.User;
import com.example.poliquit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public User register(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setCreatedDate(LocalDate.now());
        return userRepository.save(user);
    }

    public boolean validate(String email, String password) {
        return userRepository.findByEmail(email)
                .map(u -> passwordEncoder.matches(password, u.getPassword()))
                .orElse(false);
    }
}