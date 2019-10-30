import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
//materials
import { MatTableModule, MatInputModule, MatSortModule, MatDialogModule, MatIconModule, MatButtonModule, MatRadioModule, MatPaginatorModule } from '@angular/material';
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
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
// FormControl
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './search-field/search-field.component';

import { PopUpGroupPickerComponent, CategoryPopup } from './pop-up-group-picker/pop-up-group-picker.component';
import { AccountOverviewPageComponent } from './account-overview-page/account-overview-page.component';
import { AccountGroupsComponent } from './account-groups/account-groups.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    LoaderComponent,
    SearchFieldComponent,
    PopUpGroupPickerComponent,
    CategoryPopup,
    AccountOverviewPageComponent,
    AccountGroupsComponent
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
    MatPaginatorModule
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
