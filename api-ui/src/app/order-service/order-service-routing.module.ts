import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderServiceFormComponent } from './order-service-form/order-service-form.component';
import { OrderServiceListComponent } from './order-service-list/order-service-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: 'order-service', component: LayoutComponent, children: [
      { path: 'form', component: OrderServiceFormComponent },
      { path: 'list', component: OrderServiceListComponent },
      {path: '', redirectTo: '/order-service/list', pathMatch: 'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderServiceRoutingModule { }
