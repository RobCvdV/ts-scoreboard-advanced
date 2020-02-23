import {IPlayerScorePayload} from '../entities/player';

function randomlyAddToScores(playerIds: number[], maxAdded: number, exponentialAdding: number, hitChance: number): IPlayerScorePayload[] {
    return playerIds.map<IPlayerScorePayload>(playerId => {
        // console.log(player);
        const willGetPositiveScore = Math.ceil(-Math.random() + (hitChance/100.0) );
        return {
            playerId: playerId,
            amount: Math.round(willGetPositiveScore * Math.pow(Math.random(), exponentialAdding) * maxAdded)
        };
    });
}

export class RandomPlayerScoreAddingEngine {

    private static timerHandle?: NodeJS.Timeout;

    public static startRandomlyAddingToScores(
        inFunc: () => number[],
        outFunc: (scoreAddings: IPlayerScorePayload[]) => void,
        maxAmountPerCycle: number = 10,
        intervalInMs: number = 500,
        exponentialAdding: number = 1,
        hitChance: number = 100)
    {
        this.timerHandle = setInterval(() => {
            const playerIdsIn = inFunc();
            // console.log('In: ', playerIdsIn);
            const scoreAddings = randomlyAddToScores(playerIdsIn, maxAmountPerCycle, exponentialAdding, hitChance);
            // console.log('Out:', scoreAddings);
            outFunc(scoreAddings);
        }, intervalInMs);
    }

    public static stopRandomlyAddingToScores() {
        clearInterval(this.timerHandle!);
        this.timerHandle = undefined;
    }

    public static isRandomizing(): boolean {
        return this.timerHandle !== undefined;
    }
}
