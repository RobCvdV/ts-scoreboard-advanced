import { AsyncActionCreatorBuilder, createAction, createAsyncAction } from 'typesafe-actions';
import { IPlayer } from "../entities/player";

export const addPlayer = createAction('players/ADD')<IPlayer>();
export const addPlayerWithName = createAction('players/ADD_WITH_NAME')<string>();

export const deletePlayer = createAction('players/DELETE')<number>();

interface IAddPlayerScorePayload  {
    playerId: number;
    add: number;
}
export const addPlayerScore = createAction('players/ADD_SCORE')<IAddPlayerScorePayload>();

interface IAddRandomScoresPayload {
    amountMax: number;
    intervalInSeconds: number;
    exponentialAdding: number
}

// 'players/START_ADD_RANDOM_SCORES'
export const startRandomlyAddingPlayerScores = createAsyncAction(
    'START_ADD_RANDOM_SCORES_REQUEST',
    'START_ADD_RANDOM_SCORES_SUCCESS',
    'START_ADD_RANDOM_SCORES_FAILURE'
)<IAddPlayerScorePayload, {}, Error>();


// needs redux-observable
// const startRandomlyAddingPlayerScoresFlow = CreateAsyncAction<RootAction, RootAction, RootState, Services> = (action$, state$, { todosApi }) =>
//     action$.pipe(
//         filter(isActionOf(fetchTodosAsync.request)),
//         switchMap(action =>
//             from(todosApi.getAll(action.payload)).pipe(
//                 map(fetchTodosAsync.success),
//                 catchError((message: string) => of(fetchTodosAsync.failure(message))),
//                 takeUntil(action$.pipe(filter(isActionOf(fetchTodosAsync.cancel)))),
//             )
//         );