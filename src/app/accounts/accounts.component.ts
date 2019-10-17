import { Component, OnInit, ViewChild} from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { MatSort } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit{

  constructor(private accountDataService: AccountDataService) { }

  columnsToDisplay: string[] = ['id', 'name', 'isEngage', 'isExpired', 'areWidgetsActivated', 'group'];

  dataSource;

  private sort: MatSort;

  @ViewChild(MatSort, {static: false}) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    if (this.dataSource) {
      
      this.dataSource.sort = this.sort;
    }
  }
  
  errorMessage;
  
  ngOnInit() {
    this.accountDataService.getAccounts().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      }, 
      error => {
        this.errorMessage = error;
      });
      
      
    }


    
}
