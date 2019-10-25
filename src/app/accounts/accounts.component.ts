import { Component, OnInit, ViewChild} from '@angular/core';
// Materials
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table'
// Service
import { AccountDataService } from '../services/account-data.service';
// Router
import { Router } from '@angular/router';

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

  tableFilter(params?:object){

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
