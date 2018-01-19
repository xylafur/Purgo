import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable':
import { Http } from '@angular/http';
import 'rxjs/add/operator/map':

@Injectable()
export class LoginService {

    url = "";

  constructor(public http:Http) { }

    validateLogin(){
        console.log("Validating login!");
        return this.http.post(this.url).map(res => res.json);
    }

}
