import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }
  loginData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  ngOnInit(): void {
  }
  loginUser() {
    console.log(this.loginData.value)
    this.login.userlogin(this.loginData.value)
  }
}
