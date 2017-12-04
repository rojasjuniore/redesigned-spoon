import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lat = 6.2686922;
  lng = -75.55896109999999;
  places: any = [];
  public data;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = 'asc';

  constructor(public _whs: WarehouseService,
    private _http: Http) { }

  ngOnInit() {
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

  update(item) {
    console.log(item);
  }

  remove(item) {
    console.log(item);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
}
