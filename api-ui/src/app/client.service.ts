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

  findAllClient(): Observable<Client[]>{
    return this.http.get<Client[]>('http://localhost:8080/clients');
  }

  findById(id: number) : Observable<Client> {
    return this.http.get<Client>(`http://localhost:8080/clients/${id}`);
  }

  updateClient(id: number ,client : Client): Observable<Client> {
    return this.http.put<Client>(`http://localhost:8080/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/clients/${id}`);
  }
}
