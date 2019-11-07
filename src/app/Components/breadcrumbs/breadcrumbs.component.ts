import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouterEvent, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  breadCrumbs;

  ngOnInit() {
    

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route) => {
      while (route.firstChild) { route = route.firstChild; }
      return route;
    }))
    .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
    .subscribe( route => {

      let snapshot = this.router.routerState.snapshot;
      this.breadCrumbs = [];

      let url = snapshot.url;
      let routeData = route.snapshot.data;
      let label = routeData['breadCrumb'];

      this.breadCrumbs.push({
        url: url,
        label: label,
      });
      
    });

  }

}
