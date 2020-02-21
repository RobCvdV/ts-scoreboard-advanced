import { combineReducers } from "redux";

import players from './players';
import scoreboardSettings from './scoreboardSettings';

export default combineReducers({
    players, scoreboardSettings
});