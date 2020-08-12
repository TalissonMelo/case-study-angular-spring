import { Component, OnInit } from '@angular/core';
import {Client} from '../model/Client'
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: Client

  constructor(private service: ClientService) { 
    this.client = new Client()
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.client).subscribe(client => console.log(client));
  }

}
