import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    constructor() { }

    getUser() {
        return JSON.parse(localStorage.getItem('usuario'));
    }
}