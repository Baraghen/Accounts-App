import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-group-page',
  templateUrl: './selected-group-page.component.html',
  styleUrls: ['./selected-group-page.component.scss']
})
export class SelectedGroupPageComponent implements OnInit {

  constructor(private router: Router) { }

  onSelect(account) {
    this.router.navigate(['/account', account.id]);
  }
  

  ngOnInit() {
  }

}
