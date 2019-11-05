import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { AccountDataService } from '../../services/account-data.service';
import { FilterValues } from '../../classes/filterValues';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-group-page',
  templateUrl: './selected-group-page.component.html',
  styleUrls: ['./selected-group-page.component.scss']
})
export class SelectedGroupPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _data: AccountDataService) { }

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  title: string;

  displayedColumns: string[] = ['check','domain','id', 'isEngage', 'isExpired', 'widgetsEnabled', 'onsiteCampaigns', 'button'];

  dataSource;

  routeData;

  getData(params?:FilterValues) {
    this._data.getAllAccountData(params).subscribe(
      data => {
        let objFinal = [Object.assign(data[0][0], data[1][0])]
        this.dataSource = new MatTableDataSource(objFinal);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    let filterValues:FilterValues = {
      account: {
        id: id
      },
      info: {
        site_id: id
      } 
    }
    this.getData(filterValues)
    
    //changes route data
    let nameID = this.route.snapshot.paramMap.get('id');
    this.routeData = this.route.data.subscribe(route => route.breadCrumb[2].label = 'Group: '  + nameID);
  }
}