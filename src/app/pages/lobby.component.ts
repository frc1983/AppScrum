import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Player } from '../models/Player';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})
export class LobbyComponent {
    session: FirebaseListObservable<any>;
    players: Array<Player>;
    hash: string;
    router: Router;
    sessionKey: string;

    constructor(private af: AngularFire, private route: ActivatedRoute, _router: Router) {
        this.players = new Array();
        this.router = _router;
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
                this.sessionKey = sess[0].$key;
                for (var key in sess[0].players)
                    if (sess[0].players.hasOwnProperty(key))
                        this.players.push(Player.fromJSON(sess[0].players[key]));

                if (this.players.length.toString() === sess[0].sessionPlayers)
                    this.router.navigate(['/voting/' + this.hash]);
            });
        });
    }
    
    backToHome(){
        this.af.database.object('/lobbies/' + this.sessionKey).remove();
        this.router.navigate(['/home']);
    }
}