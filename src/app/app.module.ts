import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './Components/accounts/accounts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

//materials
import { MatTableModule, MatInputModule, MatSortModule, MatDialogModule, MatIconModule, MatButtonModule, MatRadioModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

//interceptor
import { HttpInterceptorService } from './services/http-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//spinner
import { LoaderComponent } from './Components/loader/loader.component';
import { LoaderService } from './services/loader.service';
// FormControl
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './Components/search-field/search-field.component';

import { PopUpGroupPickerComponent, CategoryPopup } from './Components/pop-up-group-picker/pop-up-group-picker.component';
import { AccountOverviewPageComponent } from './Components/account-overview-page/account-overview-page.component';
import { AccountGroupsComponent } from './Components/account-groups/account-groups.component';
import { SelectedGroupPageComponent } from './Components/selected-group-page/selected-group-page.component';
import { BreadcrumbsComponent } from './Components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    LoaderComponent,
    SearchFieldComponent,
    PopUpGroupPickerComponent,
    CategoryPopup,
    AccountOverviewPageComponent,
    AccountGroupsComponent,
    SelectedGroupPageComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatToolbarModule
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    CategoryPopup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
