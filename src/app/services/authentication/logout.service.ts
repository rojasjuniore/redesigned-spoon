import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class LogoutService {

    constructor(private _angularFireAuth: AngularFireAuth, private _router: Router) { }

    public logout() {
        localStorage.clear();
        this._angularFireAuth.auth.signOut();
        this._router.navigate(['/']);
    }

}
