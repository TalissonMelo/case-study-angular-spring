import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login/user'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  save(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
