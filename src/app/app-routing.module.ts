import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountOverviewPageComponent } from './account-overview-page/account-overview-page.component';
import { AccountGroupsComponent } from './account-groups/account-groups.component'


const routes: Routes = [
  {path: '', component: AccountsComponent},
  {path: 'account/:id', component: AccountOverviewPageComponent},
  {path: 'account-groups', component: AccountGroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
