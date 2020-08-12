import { Injectable } from '@angular/core';
import { Client } from './client/model/Client';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor() { }

  findByClient(): Client{
    let client : Client = new Client()
    client.name = "Talisson Melo"
    client.cpf = '123456789'
    client.id = 1
    client.register = '12/08/2020'
    return client;
  }
}
