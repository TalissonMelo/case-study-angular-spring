import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ClientModule } from './client/client.module'
import { OrderServiceModule } from './order-service/order-service.module'
import { ClientService } from './client.service'
import { OrderServiceService } from './order-service.service'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TemplateModule,
    AppRoutingModule,
    ClientModule,
    OrderServiceModule,
    FormsModule
  ],
  providers: [
    ClientService,
    OrderServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
