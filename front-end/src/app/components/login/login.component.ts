import { Component, OnInit } from '@angular/core';

import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginSubmit({value, valid}){
    if(valid){
        console.log(value);
        //this.loginService.validateLogin();
        this.loginService.validateLogin().subscribe(auth => {
            console.log("Got response from server"); 
            console.log(auth);
        });
    }
  }

}
