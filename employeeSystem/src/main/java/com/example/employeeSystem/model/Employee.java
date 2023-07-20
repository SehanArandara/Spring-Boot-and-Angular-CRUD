package com.example.employeeSystem.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Employee implements Serializable      // best way to implement this in serializable
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)    // define auto ID
    @Column(nullable = false,updatable = false)
    private Long id ;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    private String imgURL;
    @Column(nullable = false,updatable = false)
    private String employeeCode;

    @Override
    public String toString(){
        return "Employee {name : }"+name+" , email : "+email+" , jobTitle : "+jobTitle+" , phone : " +phone+" imgURL : "+imgURL+"}";
    }
}
