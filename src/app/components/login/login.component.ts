import { Component, OnInit } from '@angular/core';
import { LoginService, NavbarService } from '../../services/services';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  a_error: boolean;
  email: string;
  password: string;
  error: any;
  constructor(public _lgs: LoginService, public _ns: NavbarService) { }

  ngOnInit() {
    this._ns.hide();
    this.a_error = this._lgs.a_error
    this.error = this._lgs.error
    // $("#wrapper").removeClass("toggled");
  }

  onSubmit(formData) {
    if (formData.valid) {
      this._lgs
        .signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }
  }



}
