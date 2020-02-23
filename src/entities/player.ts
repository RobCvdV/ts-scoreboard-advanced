export interface IPlayer {
    id: number;
    name: string;
    score: number;
}

export interface IPlayersState {
    playerList: IPlayer[];
}

export interface IPlayerScorePayload  {
    playerId: number;
    amount: number;
}

export interface IAddRandomScoresPayload {
    amountMax?: number;
    intervalInSeconds?: number;
    exponentialAdding?: number;
    hitChance?: number;
}
