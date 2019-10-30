import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountGroup } from '../../classes/accountGroup';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-account-groups',
  templateUrl: './account-groups.component.html',
  styleUrls: ['./account-groups.component.scss']
})
export class AccountGroupsComponent implements OnInit {

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor() { }

  displayedColumns: string[] = ['title','accounts', 'admins', 'button'];

  accountGroups: AccountGroup[] = [
    {title: 'business25', accounts: 12, admins:['Mats', 'Jonas', 'Bengt', 'Natalie']},
    {title: 'business12', accounts: 5, admins: ['John Doe']},
    {title: 'business3911', accounts: 4, admins: ['Jane Doe', 'Mustafa']},
    {title: 'business40', accounts: 16, admins: ['Sara', 'Örjan', 'Nisse', 'Jasmin', 'Benjamin']},
  ];

  dataSource;

  hidden: boolean;

  ngOnInit() {
    this.accountGroups.forEach(el => {
      el.hidden = false;
    });

    this.dataSource = new MatTableDataSource(this.accountGroups);
    
    this.dataSource.paginator = this.paginator;
  }

}
