
// https://angularfirebase.com/snippets/angularfire2-version-4-authentication-service/
// https://angularfirebase.com/lessons/router-guards-to-redirect-unauthorized-firebase-users/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class GuardGuard implements CanActivate {

  authState: any = null;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }


  /*canActivate(): boolean {
      return this.authState !== null;
    }*/

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authState) { return true; }
    console.log('access denied!')
    this.router.navigate(['/']);
    return false
  }

}
