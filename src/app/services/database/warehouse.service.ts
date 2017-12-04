import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CommonService } from '../common/common.service';
// import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class WarehouseService {

  API_ENDPOINT = 'https://ionic-firebase-a0136.firebaseio.com';
  uid: string;

  constructor(private _http: Http,
    public _cs: CommonService) {
    const user: any = this._cs.getUser();
    this.uid = user.uid;
    console.log(this.uid)
  }

  public getWarehouses() {
    return this._http.get(`${this.API_ENDPOINT}/${this.uid}/warehouse.json`)
      .map((resultado) => {
        const data = resultado.json();
        return data;
      });
  }
  public getWarehouse(WarehouseId) {
    //  return this.db.object(`/lugares/${luagrId}`);
  }

  public saveWarehouse(warehouse) {
    // this.db.database.ref(`lugares/${lugar.id}`).set(lugar);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(`${this.API_ENDPOINT}/${this.uid}/warehouse.json`, warehouse, { headers: headers });
  }

  public savePromotion(promotion) {
    // this.db.database.ref(`lugares/${lugar.id}`).set(lugar);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(`${this.API_ENDPOINT}/${this.uid}/promotion.json`, promotion, { headers: headers });
  }

  public saveProfile(profile) {
    // this.db.database.ref(`lugares/${lugar.id}`).set(lugar);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(`${this.API_ENDPOINT}/${this.uid}/profile.json`, profile, { headers: headers });
  }

  public editWarehouse(Warehouse) {
    // this.db.database.ref(`lugares/${lugar.id}`).set(lugar);
  }


  public obtenerGeoData(direccion) {
    // http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this._http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

}
