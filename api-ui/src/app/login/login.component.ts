import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string
  password: string
  insert: boolean
  messageSuccess: string
  errors: string[]

  constructor(private router: Router,
    private authService: AuthService) { }

  onSubmit() {
    this.router.navigate(['/home'])
  }

  insertUser(event) {
    event.preventDefault()
    this.insert = true
  }

  cancelInsert() {
    this.insert = false
  }

  save() {
    const user: User = new User();
    user.username = this.username;
    user.password = this.password;
    this.authService.save(user).subscribe(response => {
      this.messageSuccess = "Cadastro realizado com sucesso! Efetue o Login";
      this.errors = null
    }, error => {
      this.messageSuccess = null
      if (error.error.messages) {
        return this.errors = error.error.messages
      }
      this.errors = ["Usuário já Cadastrado."]
    })
  }

}
