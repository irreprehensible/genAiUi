import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private _router: Router){}
  public verifiedEmail: boolean = false;

  public email: string = ''
  public pwd: string = ''

  public login() {
    //login
    localStorage.setItem('user',JSON.stringify({"name":this.email.split('@')[0], "role":"admin"}));
    this._router.navigate(['/dashboard'])
  }
}
