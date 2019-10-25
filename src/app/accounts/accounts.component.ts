import { Component, OnInit, ViewChild} from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table'
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

  constructor(private accountDataService: AccountDataService) { }

  columnsToDisplay: string[] = ['id', 'name', 'isEngage', 'isExpired', 'areWidgetsActivated', 'group', 'has_consent', 'paused', 'expireDate', 'scheduledRemoval'];

  receiveCategory($event) {
    this.columnsToDisplay = $event
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

/*   tableFilter(params?:object){

    if (params) {
      this.accountDataService.filterAccounts(params).subscribe(
        data => {
          this.showTable = true;
          this.dataSource = new MatTableDataSource(data);
          
        }, 
        error => {
          this.errorMessage = error;
        });
        
      } else{
        this.accountDataService.filterAccounts().subscribe(
          data => {
            this.showTable = true;
            this.dataSource = new MatTableDataSource(data);
  
        }, 
        error => {
          this.errorMessage = error;
        });
    }
  } */

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
