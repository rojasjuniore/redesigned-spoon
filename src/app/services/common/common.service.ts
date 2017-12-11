import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    constructor() { }

    getUser() {
        return JSON.parse(localStorage.getItem('usuario'));
    }

    toggled(): boolean {
        let _toggled;
        if (this.getUser()) {
            return _toggled = true;
        } else {
            return _toggled = false;
        }
    }
}