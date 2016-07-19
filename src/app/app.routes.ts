import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { LobbyComponent } from './pages/lobby.component';
import { HomeComponent } from './pages/home.component';
import { VotingComponent } from './pages/voting.component';

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
    },
    {
        path: 'voting/:hash',
        component: VotingComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];