import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string
  password: string
  loginError : boolean
  insert : boolean

  constructor(private router: Router) { }

  onSubmit(){
   this.router.navigate(['/home'])
  }

  insertUser(event){
    event.preventDefault()
    this.insert = true
  }

  cancelInsert(){
    this.insert = false
  }

}
