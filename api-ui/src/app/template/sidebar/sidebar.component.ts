import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  user: string 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserAlthentication()
  }

}
