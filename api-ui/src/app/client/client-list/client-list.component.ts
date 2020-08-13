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

  constructor( private service: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.findAllClient().subscribe(response =>  {
      this.clients = response
    });
  }

  newClient(){
    this.router.navigate(['/clients-form'])
  }
}
