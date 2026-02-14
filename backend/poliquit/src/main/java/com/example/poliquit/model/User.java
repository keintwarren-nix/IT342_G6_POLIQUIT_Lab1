package com.example.poliquit.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID; // Matches ERD

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    private String profilePicture;
    private String profileBio;
    private String address;
    private String gender;
    private String role = "USER";

    @Column(name = "created_date")
    private LocalDate createdDate; // Matches ERD
}