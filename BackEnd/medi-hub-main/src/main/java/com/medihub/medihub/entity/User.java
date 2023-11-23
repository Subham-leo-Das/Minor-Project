package com.medihub.medihub.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="user-detail")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String gender;
    private String state;
    private String city;
    private String passWord;
    private long phoneNo;
    private int age;
}
