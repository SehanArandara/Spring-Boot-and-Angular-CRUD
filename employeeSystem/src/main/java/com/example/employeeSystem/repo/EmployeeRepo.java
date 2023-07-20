package com.example.employeeSystem.repo;

import com.example.employeeSystem.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository <Employee,Long>     //  after this repo will give access to the find/findAll /delete like methods
{
   // void deleteByEmpID( Long id );

    Optional<Employee> findEmployeeById( Long id );
}
