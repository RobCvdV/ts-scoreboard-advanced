import { IPlayer } from "../entities/player";

interface IPlayerScoreAdding {
    playerId: number;
    add: number
}

function randomlyAddToScores(players: IPlayer[], maxAdded: number = 1): IPlayerScoreAdding[] {
    return players.map<IPlayerScoreAdding>(player => {
        // console.log(player);
        const willGetPositiveScore = Math.round(1.5 * Math.random());
        return {
            playerId: player.id!,
            add: Math.round(willGetPositiveScore * Math.pow(Math.random(), 5) * maxAdded)
        };
    });
}

export class ScoreRandomAdd {

    private timerHandle?: NodeJS.Timeout;

    public startRandomlyAddingToScores(
        inFunc: () => IPlayer[],
        outFunc: (scoreAddings: IPlayerScoreAdding[]) => void,
        maxAmountPerCycle: number = 1,
        cycleDuration: number = 500)
    {
        this.timerHandle = setInterval(() => {
            const playersIn = inFunc();
            // console.log('In: ', playersIn);
            const scoreAddings = randomlyAddToScores(playersIn, maxAmountPerCycle);
            console.log('Out:', scoreAddings);
            outFunc(scoreAddings);
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
