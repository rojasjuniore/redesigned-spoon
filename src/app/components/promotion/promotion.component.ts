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

  campaign_name = '';
  description__promotion = '';
  start_of_campaign = '';
  end_of_campaign = '';
  constructor(public _whs: WarehouseService,
    public _ns: NavbarService,
    public _us: UploaderService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    // this.spinnerService.show();
    this.getPlace();

  }

  getPlace() {
    this._ns.show();
    this._whs.
      getWarehouses()
      .subscribe((places) => {
        this.places = places;
        //  console.log(places);
        const me = this;
        me.places = Object.keys(me.places).map(function (key) { return me.places[key]; });
        // this.spinnerService.hide();
      }, erro => console.log(erro));
  }

  fileChanges(event) {
    this.files = event.target.files;
  }

  onSubmit(f: NgForm) {


    // tslint:disable-next-line:curly
    if (f.value.length <= 0) return;

    this.spinnerService.show();
    this._whs.savePromotion(f.value)
      .subscribe((data) => {
        this.spinnerService.hide();
      }, erro => console.log(erro));


    setTimeout(() => {
      
      // tslint:disable-next-line:curly
      if (this.files.length <= 0) return;
      this.spinnerService.show();
      this._us.uploadMultiple(this.files)
        .then(() => {
          this.spinnerService.hide();
          alert('Promocion Creada');
        });
    }, 3000);


  }

}
