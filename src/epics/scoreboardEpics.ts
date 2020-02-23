import {TScoreboardSettingsActions} from '../actions';
import { setIsAddingRandomScores, toggleIsAddingRandomScores } from '../actions/scoreboardSettings';
import { combineEpics, createEpicMiddleware, Epic, StateObservable } from "redux-observable";
import { ActionType, isActionOf } from "typesafe-actions";
import { filter, map } from "rxjs/operators";
import { IRootState } from "../reducers";

export const toggleIsAddingRandomScoresEpic: Epic< TScoreboardSettingsActions, TScoreboardSettingsActions, IRootState> = (
    action$,
    state$) =>
    action$.pipe(
        filter(isActionOf(toggleIsAddingRandomScores)),
        map(() => setIsAddingRandomScores(!state$.value.scoreboardSettings.isAddingRandomScores))
    );
