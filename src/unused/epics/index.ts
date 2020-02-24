import {toggleIsAddingRandomScoresEpic} from "./scoreboardEpics";
import { combineEpics  } from "redux-observable";

export const rootEpic = combineEpics(
    toggleIsAddingRandomScoresEpic
)



