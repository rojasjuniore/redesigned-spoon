import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WarehouseService, NavbarService } from '../../services/services';
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lat = 6.2686922;
  lng = -75.55896109999999;
  places: any = [];

  constructor(public _whs: WarehouseService,
    public _ns: NavbarService,
    private _http: Http) { }

  ngOnInit() {

    this._ns.show();
    this.getPlace();

    this._http.get('./assets/data.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 1000);
      });
  }

  getPlace() {
    this._whs.
      getWarehouses()
      .subscribe((places) => {
        this.places = places;
        //  console.log(places);
        const me = this;
        me.places = Object.keys(me.places).map(function (key) { return me.places[key]; });

      }, erro => console.log(erro));
  }

}
