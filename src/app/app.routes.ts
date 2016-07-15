import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby.component';
import { HomeComponent } from './home.component';

const routes: RouterConfig = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lobby/:hash',
        component: LobbyComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];