import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { Player } from './models/Player';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})
export class LobbyComponent {
    session: FirebaseListObservable<any>;
    players: Array<Player>;
    hash: string;

    constructor(private af: AngularFire, private route: ActivatedRoute) {
        this.players = new Array();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.hash = params['hash'];

            this.session = this.af.database.list('/lobbies', {
                query: {
                    orderByChild: 'sessionHash',
                    equalTo: this.hash
                }
            });

            this.session.subscribe(sess => {
                this.players = new Array();
                for (var key in sess[0].players)
                    if (sess[0].players.hasOwnProperty(key))
                        this.players.push(Player.fromJSON(sess[0].players[key]));
                        
                console.log(this.players)
            });
        });
    }
}