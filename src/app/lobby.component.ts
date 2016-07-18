import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html'
})
export class LobbyComponent {
    session: FirebaseListObservable<any[]>;
    players: any;
    hash: string;

    constructor(private af: AngularFire, private route: ActivatedRoute) { }

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
                this.players = sess[0].players
                console.log(this.players)
            });
        });
    }
}