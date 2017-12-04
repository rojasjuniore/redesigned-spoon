import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {};


  constructor(public _ns: NavbarService) { }

  ngOnInit() {
    this._ns.show();
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
  }

}
