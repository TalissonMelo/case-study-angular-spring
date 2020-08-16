import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderServiceFormComponent } from './order-service-form/order-service-form.component';
import { OrderServiceListComponent } from './order-service-list/order-service-list.component';

const routes: Routes = [
  {path: 'order-service-form' , component : OrderServiceFormComponent},
  {path: 'order-service-list', component: OrderServiceListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderServiceRoutingModule { }
