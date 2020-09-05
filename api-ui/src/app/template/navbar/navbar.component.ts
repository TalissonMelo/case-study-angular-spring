import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.finalizeSession();
    this.router.navigate(['/login'])
  }

}
