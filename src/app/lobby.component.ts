import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})
export class LobbyComponent { 
    items: FirebaseListObservable<any[]>;
    constructor(af: AngularFire) {
        this.items = af.database.list('/lobies');
    }
}