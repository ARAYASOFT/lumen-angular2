import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
