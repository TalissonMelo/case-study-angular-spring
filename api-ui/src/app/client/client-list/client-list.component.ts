import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from 'src/app/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients : Client[] = []
  client: Client
  messageError : string
  messageSuccess : string

  constructor( private service: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.findAllClient().subscribe(response =>  {
      this.clients = response
    });
  }

  newClient(){
    this.router.navigate(['/clients/form'])
  }

  initialDelete(client: Client){
    this.client = client
  }

  deleteClient(){
    this.service.deleteClient(this.client.id).subscribe(response => {
      this.messageSuccess = "Cliente Deletado com sucesso!."
      this.messageError = null
      this.ngOnInit()
    }, error => {
      this.messageError = error.error
      this.messageSuccess = null
    })
  }
}
