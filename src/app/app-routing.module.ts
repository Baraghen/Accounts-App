import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { AccountOverviewPageComponent } from './Components/account-overview-page/account-overview-page.component';
import { AccountGroupsComponent } from './Components/account-groups/account-groups.component';
import { SelectedGroupPageComponent } from './Components/selected-group-page/selected-group-page.component';


const routes: Routes = [
  {path: '', component: AccountsComponent, data:{ breadCrumb: 'Admin' }},
  {path: 'account/:id', component: AccountOverviewPageComponent, data:{ breadCrumb: 'Account '}},
  {path: 'account-groups', component: AccountGroupsComponent, data:{ breadCrumb: 'Account-groups' }},
  {path: 'account-groups/:title', component: SelectedGroupPageComponent, data:{ breadCrumb: 'Group: ' }}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
