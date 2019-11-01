import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { AccountOverviewPageComponent } from './Components/account-overview-page/account-overview-page.component';
import { AccountGroupsComponent } from './Components/account-groups/account-groups.component';
import { SelectedGroupPageComponent } from './Components/selected-group-page/selected-group-page.component';


const routes: Routes = [
  {
    path: '', 
    component: AccountsComponent, 
    data: { 
      // title: 'Admin',
      breadCrumb: [
        {
          label: 'Admin',
          url: ''
        }
      ] 
    },
  },
  {
    path: 'account/:id',
    component: AccountOverviewPageComponent,
    data: { 
      // title: 'Account',
      breadCrumb: [
        {
          label: 'Admin',
          url: ''
        },
        {
          label: 'Account',
          url: '/account/:id'
        }
      ] 
    },
  },
  {
    path: 'account-groups', 
    component: AccountGroupsComponent, 
    data: {
      // title: 'Account Groups',
      breadCrumb: [
        {
          label: 'Admin',
          url: ''
        },
        {
          label: 'Account Groups',
          url: '/account/account-groups'
        }
      ]
    },
  },
  {
    path: 'account-groups/:id', 
    component: SelectedGroupPageComponent, 
    data: { 
      // title: 'Group: ',
      breadCrumb: [
        {
          label: 'Admin',
          url: '/'
        },
        {
          label: 'Account Groups',
          url: '/account/account-groups'
        },
        {
          label: 'Group: ',
          url: '/account/account-groups/:id'
        }
        ]
    },
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
