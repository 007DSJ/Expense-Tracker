import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //Income
  lastMonthsIncome = ['January: $1000','Feburary: $1500','March:$1200'];
  currentMonthIncome='$2000';

  //Expense
  lastMonthsExpense = ['January: $900','Feburary: $1800','March:$1000'];
  currentMonthExpense='$1000';

  //Todo Transactions
  todoTransactions=[
    {description: 'Pay Electricity Bill'},
    {description: 'Pat Mobile Bill'},
    {description: 'Submit Monthly Report'},
    {description: 'Renew Car Insurance'},
  ]

  //Total Income
  totalCurrentMonthIncome = 1900
  totalCurrentMonthExpense = 1200

  constructor(private router : Router){}

  onIncome()
  {
    this.router.navigate(['budget-planner/income']);
  }

  onExpense()
  {
    this.router.navigate(['budget-planner/expense']);
  }

  onTodo()
  {
    this.router.navigate(['budget-planner/todo']);
  }

  get currentMonthSavings() : number{
      return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense
  }
}
