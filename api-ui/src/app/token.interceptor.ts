import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let tokenString = localStorage.getItem("access_token")

    let url = request.url;

    if (tokenString && !url.endsWith('/oauth/token')) {
      let token = JSON.parse(tokenString)
      let jwt = token.access_token
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + jwt
        }
      })
    }
    return next.handle(request);
  }
}
