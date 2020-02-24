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

export interface IPlayerNamePayload {
    playerId: number;
    name: string;
}

export interface IAddRandomScoresPayload {
    amountMax?: number;
    intervalInSeconds?: number;
    exponentialAdding?: number;
    hitChance?: number;
}
