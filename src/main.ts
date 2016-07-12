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
    apiKey: "AIzaSyDV9vGj67GXy-IyikZVV1YzkU9eDLvIwnQ",
    authDomain: "scrumapp-a9f68.firebaseapp.com",
    databaseURL: "https://scrumapp-a9f68.firebaseio.com",
    storageBucket: "scrumapp-a9f68.appspot.com",
  })
]);
