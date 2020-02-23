import { combineReducers } from "redux";

import players, {initialState as playersState} from './players';
import scoreboardSettings, {initialState as scoreboardSettingsState} from './scoreboardSettings';
import { IPlayersState } from "../entities/player";
import { IScoreboardSettings } from "../entities/scoreboardSettings";

export interface IRootState {
    players: IPlayersState;
    scoreboardSettings: IScoreboardSettings;
}

export default combineReducers({
    players, scoreboardSettings
});

export const initialState: IRootState = {
    players: playersState,
    scoreboardSettings: scoreboardSettingsState
}