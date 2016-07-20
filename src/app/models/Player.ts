export class Player {
    playerId: string;
    playerName: string;
    playerVote: string;

    constructor(obj) {
        this.playerId = obj.playerId;
        this.playerName = obj.playerName;
        this.playerVote = obj.playerVote;
    }

    static fromJSONArray(array: Array<Player>): Player[] {
        return array.map(obj => new Player(obj));
    }

    static fromJSON(item: Object): Player {
        return new Player(item);
    }
}