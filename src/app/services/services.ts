import { NavbarService } from './common/navbar.service';
import { LoginService } from './authentication/login.service';
import { LogoutService } from './authentication/logout.service';
import { SigUpService } from './authentication/sig-up.service';
import { WarehouseService } from './database/warehouse.service';
import { UploaderService } from './common/uploader.service';

export const component: any[] = [
    NavbarService,
    LoginService,
    LogoutService,
    SigUpService,
    WarehouseService,
    UploaderService
];
export * from './common/uploader.service';
export * from './common/navbar.service';
export * from './authentication/login.service';
export * from './authentication/logout.service';
export * from './authentication/sig-up.service';
export * from './database/warehouse.service';
