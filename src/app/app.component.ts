import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstName = 'marc';
  today = new Date();
  employee: Employee = new Employee('Marc', 'White', 100000);
}
