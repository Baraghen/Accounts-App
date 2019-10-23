import { Component, OnInit, ViewChild} from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit{

  constructor(private accountDataService: AccountDataService) { }

  columnsToDisplay: string[] = ['id', 'name', 'isEngage', 'isExpired', 'areWidgetsActivated', 'group'];

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
      this.columnsToDisplay = ['id', 'name', 'isEngage', 'isExpired', 'areWidgetsActivated', 'group'];
    }
    else {
      this.columnsToDisplay = JSON.parse(localStorage.getItem('savedCategories'))
    }
    


      this.tableFilter();
    }

    


    
}
