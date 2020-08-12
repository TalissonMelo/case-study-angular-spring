import { Injectable } from '@angular/core';
import { Client } from './client/model/Client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) { }

  save(client: Client) : Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/clients', client);
  }

  findByClient(): Client{
    let client : Client = new Client()
    client.name = "Talisson Melo"
    client.cpf = '123456789'
    return client;
  }
}
