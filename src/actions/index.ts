import * as players from './players';
import * as scoreboardSettings from './scoreboardSettings';
import { ActionType } from "typesafe-actions";

export type TPlayersActions = ActionType<typeof players>;
export type TScoreboardSettingsActions = ActionType<typeof scoreboardSettings>;

export type TRootAction = TPlayersActions & TScoreboardSettingsActions;

export type PlayersActions = typeof players;
export type ScoreboardSettingsActions = typeof scoreboardSettings;