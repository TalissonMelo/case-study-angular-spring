import { Component, OnInit } from '@angular/core';
import { OrderServiceSearch } from './order-service-search'
import { OrderServiceService } from 'src/app/order-service.service';

@Component({
  selector: 'app-order-service-list',
  templateUrl: './order-service-list.component.html',
  styleUrls: ['./order-service-list.component.css']
})
export class OrderServiceListComponent implements OnInit {

  name: string
  message: string
  months: number[]
  month: number
  list: OrderServiceSearch[]

  constructor(private service: OrderServiceService) {
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.findAll(this.name, this.month).subscribe(response => {
      this.list = response;
      if (this.list.length <= 0) {
        this.message = "Nenhum registro encontrado. Tente novamente preenchendo os campos NOME DO CLIENTE e MES."
      } else {
        this.message = null
      }
    });
  }
}
