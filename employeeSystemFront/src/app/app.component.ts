import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './Models/employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {     // by implementing the OnInt interfac we can use ngOnInit function

  public employees!: Employee[];
  public editEmployee!: Employee | any;
  public deleteEmployee!: Employee | any;

  ngOnInit() {    //ngOnInit means function that execute when the component call 
    this.getEmployess();

  }

  constructor(private employeeService: EmployeeService) { }

  public getEmployess(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response)
      }
    ),
      (error: any) => {
        alert(error.message);
      }
  }

  public openModel(employee: Employee | null, mode: string): void {

    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = 'none'
    button.setAttribute('data-toggle', 'modal')
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal')
    }
 
    if (mode === 'edit') {
      this.editEmployee = employee     // old employee is fill eual to the opend form employee 
      button.setAttribute('data-target', '#updateEmployeeModal')
    }

    if (mode === 'delete') {
      this.deleteEmployee = employee
      button.setAttribute('data-target', '#deleteEmployeeModal')
    }


    container?.appendChild(button)
    button.click();
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click()      // this will click the
    this.employeeService.addEmployees(addForm.value).subscribe(    // way to catch the data from the backend in frontend
      (response : Employee )=>{
        console.log(response)
        this.getEmployess();      // referesh and show new added one 
        addForm.reset();
      },
      (error : any) =>{
        alert(error.message)
        addForm.reset();
      }
    )        
  }

  public onUpdateEmployee(employee: Employee): void {
    document.getElementById('add-employee-form')?.click()      // this will click the
    this.employeeService.updateEmployees(employee).subscribe(    // way to catch the data from the backend in frontend
      (response : Employee )=>{
        console.log(response)
        this.getEmployess();      // referesh and show new added one 
      },
      (error : any) =>{
        alert(error.message)
      }
    )        
  }

  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployees(employeeId).subscribe(    // way to catch the data from the backend in frontend
      (response : void )=>{
        console.log(response)
        this.getEmployess();      // referesh and show new added one 
      },
      (error : any) =>{
        alert(error.message)
      }
    )        
  }

}
