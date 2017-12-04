import { RouterModule, Routes } from '@angular/router';


import {
    LoginComponent,
    StoreQueryComponent,
    StoreRecordComponent,
    DashboardComponent,
    SigUpComponent
} from './components/components';

const APP_ROUTES:
    Routes = [
        {
            path: '',
            component: LoginComponent,
            pathMatch: 'full'
        },
        {
            path: 'signup',
            component: SigUpComponent,
            pathMatch: 'full'
        },
        {
            path: 'storequery',
            component: StoreQueryComponent,
            pathMatch: 'full'
        },
        {
            path: 'storerecord',
            component: StoreRecordComponent,
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent,
            pathMatch: 'full'
        },
        {
            path: '**',
            pathMatch: 'full',
            redirectTo: ''
        }
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);