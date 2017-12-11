import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';
import { CommonService } from '../../../services/common/common.service';
import { WarehouseService, NavbarService, UploaderService } from '../../../services/services';
import 'firebase/storage';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-store-record',
  templateUrl: './store-record.component.html',
  styleUrls: ['./store-record.component.css']
})
export class StoreRecordComponent implements OnInit {

  lat = 6.2686922;
  lng = -75.55896109999999;
  files: any;
  warehouse: any = {};
  places: any = [];
  storeRef: firebase.storage.Reference;
  uid: string;



  constructor(public _whs: WarehouseService,
    public _ns: NavbarService,
    public _uploader: UploaderService,
    public _cs: CommonService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this._ns.show();
    const user: any = this._cs.getUser();
    this.uid = user.uid;
    navigator.geolocation.getCurrentPosition(this.showPosition);
    this._whs.
      getWarehouses()
      .subscribe((places) => {
        this.places = places;
        const me = this;
        me.places = Object.keys(me.places).map(function (key) { return me.places[key]; });
      }, erro => console.log(erro));

  }


  onSubmit(f: NgForm) {
    this.spinnerService.show();
    const address = this.warehouse.street_and_number + ',' + this.warehouse.city + ',' + this.warehouse.country;
    this._whs.obtenerGeoData(address)
      .subscribe((data) => {
        this.warehouse.lat = data.json().results[0].geometry.location.lat;
        this.warehouse.lng = data.json().results[0].geometry.location.lng;
        this.warehouse.id = Date.now();

        this._whs.saveWarehouse(this.warehouse)
          .subscribe(ok => {
            console.log(ok);
            this.spinnerService.hide();
          }, error => console.log(error));
        // alert('Negocio Creado con Exito');
        this.warehouse = {};
        this.uploads();
      },
      error => console.log(error));
  }

  fileChanges(event) {
    this.files = event.target.files;
  }

  uploads() {
    if (this.files.length <= 0) return;
    this._uploader.uploadMultiple(this.files);
    this.files = null;
  }

  showPosition(position) {
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
  }

}
