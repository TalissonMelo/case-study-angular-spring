import { Component, OnInit } from '@angular/core';
import { Client } from '../model/Client'
import { ClientService } from 'src/app/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html'
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
    if (this.activatedRoute.snapshot.params['id']) {

      this.id = this.activatedRoute.snapshot.params['id']

      this.service.findById(this.id)
        .subscribe(response => this.client = response,
          error => this.errors = error);
    }
  }

  onSubmit() {

    if (this.id) {
      this.client.register = null
      this.service.updateClient(this.id, this.client)
        .subscribe(response => {
          this.errors = []
          this.success = true;
        }, error => {
          this.success = false
          this.errors = error.error.messages
        })

    } else {
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

}
