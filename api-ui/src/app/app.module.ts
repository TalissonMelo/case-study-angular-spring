import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

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
import { AuthService} from './auth.service'
import { TokenInterceptor} from './token.interceptor'
import { AuthGuard } from './auth.guard';

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
    OrderServiceService,
    AuthGuard,
    AuthService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
