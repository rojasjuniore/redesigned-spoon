import { LoginComponent } from './login/login.component';
import { SigUpComponent } from './sig-up/sig-up.component';
import { StoreQueryComponent } from './record/store-query/store-query.component';
import { StoreRecordComponent } from './record/store-record/store-record.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const component: any[] = [
    LoginComponent,
    StoreQueryComponent,
    StoreRecordComponent,
    DashboardComponent,
    SigUpComponent
];
export * from './sig-up/sig-up.component';
export * from './login/login.component';
export * from './record/store-query/store-query.component';
export * from './record/store-record/store-record.component';
export * from './dashboard/dashboard.component';


