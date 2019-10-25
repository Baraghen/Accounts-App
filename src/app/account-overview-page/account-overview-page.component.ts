import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../classes/account';

@Component({
  selector: 'app-account-overview-page',
  templateUrl: './account-overview-page.component.html',
  styleUrls: ['./account-overview-page.component.scss']
})
export class AccountOverviewPageComponent implements OnInit {

  constructor(private accountDataService: AccountDataService, private route: ActivatedRoute) { }

  accountData = {} as Account;

  showContent:boolean = false;

  options = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZoneName: 'short'
  }

  d = new Date(1562324951475).toLocaleString('en-SE', this.options);

  getData(params?:object) {
    this.accountDataService.filterAccounts(params).subscribe(
      data => {
        this.accountData = data[0];
        console.log(this.accountData)
        this.showContent = true;
      }
    )
  }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    let filterValues:Object = {
      id: id
    }

    this.getData(filterValues)

  }

}
