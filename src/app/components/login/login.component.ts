import { Component, OnInit } from '@angular/core';
import { LoginService, NavbarService } from '../../services/services';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _lgs: LoginService, public _ns: NavbarService) { }

  ngOnInit() {
    this._ns.hide();
    // $("#wrapper").removeClass("toggled");
  }

  onSubmit(formData) {
    if (formData.valid) {
      this._lgs
        .signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }
  }



}
