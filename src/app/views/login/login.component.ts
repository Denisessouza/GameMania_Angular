import { LoginService } from './../../services/login.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User()

  receberDados(){
    console.log(this.userModel)
    // Enviar os dados para API

    this.loginService.login(this.userModel).subscribe({
      next: (response) => { console.log(response) },
      error: (erro) => {console.log(erro)}
    })

  }


}
