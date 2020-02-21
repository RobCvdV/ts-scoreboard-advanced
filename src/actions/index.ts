import * as players from './players';
import * as scoreboardSettings from './scoreboardSettings';
import { ActionType } from "typesafe-actions";

export type TPlayersActions = ActionType<typeof players>;
export type TScoreboardSettingsActions = ActionType<typeof scoreboardSettings>;