import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderServiceRoutingModule } from './order-service-routing.module';
import { OrderServiceFormComponent } from './order-service-form/order-service-form.component';
import { OrderServiceListComponent } from './order-service-list/order-service-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    OrderServiceFormComponent,
    OrderServiceListComponent],
  imports: [

    CommonModule,
    OrderServiceRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [

    OrderServiceFormComponent,
    OrderServiceListComponent
  ]
})
export class OrderServiceModule { }
