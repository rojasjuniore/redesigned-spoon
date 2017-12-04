import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class WarehouseService {

  API_ENDPOINT = 'https://ionic-firebase-a0136.firebaseio.com';


  constructor(private _http: Http) { }

  public getWarehouses() {
    // return this.db.list('/lugares');
    // return this._http.get(this.API_ENDPOINT + '/lugares.json');
    return this._http.get(this.API_ENDPOINT + '/Warehouse.json')
      .map((resultado) => {
        // console.log(resultado.json())
        const data = resultado.json();
        return data;
      });
  }
  public getWarehouse(WarehouseId) {
    //  return this.db.object(`/lugares/${luagrId}`);
  }

  public saveWarehouse(Warehouse) {
    // this.db.database.ref(`lugares/${lugar.id}`).set(lugar);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(this.API_ENDPOINT + '/Warehouse.json', Warehouse, { headers: headers });

  }

  public editWarehouse(Warehouse) {
    // this.db.database.ref(`lugares/${lugar.id}`).set(lugar);
  }


  public obtenerGeoData(direccion) {
    // http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this._http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

}
