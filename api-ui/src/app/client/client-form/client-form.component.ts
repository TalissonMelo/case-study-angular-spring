import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client'
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: Client
  errors: string[]
  success: boolean = false

  constructor(private service: ClientService) {
    this.client = new Client()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.client).subscribe(client => {
      this.errors = []
      this.success = true;
      this.client = client;
    }, errorResponse => {
      this.success = false
      this.errors = errorResponse.error.messages
    })
}

}
