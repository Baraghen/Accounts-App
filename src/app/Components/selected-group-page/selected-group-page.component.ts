import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { AccountDataService } from '../../services/account-data.service';
import { FilterValues } from '../../classes/filterValues';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../classes/account';
import { AccountInfo } from '../../classes/accountInfo';
import { FullAccount } from '../../classes/fullAccount';



@Component({
  selector: 'app-selected-group-page',
  templateUrl: './selected-group-page.component.html',
  styleUrls: ['./selected-group-page.component.scss']
})
export class SelectedGroupPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _data: AccountDataService) { }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  title: string;

  displayedColumns: string[] = ['check','domain','id', 'isEngage', 'isExpired', 'widgetsEnabled', 'onsiteCampaigns', 'button'];

  dataSource;

  routeData;

  accountList: Account[];
  accountInfoList: AccountInfo[];

  getData(params?:FilterValues){

    let specAcc = new FullAccount;
    let arr = [];
    //The properties in the table is the same for every URL because the urls doesnt have their own.
    this._data.getAllAccountData(params).subscribe(data => {
      
      this.accountList = data[0];
      this.accountInfoList = data[1];
      
      this.accountInfoList.forEach( info => {
        if (this.accountList[0].id == info.id) {
          specAcc.account = this.accountList[0];
          specAcc.accountInfo = info;
          
          specAcc.accountInfo.urls.forEach(url => {
            let objFinal = {
              url: [],
              fullAccount: specAcc
            }
            objFinal.url.push(url);
            arr.push(objFinal);
          })
        }
      })
      this.dataSource = new MatTableDataSource(arr);
      this.dataSource.paginator = this.paginator;
    })
  }

  updateAccount(account: Account){
    console.log(account);
    this._data.updateAccount(account).subscribe();
  }


  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id')

    let filterValues:FilterValues = {
      account: {
        groupName: id
      },
      info: {}
    }
    
    this.getData(filterValues)
    this.routeData = this.route.data.subscribe(route => route.breadCrumb[2].param = id);
  }
}