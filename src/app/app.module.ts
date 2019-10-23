import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
//materials
import { MatTableModule, MatInputModule, MatSortModule, MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
//interceptor
import { HttpInterceptorService } from './services/http-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//spinner
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
// FormControl
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpGroupPickerComponent, CategoryPopup } from './pop-up-group-picker/pop-up-group-picker.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    LoaderComponent,
    PopUpGroupPickerComponent,
    CategoryPopup
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
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule
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
