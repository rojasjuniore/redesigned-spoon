import { Component, OnInit } from '@angular/core';
import { WarehouseService, NavbarService } from '../../services/services';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat = 6.2686922;
  lng = -75.55896109999999;
  places: any = [];

  constructor(public _whs: WarehouseService,
    public _ns: NavbarService) { }

  ngOnInit() {
    this._ns.show();
    this.getPlace()
  }

  getPlace() {
    this._whs.
      getWarehouses()
      .subscribe((places) => {
        this.places = places;
        //console.log(places);
        const me = this;
        me.places = Object.keys(me.places).map(function (key) { return me.places[key]; });

      }, erro => console.log(erro));
  }

}
