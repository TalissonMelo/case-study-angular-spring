import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client'
import { ClientService } from 'src/app/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  client: Client
  errors: string[]
  id: number
  success: boolean = false

  constructor(private service: ClientService,
    private activatedRoute: ActivatedRoute) {

    this.client = new Client()
  }

  ngOnInit(): void {
    if (this.activatedRoute.params['id']) {
      this.service.findById(this.activatedRoute.snapshot.params['id'])
        .subscribe(response => this.client = response,
          error => this.errors = error);
    }
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
