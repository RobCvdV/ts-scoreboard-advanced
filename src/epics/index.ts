import {toggleIsAddingRandomScoresEpic} from "./scoreboardEpics";
import { combineEpics, createEpicMiddleware } from "redux-observable";

export const rootEpic = combineEpics(
    toggleIsAddingRandomScoresEpic
)



