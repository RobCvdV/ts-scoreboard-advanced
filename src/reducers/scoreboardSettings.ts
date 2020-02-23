import { IScoreboardSettings } from "../entities/scoreboardSettings";
import { createReducer } from "typesafe-actions";
import { TScoreboardSettingsActions } from "../actions";
import {
    setSelectedPlayerId,
    setIsAddingRandomScores,
    toggleIsAddingRandomScores
} from "../actions/scoreboardSettings";
import { startRandomlyAddingPlayerScores } from "../actions/players";

export const initialState: IScoreboardSettings = {
    isAddingRandomScores: false,
    selectedPlayerId: null,
    randomlyAddingPlayerScoresSettings: {
        amountMax: 50,
        intervalInSeconds: 200,
        exponentialAdding: 3,
        hitChance: 100
    }
}

// type IRootAction = ActionType<typeof actions>;

const reducer = createReducer<IScoreboardSettings, TScoreboardSettingsActions>(initialState)
    .handleAction(setSelectedPlayerId,
        (state: IScoreboardSettings, action): IScoreboardSettings => {
        return {...state, selectedPlayerId: action.payload}
    })
    .handleAction(setIsAddingRandomScores,
        (state, action): IScoreboardSettings => {
        startRandomlyAddingPlayerScores(state.randomlyAddingPlayerScoresSettings);
        return {...state, isAddingRandomScores: action.payload}
    })
    .handleAction(toggleIsAddingRandomScores, state => {
        return {...state, isAddingRandomScores: !state.isAddingRandomScores}
    });

export default reducer;