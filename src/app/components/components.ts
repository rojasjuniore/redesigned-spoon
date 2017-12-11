import { LoginComponent } from './authentication/login/login.component';
import { SigUpComponent } from './authentication/sig-up/sig-up.component';
import { StoreQueryComponent } from './record/store-query/store-query.component';
import { StoreRecordComponent } from './record/store-record/store-record.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { MapsComponent } from './maps/maps.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PromotionComponent } from './promotion/promotion.component';


export const component: any[] = [
    LoginComponent,
    StoreQueryComponent,
    StoreRecordComponent,
    DashboardComponent,
    SigUpComponent,
    NavBarComponent,
    ProfileComponent,
    MapsComponent,
    ContactComponent,
    NotificationsComponent,
    PromotionComponent
];

export * from './promotion/promotion.component';
export * from './notifications/notifications.component';
export * from './contact/contact.component';
export * from './maps/maps.component';
export * from './profile/profile.component';
export * from './shared/nav-bar/nav-bar.component';
export * from './authentication/login/login.component';
export * from './authentication/sig-up/sig-up.component';
export * from './record/store-query/store-query.component';
export * from './record/store-record/store-record.component';
export * from './dashboard/dashboard.component';


