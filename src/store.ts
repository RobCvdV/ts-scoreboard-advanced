import { compose, createStore } from "redux";
import { IPlayersState } from "./entities/player";
import { IScoreboardSettings } from "./entities/scoreboardSettings";
import { persistStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// @ts-ignore
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage/src';

// import rootReducer from './reducers'
import rootReducer from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

export interface IRootState {
    players: IPlayersState;
    scoreboardSettings: IScoreboardSettings;
}

const indexedDbStorage = createIdbStorage({
    name: 'Scoreboard-redux-persist-indexed-db',
    storeName: 'keyval',
});

const persistConfig = {
    key: 'root',
    storage: indexedDbStorage, //use default 'storage' for localStorage
    serialize: false, // Data serialization is not required and disabling it allows you to inspect storage value in DevTools
    // version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);


