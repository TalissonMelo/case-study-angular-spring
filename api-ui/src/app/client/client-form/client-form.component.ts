import { Component, OnInit } from '@angular/core';
import {Client} from '../model/Client'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: Client

  constructor() { 
    this.client = new Client();
  }

  ngOnInit(): void {
  }

  clicar(){
    console.log(this.client)
  }

}
