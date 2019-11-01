import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AccountGroup } from '../../classes/accountGroup';
import { AccountDataService } from '../../services/account-data.service';
import { MatPaginator } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-groups',
  templateUrl: './account-groups.component.html',
  styleUrls: ['./account-groups.component.scss']
})
export class AccountGroupsComponent implements OnInit {

  constructor(private router: Router, private accountDataService: AccountDataService) { }

  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  onSelect(account) {
    this.router.navigate(['/account-groups', account.name]);
  }

  displayedColumns: string[] = ['check','title','accounts', 'admins', 'button'];

  dataSource;

  getData() {
    this.accountDataService.getAllAccountData().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data[0]);
        this.dataSource.data.forEach(el => {
          el.hidden = false;
        });
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource.data)
        
      }
    )
  }

  hidden: boolean;

  ngOnInit() {

    this.getData()

  }

}
