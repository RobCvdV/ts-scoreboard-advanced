import { IScoreboardSettings } from "../entities/scoreboardSettings";
import { createReducer } from "typesafe-actions";
import { TScoreboardSettingsActions } from "../actions";
import { setSelectedPlayerId, toggleIsAddingRandomScores } from "../actions/scoreboardSettings";

const initialState: IScoreboardSettings = {
    isAddingRandomScores: false,
    selectedPlayerId: null
}

// type IRootAction = ActionType<typeof actions>;

const reducer = createReducer<IScoreboardSettings, TScoreboardSettingsActions>(initialState)
    .handleAction(setSelectedPlayerId,
        (state: IScoreboardSettings, action): IScoreboardSettings => {
        return {...state, selectedPlayerId: action.payload}
    })
    .handleAction(toggleIsAddingRandomScores,
        (state): IScoreboardSettings => {
        return {...state, isAddingRandomScores: !state.isAddingRandomScores}
    });

export default reducer;