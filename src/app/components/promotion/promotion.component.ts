import { Component, OnInit } from '@angular/core';
import { WarehouseService, NavbarService, UploaderService } from '../../services/services';
import { NgForm } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare var $: any;
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  places: any = [];
  files: any;

  constructor(public _whs: WarehouseService,
    public _ns: NavbarService,
    public _us: UploaderService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this._ns.show();
    this.spinnerService.show();
    this.getPlace();

  }

  getPlace() {
    this._whs.
      getWarehouses()
      .subscribe((places) => {
        this.places = places;
        //  console.log(places);
        const me = this;
        me.places = Object.keys(me.places).map(function (key) { return me.places[key]; });
        this.spinnerService.hide();
      }, erro => console.log(erro));
  }

  fileChanges(event) {
    this.files = event.target.files;
    console.log(this.files)
  }

  onSubmit(f: NgForm) {

    console.log(f.value)
    if (this.files.length <= 0) return;
    console.log(this.files)
  }

}
