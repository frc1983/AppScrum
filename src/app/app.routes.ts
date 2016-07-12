import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby.component';

const routes: RouterConfig = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'lobby',
        component: LobbyComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];