import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NavbarService, WarehouseService } from '../../services/services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {};


  constructor(public _ns: NavbarService,
    public _whs: WarehouseService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this._ns.show();
    this.getProfile();
  }

  getProfile() {
    this.spinnerService.show();
    this._whs.getProfile()
      .subscribe((data) => {
        this.profile = data;
        this.spinnerService.hide();
      }, error => console.log(error));
  }

  onSubmit(f: NgForm) {
    this.spinnerService.show();
    this._whs.saveProfile(f.value)
      .then((user_) => {
        this.spinnerService.hide();
      }, error_ => console.log(error_));
  }

}
