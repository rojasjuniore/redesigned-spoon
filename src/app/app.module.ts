import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './pipes/data-filter.pipe';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';

import {
  StoreRecordComponent,
  LoginComponent,
  StoreQueryComponent,
  DashboardComponent,
  NavBarComponent,
  SigUpComponent,
  ProfileComponent,
  MapsComponent,
  ContactComponent,
  NotificationsComponent,
  PromotionComponent
} from './components/components';

import {
  WarehouseService,
  LoginService,
  SigUpService,
  LogoutService,
  NavbarService,
  UploaderService
} from './services/services';


@NgModule({
  declarations: [
    AppComponent,
    StoreRecordComponent,
    LoginComponent,
    StoreQueryComponent,
    DashboardComponent,
    NavBarComponent,
    SigUpComponent,
    DataFilterPipe,
    ProfileComponent,
    MapsComponent,
    ContactComponent,
    NotificationsComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    APP_ROUTING,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWoJrMozjWKEIX2_ZHDVFsOpivpkSYPUE'
    }),
    DataTableModule,
    Ng4LoadingSpinnerModule.forRoot(), // https://github.com/amitmahida92/ng4-loading-spinner
    NgbModule.forRoot() //https://ng-bootstrap.github.io/#/getting-started
  ],
  providers: [
    WarehouseService,
    LoginService,
    SigUpService,
    LogoutService,
    NavbarService,
    UploaderService,
    UploaderService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
