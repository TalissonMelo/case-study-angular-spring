import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order-service/order.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  url : string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  insertOrderService(orderService: OrderService) : Observable<OrderService> {
    return this.http.post<OrderService>(`${this.url}/order-services`, orderService);
  }
}
