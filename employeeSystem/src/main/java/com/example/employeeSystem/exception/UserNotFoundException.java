package com.example.employeeSystem.exception;

public class UserNotFoundException extends RuntimeException
{
    public UserNotFoundException( String s )
    {
        super(s);
    }
}
