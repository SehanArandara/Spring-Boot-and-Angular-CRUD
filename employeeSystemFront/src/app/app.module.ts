import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule      // import this to do https
    ,FormsModule  // add it to do work with form
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
