package com.example.employeeSystem.service;

import com.example.employeeSystem.exception.UserNotFoundException;
import com.example.employeeSystem.model.Employee;
import com.example.employeeSystem.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService
{
    @Autowired
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo){
        this.employeeRepo =employeeRepo;
    }

    // save a new user
    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode( UUID.randomUUID().toString() );
        return employeeRepo.save( employee );
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteById(id);      // this function doesnt have in Repo by default so we have to add that to repo
    }

    public Employee findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id)
                       .orElseThrow(()-> new UserNotFoundException( "User by id "+ id + "is not found !!" ) );
    }
}
