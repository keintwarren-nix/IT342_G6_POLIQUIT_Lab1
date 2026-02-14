package com.example.poliquit.controller;

import com.example.poliquit.model.User;
import com.example.poliquit.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Allows React connection
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register") //
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            return ResponseEntity.ok(authService.register(user));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login") //
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        if (authService.validate(body.get("email"), body.get("password"))) {
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}