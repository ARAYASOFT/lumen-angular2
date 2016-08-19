import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

export const routes: RouterConfig = [
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

