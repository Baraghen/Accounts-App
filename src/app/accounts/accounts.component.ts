import { Component, OnInit, ViewChild} from '@angular/core';
// Materials
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table'
// Service
import { AccountDataService } from '../services/account-data.service';
// Router
import { Router } from '@angular/router';
// Classes
import { Account } from '../classes/account';
import { AccountInfo } from '../classes/accountInfo';
import { FullAccount } from '../classes/fullAccount';
import { FilterValues } from '../classes/filterValues';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit{

  constructor(private accountDataService: AccountDataService, private router: Router) { }

  columnsToDisplay: string[] = ['id', 'name', 'isEngage', 'isExpired', 'areWidgetsActivated', 'group', 'has_consent', 'paused', 'expireDate', 'scheduledRemoval'];

  receiveCategory($event) {
    this.columnsToDisplay = $event
  }

  onSelect(account) {
    this.router.navigate(['/account', account.id]);
  }

  showTable: boolean;

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

  receiveFilterValues($event){
    this.showTable = false;
    return this.tableFilter($event);
  }


  accountList: Account[];
  accountInfoList: AccountInfo[];

  tableFilter(params?:FilterValues){
    if (params) {

      this.accountDataService.getAllAccountData(params).subscribe(
        data => {
          this.accountList = data[0];
          this.accountInfoList = data[1];
          let arr = [];
          
          this.accountList.forEach(acc => {
            let id = acc.id.toString();
            this.accountInfoList.forEach(info => {
              if (id == info.site_id) {
                let fullAccount = new FullAccount;
    
                fullAccount.account = acc;
                fullAccount.accountInfo = info;
                
                arr.push(fullAccount);
              }
            })
          })
          this.showTable = true;
          this.dataSource = new MatTableDataSource(arr);
        }, 
        error => {
          this.errorMessage = error;
        });

    } else {
      
      this.accountDataService.getAllAccountData().subscribe(
        data => {
          this.accountList = data[0];
          this.accountInfoList = data[1];
          let arr = [];
          
          this.accountList.forEach(acc => {
             let id = acc.id.toString();

            this.accountInfoList.forEach(info => {
              if (id == info.site_id) {
                let fullAccount = new FullAccount;
                fullAccount.account = acc;
                fullAccount.accountInfo = info;
                
                arr.push(fullAccount);
              }
            })
          })
          this.showTable = true;
          this.dataSource = new MatTableDataSource(arr);
        }, 
        error => {
          this.errorMessage = error;
        });
    }
  }

  hide = true;
  
  toggleForm(){
    this.hide = !this.hide;
  }

  ngOnInit() {

    if(localStorage.getItem('savedCategories') === null) {
      this.columnsToDisplay = ['id', 'name', 'isEngage', 'isExpired', 'areWidgetsActivated', 'group', 'has_consent', 'paused', 'expireDate', 'scheduledRemoval'];
    }
    else {
      this.columnsToDisplay = JSON.parse(localStorage.getItem('savedCategories'))
    }
    
    this.tableFilter();

    }



    
}
