import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WarehouseService, NavbarService } from '../../../services/services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-store-query',
  templateUrl: './store-query.component.html',
  styleUrls: ['./store-query.component.css']
})
export class StoreQueryComponent implements OnInit {


  public data;
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = 'asc';

  constructor(public _whs: WarehouseService,
    public _ns: NavbarService,
    private _http: Http,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this._ns.show();
    this.getWarehouses();
  }

  getWarehouses() {
    this.spinnerService.show();
    this._whs.getWarehouses()
      .subscribe(warehouses => {
        this.data = warehouses;
        const me = this;
        me.data = Object.keys(me.data).map(function (key) { return me.data[key]; });
        this.spinnerService.hide();
      },
      error => console.log(error));
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
