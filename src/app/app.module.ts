import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { CustomerBrowserComponent } from './customer-browser/customer-browser.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerService } from './customer.service';
import { CONFIG, Config } from './model';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from './message.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

const config: Config = {
  customerLimit: 5,
  apiUrl: 'http://localhost:13378'
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomerBrowserComponent,
    CustomerDetailsComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {provide: CustomerService, useClass: CustomerService},
    {provide: CONFIG, useValue: config},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
