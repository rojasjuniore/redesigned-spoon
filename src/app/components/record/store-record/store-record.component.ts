import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WarehouseService } from '../../../services/warehouse.service';

@Component({
  selector: 'app-store-record',
  templateUrl: './store-record.component.html',
  styleUrls: ['./store-record.component.css']
})
export class StoreRecordComponent implements OnInit {

  lat = 6.2686922;
  lng = -75.55896109999999;
  warehouse: any = {};
  places: any = [];

  constructor(public _whs: WarehouseService) { }

  ngOnInit() {

    navigator.geolocation.getCurrentPosition(this.showPosition);

    this._whs.
      getWarehouses()
      .subscribe((places) => {
        this.places = places;
        //  console.log(places);
        const me = this;
        me.places = Object.keys(me.places).map(function (key) { return me.places[key]; });

      }, erro => console.log(erro));
  }


  onSubmit(f: NgForm) {

    const address = this.warehouse.street_and_number + ',' + this.warehouse.city + ',' + this.warehouse.country;
    this._whs.obtenerGeoData(address)
      .subscribe((data) => {
        // console.log(data.json());
        this.warehouse.lat = data.json().results[0].geometry.location.lat;
        this.warehouse.lng = data.json().results[0].geometry.location.lng;
        this.warehouse.id = Date.now();

        this._whs.saveWarehouse(this.warehouse)
          .subscribe(ok => {

          }, error => console.log(error));
        alert('Negocio Creado con Exito');
        this.warehouse = {};
      },
      error => console.log(error));
  }

  showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

  }

}
