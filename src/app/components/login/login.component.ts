import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/authentication/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _lgs: LoginService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this._lgs
        .signInWithEmailAndPassword(formData.value.email, formData.value.password);
    }
  }

}
