import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientService } from '../client.service';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {path: 'clients-form' , component: ClientFormComponent},
  {path: 'clients-view' , component: ClientListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
