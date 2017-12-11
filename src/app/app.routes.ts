import { RouterModule, Routes } from '@angular/router';
import {
    LoginComponent,
    StoreQueryComponent,
    StoreRecordComponent,
    DashboardComponent,
    SigUpComponent,
    ProfileComponent,
    MapsComponent,
    ContactComponent,
    NotificationsComponent,
    PromotionComponent
} from './components/components';

import { GuardGuard } from './guard/guard.guard';

const APP_ROUTES:
    Routes = [
        {
            path: '',
            component: LoginComponent,
            pathMatch: 'full',
        },
        {
            path: 'signup',
            component: SigUpComponent,
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: DashboardComponent,
            pathMatch: 'full',

        },
        {
            path: 'map',
            component: MapsComponent,
            pathMatch: 'full',

        },
        {
            path: 'profile',
            component: ProfileComponent,
            pathMatch: 'full',

        },
        {
            path: 'promotion',
            component: PromotionComponent,
            pathMatch: 'full',

        },
        {
            path: 'storerecord',
            component: StoreRecordComponent,
            pathMatch: 'full',

        },
        {
            path: 'storequery',
            component: StoreQueryComponent,
            pathMatch: 'full',

        },
        {
            path: 'contact',
            component: ContactComponent,
            pathMatch: 'full',

        },
        {
            path: 'notifications',
            component: NotificationsComponent,
            pathMatch: 'full',

        },
        {
            path: '**',
            pathMatch: 'full',
            redirectTo: ''
        }
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);