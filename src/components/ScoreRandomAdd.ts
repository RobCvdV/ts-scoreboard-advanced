import { IPlayer } from "./Player";

function randomlyAddToScores(players: IPlayer[], maxAdded: number = 1): IPlayer[] {
    return players.map(player => {
        // console.log(player);
        return {
            ...player,
            score: player.score + Math.round(Math.pow(Math.random(), 5) * maxAdded)
        };
    });
}

export class ScoreRandomAdd {

    private timerHandle?: NodeJS.Timeout;

    public startRandomlyAddingToScores(
        inFunc: () => IPlayer[],
        outFunc: (playersOut: IPlayer[]) => void,
        maxAmountPerCycle: number = 1,
        cycleDuration: number = 500)
    {
        this.timerHandle = setInterval(() => {
            const playersIn = inFunc();
            // console.log('In: ', playersIn);
            const playersOut = randomlyAddToScores(playersIn, maxAmountPerCycle);
            console.log('Out:', playersOut);
            outFunc(playersOut);
        }, cycleDuration);
    }

    public stopRandomlyAddingToScores() {
        clearInterval(this.timerHandle!);
        this.timerHandle = undefined;
    }

    public isRandomizing(): boolean {
        return this.timerHandle !== undefined;
    }
}
