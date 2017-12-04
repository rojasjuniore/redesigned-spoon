import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigUpService } from '../../services/authentication/sig-up.service';


@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.css']
})
export class SigUpComponent {

  password = '';
  email = '';
  constructor(public _sus: SigUpService) { }

  onSubmit(formData) {
    this._sus
      .createUserWithEmailAndPassword(formData.value.email, formData.value.password);
  }


}
