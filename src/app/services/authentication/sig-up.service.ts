import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class SigUpService {


  error: String;
  a_error: boolean = false;
  constructor(public _router: Router) { }

  public createUserWithEmailAndPassword(email, password) {

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user_firebae => {

        const dataUser = {
          uid: user_firebae.uid,
          // uid1: user_firebae.email.replace(/@/g, '').replace('.', ''),
          name: 'Tu nombre',
          email: user_firebae.providerData[0].email,
          // photo: '/assets/img/perfil-chat.png'
        };

        localStorage.setItem('usuario', JSON.stringify(dataUser));
        this._router.navigate(['/dashboard']);
      }, error => {
        console.log('1: ', error['code']);
        console.log('2: ', error);

        if (error['code'] === 'auth/email-already-in-use') {
          this.error = 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta. 😌';
          this.a_error = true;
        }

        if (error['code'] === 'auth/weak-password') {
          this.error = 'La contraseña debe tener al menos 6 caracteres. ☹️';
          this.a_error = true;
        }

        if (error['code'] === 'auth/invalid-email') {
          this.error = 'La dirección de correo electrónico está mal formateada. 😩';
          this.a_error = true;
        }
        localStorage.clear();
      });
  }
}
