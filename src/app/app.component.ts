import { Component } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {
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
