import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client/model/Client';
import { ClientService } from 'src/app/client.service';
import { OrderService } from '../order.service'
import { OrderServiceService } from 'src/app/order-service.service';

@Component({
  selector: 'app-order-service-form',
  templateUrl: './order-service-form.component.html',
  styleUrls: ['./order-service-form.component.css']
})
export class OrderServiceFormComponent implements OnInit {

  clients: Client[] = []
  orderService: OrderService

  constructor(private cleintService: ClientService,
    private service: OrderServiceService) { }

  ngOnInit(): void {
    this.cleintService.findAllClient().subscribe(response => this.clients = response);
    this.orderService = new OrderService();
  }

  onSubmit() {
    this.service.insertOrderService(this.orderService).subscribe(response => console.log(response));
  }
}
