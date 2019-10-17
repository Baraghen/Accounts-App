import { Component, OnInit, ViewChild} from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table'
import { FormControl } from '@angular/forms';

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
  
  // FormControl for Filters

  idFilter = new FormControl('');
  nameFilter = new FormControl('');
  isEngageFilter = new FormControl('');
  isExpiredFilter = new FormControl('');
  areWidgetsActivatedFilter = new FormControl('');
  groupFilter = new FormControl('');

  filterValues = {
    id: '',
    name: '',
    isEngage: '',
    isExpired: '',
    areWidgetsActivated: '',
    group: ''
  };

  tableFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.id.toString().toLowerCase().indexOf(searchTerms.id) !== -1
        && data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        && data.isEngage.toString().toLowerCase().indexOf(searchTerms.isEngage) !== -1
        && data.isExpired.toString().toLowerCase().indexOf(searchTerms.isExpired) !== -1
        && data.areWidgetsActivated.toString().toLowerCase().indexOf(searchTerms.areWidgetsActivated) !== -1
        && data.group.name.toString().toLowerCase().indexOf(searchTerms.group) !== -1
    }
    return filterFunction;
  }


  ngOnInit() {
    
    

    this.accountDataService.getAccounts().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.filterPredicate = this.tableFilter();
        
        for(var i = 0; i < this.dataSource.filteredData.length; i++) {
          if(this.dataSource.filteredData[i].group === null) {
            this.dataSource.filteredData[i].group = {};
            this.dataSource.filteredData[i].group.id = '';
            this.dataSource.filteredData[i].group.name = '';
          }
        }
      }, 
      error => {
        this.errorMessage = error;
      });
      

    this.idFilter.valueChanges
      .subscribe(
        id => {
          this.filterValues.id  = id;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.isEngageFilter.valueChanges
      .subscribe(
        isEngage => {
          this.filterValues.isEngage = isEngage;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.isExpiredFilter.valueChanges
      .subscribe(
        isExpired => {
          this.filterValues.isExpired = isExpired;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.areWidgetsActivatedFilter.valueChanges
      .subscribe(
        areWidgetsActivated => {
          this.filterValues.areWidgetsActivated = areWidgetsActivated;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.groupFilter.valueChanges
      .subscribe(
        group => {
          this.filterValues.group = group;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
      
    }


    
}
