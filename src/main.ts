import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyC7cLAUAe0wNJm_LER4IODjUgQpvOnaPGk",
    authDomain: "appscrum-bbdca.firebaseapp.com",
    databaseURL: "https://appscrum-bbdca.firebaseio.com",
    storageBucket: "",
  })
]);
