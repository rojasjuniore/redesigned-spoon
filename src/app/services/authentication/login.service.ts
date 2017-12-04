import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

  error: String;
  a_error = false;

  constructor(
    public db: AngularFireDatabase,
    public _router: Router) {
    this.a_error = false;
    this.error = '';
  }

  public signInWithEmailAndPassword(email, password) {

    console.log(email, password)

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.error = '';
        this.a_error = false;

        const dataUser = {
          uid: user.uid,
          uid1: user.email.replace(/@/g, '').replace('.', ''),
          name: 'Tu nombre',
          email: user.providerData[0].email,
          photo: '/assets/img/perfil-chat.png'
        };

        localStorage.setItem('usuario', JSON.stringify(dataUser));
        this._router.navigate(['/dashboard']);

      }, error => {
        if (error['code'] === 'auth/wrong-password') {
          this.error = 'La contraseña no es válida. 😌';
          this.a_error = true;
        }
        if (error['code'] === 'auth/user-not-found') {
          this.error = 'Aun no esta registrado en Emite.me. ☹️';
          this.a_error = true;
        }
        if (error['code'] === 'auth/invalid-email') {
          this.error = 'La dirección de correo electrónico está mal formateada. 😩';
          this.a_error = true;
        }
        if (error['code'] === 'auth/argument-error') {
          this.error = 'Los campos de Email y Password estan vacios.';
          this.a_error = true;
        }
        localStorage.clear();
      });
  }

}
