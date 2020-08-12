import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

import { ClientRoutingModule } from './client-routing.module';
import { ClientFormComponent } from './client-form/client-form.component';


@NgModule({
  declarations: [ClientFormComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ], exports: [
    ClientFormComponent
  ]
})
export class ClientModule { }
