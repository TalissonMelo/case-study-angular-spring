import { Injectable } from '@angular/core';
import { Client } from './client/model/Client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}/clients`, client);
  }

  findAllClient(): Observable<Client[]> {
    let tokenString = localStorage.getItem("access_token")
    let token = JSON.parse(tokenString)
    let headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.get<Client[]>(`${this.url}/clients`, { headers });
  }

  findById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/clients/${id}`);
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}/clients/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.url}/clients/${id}`);
  }
}
