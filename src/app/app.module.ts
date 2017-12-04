import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './pipes/data-filter.pipe';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { StoreRecordComponent } from './components/record/store-record/store-record.component';
import { LoginComponent } from './components/login/login.component';
import { StoreQueryComponent } from './components/record/store-query/store-query.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';

import { WarehouseService } from './services/warehouse.service';
import { LoginService } from './services/authentication/login.service';
import { SigUpService } from './services/authentication/sig-up.service';

import { SigUpComponent } from './components/sig-up/sig-up.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreRecordComponent,
    LoginComponent,
    StoreQueryComponent,
    DashboardComponent,
    NavBarComponent,
    SigUpComponent,
    DataFilterPipe
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
    DataTableModule
  ],
  providers: [
    WarehouseService,
    LoginService,
    SigUpService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
