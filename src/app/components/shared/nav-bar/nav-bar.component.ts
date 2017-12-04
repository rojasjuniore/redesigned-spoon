import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from '../../../services/navbar-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public nav: NavbarServiceService) { }

  ngOnInit() {
  }

}
