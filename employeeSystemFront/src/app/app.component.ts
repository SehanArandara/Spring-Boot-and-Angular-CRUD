import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './Models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{     // by implementing the OnInt interfac we can use ngOnInit function

  public employees!: Employee[];

  ngOnInit(){    //ngOnInit means function that execute when the component call 
    this.getEmployess();
    
  }

  constructor(private employeeService : EmployeeService){}

  public getEmployess() : void {
    this.employeeService.getEmployees().subscribe(
      (response : Employee[]) =>{
        this.employees = response;
        console.log("Hi")
      }
    ),
    (error : any) => {
      alert(error.message);
    }
  }

}
