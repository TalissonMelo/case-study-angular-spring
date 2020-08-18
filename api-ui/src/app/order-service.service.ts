import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OrderService } from './order-service/order.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderServiceSearch } from './order-service/order-service-list/order-service-search';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  url: string = environment.apiUrl + "/order-services";

  constructor(private http: HttpClient) { }

  insertOrderService(orderService: OrderService): Observable<OrderService> {
    return this.http.post<OrderService>(`${this.url}`, orderService);
  }

  findAll(name: string, month: number): Observable<OrderServiceSearch[]> {

    const httpParams = new HttpParams()
      .set("name", name)
      .set("month", month.toString())
    
    const url = this.url + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }
}
