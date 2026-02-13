package com.poliquit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    private String username;
    private String password;
    private String email;
}