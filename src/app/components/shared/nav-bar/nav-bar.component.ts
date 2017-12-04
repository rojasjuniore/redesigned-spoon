import { Component, OnInit } from '@angular/core';
import { NavbarService, LogoutService } from '../../../services/services';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _ns: NavbarService,
    public _lg: LogoutService) { }

  ngOnInit() {
  }

  logout() { 
    this._lg.logout();
  }


}
