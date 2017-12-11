import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/services';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My first AGM project';
  _toggled: boolean;
  lat = 51.678418;
  lng = 7.809007;

  constructor(public _ns: NavbarService) {
  }

  ngOnInit() {
    this._ns.hide();
  }


  show() {
    $("#menu-toggle").click((e) => {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  hide() {
    $("#menu-toggle").click((e) => {
      e.preventDefault();
      $("#wrapper").removeClass("toggled");
    });
  }

}
