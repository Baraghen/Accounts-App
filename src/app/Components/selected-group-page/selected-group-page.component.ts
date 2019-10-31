import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { SelectedAccountGroup } from '../../classes/selectedAccountGroup';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-group-page',
  templateUrl: './selected-group-page.component.html',
  styleUrls: ['./selected-group-page.component.scss']
})
export class SelectedGroupPageComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  title: string;

  displayedColumns: string[] = ['check','domain','id', 'isEngage', 'isExpired', 'widgetsEnabled', 'onsiteCampaigns', 'button'];

  selectedAccountGroup: SelectedAccountGroup[] = [
    {domain: 'idealofsweden.se', id: 12345, isEngage: true, isExpired: true, widgetsEnabled: true, onsiteCampaigns: true},
    {domain: 'idealofsweden.de', id: 12345, isEngage: false, isExpired: true, widgetsEnabled: true, onsiteCampaigns: true},
    {domain: 'idealofsweden.be', id: 12345, isEngage: true, isExpired: true, widgetsEnabled: false, onsiteCampaigns: true},
    {domain: 'idealofsweden.no', id: 12345, isEngage: true, isExpired: false, widgetsEnabled: true, onsiteCampaigns: true},
  ];

  dataSource;

  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.selectedAccountGroup);
    
    this.dataSource.paginator = this.paginator;

  }
}