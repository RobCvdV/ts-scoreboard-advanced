import scoreboardSettingsWatcher from './scoreboardSettings';
import { Store } from "redux";

export default function (store: Store){
    scoreboardSettingsWatcher(store);
};