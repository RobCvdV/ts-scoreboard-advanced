import { createAction } from 'typesafe-actions';
import { IPlayerScorePayload, IPlayer, IAddRandomScoresPayload, IPlayerNamePayload } from "../entities/player";

export const addPlayer = createAction('players/ADD')<IPlayer>();
export const addPlayerWithName = createAction('players/ADD_WITH_NAME')<string>();

export const deletePlayer = createAction('players/DELETE_ONE')<number>();
export const deletePlayers = createAction('players/DELETE')<number[]>();
export const deleteAllPlayers = createAction('players/DELETE_ALL_PLAYERS')();

export const addPlayerScore = createAction('players/ADD_SCORE')<IPlayerScorePayload>();
export const setPlayerScore = createAction('players/SET_SCORE')<IPlayerScorePayload>();
export const setPlayerName = createAction('players/SET_PLAYER_NAME')<IPlayerNamePayload>();

export const startRandomlyAddingPlayerScores =  createAction('players/START_ADDING_RANDOM_SCORES')<IAddRandomScoresPayload>();
export const stopRandomlyAddingPlayerScores =  createAction('players/STOP_ADDING_RANDOM_SCORES')<undefined>();
