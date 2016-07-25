import { AfterViewInit, Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/Player';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'voting',
    templateUrl: 'voting.component.html',
    styleUrls: ['voting.component.css']
})
export class VotingComponent {
    session: any;
    players: Array<Player>;
    hash: string;
    sessionKey: string;

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
                this.session = sess[0];
                this.sessionKey = sess[0].$key;
                this.players = new Array();
                for (var key in sess[0].players)
                    if (sess[0].players.hasOwnProperty(key))
                        this.players.push(Player.fromJSON(sess[0].players[key]));

                setTimeout(() => {
                    $(".card").flip();
                }, 0);
            });
        });
    }

    showAllVotes() {
        setTimeout(() => {
            $(".card").flip(true);
        }, 0);
    }

    resetVotes() {
        if (this.session != undefined) {
            for (var key in this.session.players) {
                if (this.session.players.hasOwnProperty(key)) {
                    let database = this.af.database.object('/lobbies/' + this.sessionKey + "/players/" + key);
                    database.update({ playerVote: "" });
                }
            }
        }
    }
}