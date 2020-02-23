// @ts-ignore
import watch from 'redux-watch';
import { startRandomlyAddingPlayerScores, stopRandomlyAddingPlayerScores } from "../actions/players";
import { Store } from "redux";

// init and kick off watchers
export default function(store: Store) {
    const w = watch(store.getState, 'scoreboardSettings.isAddingRandomScores');

    // triggering the score adding engine from the turning on of the appropriate setting
    store.subscribe(w((newValue: boolean, oldValue: boolean, objectPath: string) => {
        console.log('scoreboardSettings.isAddingRandomScores changed. now: ', newValue);
        if (newValue)
           store.dispatch(startRandomlyAddingPlayerScores(store.getState().scoreboardSettings.randomlyAddingPlayerScoresSettings));
        else
            store.dispatch(stopRandomlyAddingPlayerScores());
    }));

    // when initialized we also want to check if the setting is not already ON
    if (store.getState().scoreboardSettings.isAddingRandomScores)
        store.dispatch(startRandomlyAddingPlayerScores(store.getState().scoreboardSettings.randomlyAddingPlayerScoresSettings))
}

