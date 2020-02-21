import { createAction } from 'typesafe-actions';

export const setSelectedPlayerId = createAction('scoreboardSettings/setPlayerId')<number | null>();

export const toggleIsAddingRandomScores = createAction('scoreboardSettings/toggleIsAddingRandomScores')();
