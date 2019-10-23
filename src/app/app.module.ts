import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
//materials
import { MatTableModule, MatInputModule, MatSortModule, MatDialogModule, MatIconModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//interceptor
import { HttpInterceptorService } from './services/http-interceptor.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//spinner
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
// FormControl
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFieldComponent } from './search-field/search-field.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    LoaderComponent,
    SearchFieldComponent
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
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
