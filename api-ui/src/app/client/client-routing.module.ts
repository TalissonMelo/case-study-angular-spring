import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientService } from '../client.service';
import { ClientListComponent } from './client-list/client-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {
    path: 'clients', component: LayoutComponent, children: [
      { path: 'form', component: ClientFormComponent },
      { path: 'form/:id', component: ClientFormComponent },
      { path: 'view', component: ClientListComponent },
      { path: '', redirectTo: '/clients/view' , pathMatch: 'full'  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
