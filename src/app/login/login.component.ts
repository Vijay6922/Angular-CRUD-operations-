import { Component } from '@angular/core';
import { Logindata } from '../logindata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  l:Logindata=new Logindata()

  login(){
    console.log(this.l);
  }

}
