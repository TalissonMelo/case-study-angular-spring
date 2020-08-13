import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients : Client[] = []

  constructor( private service: ClientService) { }

  ngOnInit(): void {
    this.service.findAllClient().subscribe(response =>  {
      this.clients = response
    });
  }

}
