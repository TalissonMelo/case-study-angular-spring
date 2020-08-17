import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-service-list',
  templateUrl: './order-service-list.component.html',
  styleUrls: ['./order-service-list.component.css']
})
export class OrderServiceListComponent implements OnInit {

  name: string
  months: number[]
  month: number

  constructor() {
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.name, this.month)
  }
}
