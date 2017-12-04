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
            canActivate: [GuardGuard]
        },
        {
            path: 'map',
            component: MapsComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: 'profile',
            component: ProfileComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: 'promotion',
            component: PromotionComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: 'storerecord',
            component: StoreRecordComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: 'storequery',
            component: StoreQueryComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: 'contact',
            component: ContactComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: 'notifications',
            component: NotificationsComponent,
            pathMatch: 'full',
            canActivate: [GuardGuard]
        },
        {
            path: '**',
            pathMatch: 'full',
            redirectTo: ''
        }
    ];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);