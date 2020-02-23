import { IAddRandomScoresPayload } from "./player";

export interface IScoreboardSettings {
    isAddingRandomScores: boolean;
    selectedPlayerId: number | null;
    randomlyAddingPlayerScoresSettings: IAddRandomScoresPayload;
}