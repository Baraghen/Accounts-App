import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../classes/breadCrumb';
import { Router, NavigationEnd, ActivatedRoute, RouterEvent, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  /* breadCrumbs:BreadCrumb[] = [];  */
  breadCrumbs;
    
  ngOnInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route) => {
      while (route.firstChild) { route = route.firstChild; }
      console.log('route' + route);
      return route;
    }))
    .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
    .subscribe( route => {

      /* let breadCrumb = new BreadCrumb;  */

      let snapshot = this.router.routerState.snapshot;
      this.breadCrumbs = [];
      let url = snapshot.url;
      
      let routeData = route.snapshot.data;
      
      let label = routeData['breadCrumb'];
      let params = snapshot.root.params;
      
      // console.log('URL' + url);
      console.log('Label' + routeData);
      // console.log('params' + params);

      this.breadCrumbs.push({
        url: url,
        label: label,
        params: params
      })

      ;
      
    });
    
    console.log('BREADCRUMBS' + this.breadCrumbs);
  }

}
