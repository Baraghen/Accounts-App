import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../classes/breadCrumb';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  breadCrumbs:BreadCrumb[];
    
    
  ngOnInit() {
    // Här ska det vara kod :)
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route)))

  }

}
