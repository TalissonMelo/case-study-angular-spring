import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
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
    this.authService.log(this.username, this.password).subscribe(response => {
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token',access_token)
      this.router.navigate(['/home'])
    }, error => {
      this.errors = ['Usuário e/ou senha incorreta(s).'];
    })
   
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
      this.username = null
      this.password = null
    }, error => {
      this.messageSuccess = null
      if (error.error.messages) {
        return this.errors = error.error.messages
      }
      this.errors = ["Usuário já Cadastrado."]
    })
  }

}
