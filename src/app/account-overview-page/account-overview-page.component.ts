import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../services/account-data.service';
import { ActivatedRoute } from '@angular/router';
import { FilterValues } from '../classes/filterValues';


@Component({
  selector: 'app-account-overview-page',
  templateUrl: './account-overview-page.component.html',
  styleUrls: ['./account-overview-page.component.scss']
})
export class AccountOverviewPageComponent implements OnInit {

  constructor(private accountDataService: AccountDataService, private route: ActivatedRoute) { }

  accountData;

  showContent:boolean = false;

  convertToDate(dateString) {
    if(dateString !== null) {
      let d = new Date(Number(dateString)).toLocaleString('en-SE', this.options)
      return d
    }
    else {
      return 'No date available';
    }
  }

  options = {
    weekday: 'short', 
    day: 'numeric',
    month: 'long', 
    year: 'numeric' 
  }

  d = new Date(1562324951475).toLocaleString('en-SE', this.options);

  getData(params?:FilterValues) {
    this.accountDataService.getAllAccountData(params).subscribe(
      data => {
        this.accountData = data;
        this.showContent = true;
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

  }

}
