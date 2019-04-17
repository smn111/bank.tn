import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin: boolean;

  constructor(private router:Router, private loginservice: AuthentificationService) {}

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['dashboard']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    if (this.loginservice.isUserLoggedIn()){
      this.router.navigate(['dashboard']);
    } 
  }

}
