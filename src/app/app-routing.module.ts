import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { AccountOverviewPageComponent } from './Components/account-overview-page/account-overview-page.component';
import { AccountGroupsComponent } from './Components/account-groups/account-groups.component';
import { SelectedGroupPageComponent } from './Components/selected-group-page/selected-group-page.component';


const routes: Routes = [
  {path: '', component: AccountsComponent},
  {path: 'account/:id', component: AccountOverviewPageComponent},
  {path: 'account-groups', component: AccountGroupsComponent},
  {path: 'account-groups/:title', component: SelectedGroupPageComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
