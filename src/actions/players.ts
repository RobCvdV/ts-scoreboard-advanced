import { createAction } from 'typesafe-actions';
import { IPlayer } from "../entities/player";

export const addPlayer = createAction('players/ADD')<IPlayer>();
export const addPlayerWithName = createAction('players/ADD_WITH_NAME')<string>();

export const deletePlayer = createAction('players/DELETE')<number>();

interface IAddPlayerScorePayload  {
    playerId: number;
    add: number;
}
export const addPlayerScore = createAction('players/ADD_SCORE')<IAddPlayerScorePayload>();
