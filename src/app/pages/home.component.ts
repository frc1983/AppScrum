import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    title = "AppScrum - Aplicativo de votação para equipes ágeis.";
    af: AngularFire;
    router: Router;

    constructor(_router: Router, _af: AngularFire) {
        this.af = _af;
        this.router = _router;
    }

    goToLobby(sessionName: String, sessionPlayers: number){
        console.log(sessionName)
        const itemObservable = this.af.database.list('/lobbies');
        var session = {
            sessionInitDate: this.getDateNow(), 
            sessionName: sessionName,
            sessionPlayers: sessionPlayers,
            sessionHash: this.generateHash()
        };
        
        itemObservable.push(session);
        this.router.navigate(['/lobby/' + session.sessionHash]);
    }

    getDateNow(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        var t = "";
        var a = "";
        t = dd.toString();
        if(dd < 10){
            t += '0' + dd
        } 
        if(mm<10){
            a = '0' + mm
        } 
        return t + '/' + a + '/' + yyyy.toString();
    }

    generateHash(){
        return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
    }
}