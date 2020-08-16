import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client/model/Client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-order-service-form',
  templateUrl: './order-service-form.component.html',
  styleUrls: ['./order-service-form.component.css']
})
export class OrderServiceFormComponent implements OnInit {

  clients : Client[] = []

  constructor(private cleintService : ClientService) { }

  ngOnInit(): void {
    this.cleintService.findAllClient().subscribe(response => this.clients = response);
  }

  onSubmit(){
    console.log()
  }
}
