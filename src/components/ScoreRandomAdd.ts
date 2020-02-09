import { IPlayer } from "./Player";

function randomlyAddToScores(players: IPlayer[]): IPlayer[] {
    return players.map(player => {
        // console.log(player);
        return {
            ...player,
            score: player.score + Math.round((Math.random()) * 3.0)
        };
    });
}

export class ScoreRandomAdd {

    private timerHandle?: NodeJS.Timeout;

    public startRandomlyAddingToScores(
        inFunc: () => IPlayer[],
        outFunc: (playersOut: IPlayer[]) => void)
    {
        this.timerHandle = setInterval(() => {
            const playersIn = inFunc();
            // console.log('In: ', playersIn);
            const playersOut = randomlyAddToScores(playersIn);
            console.log('Out:', playersOut);
            outFunc(playersOut);
        }, 1000);
    }

    public stopRandomlyAddingToScores() {
        clearInterval(this.timerHandle!);
        this.timerHandle = undefined;
    }

    public isRandomizing(): boolean {
        return this.timerHandle !== undefined;
    }
}
