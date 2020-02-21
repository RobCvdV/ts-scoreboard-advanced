export interface IPlayer {
    id?: number;
    name: string;
    score: number;
}

export interface IPlayersState {
    playerList: IPlayer[];
}
