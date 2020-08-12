import { Component, OnInit } from '@angular/core';
import {Client} from '../model/Client'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: Client
  name: string

  constructor() { 
    this.client = new Client();
    this.client.name = "TALISSON MELO"
    this.name = 'Talisson'
  }

  ngOnInit(): void {
  }

  clicar(){
    alert('Cliquei!.')
  }

}
