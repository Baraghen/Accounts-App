import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-account-groups',
  templateUrl: './account-groups.component.html',
  styleUrls: ['./account-groups.component.scss']
})
export class AccountGroupsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['title','accounts', 'admins', 'button'];

  accountGroups: Object[] = [
    {title: 'business25', accounts: 12, admins:['Mats', 'Jonas', 'Bengt']},
    {title: 'business12', accounts: 5, admins: ['John Doe']},
    {title: 'business3911', accounts: 4, admins: ['Jane Doe']},
    {title: 'business40', accounts: 16, admins: ['Sara', 'Örjan', 'Herkules']}
  ];

  dataSource;

  

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.accountGroups);
    
  }

}
