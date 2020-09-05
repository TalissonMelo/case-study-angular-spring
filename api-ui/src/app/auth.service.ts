import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './login/user'
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrl + '/users';
  tokenUrl: string = environment.apiUrl + environment.tokenUrl;
  clientId: string = environment.clientId;
  clientSecret: string = environment.clientSecret;
  jwtHelper : JwtHelperService = new JwtHelperService()

  constructor(private http: HttpClient) { }

  getToken(){
    let tokenString = localStorage.getItem("access_token")
    if (tokenString) {
      let token = JSON.parse(tokenString).access_token
      return token
    }
    return null;
  }

  isAuthentication() : boolean {
    let token = this.getToken();
    if(token){
      let expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  save(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  log(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }


    return this.http.post(this.tokenUrl, params.toString(), { headers });
  }
}
