import { applyMiddleware, compose, createStore } from "redux";
import { IPlayersState } from "./entities/player";
import { IScoreboardSettings } from "./entities/scoreboardSettings";
import { persistStore, persistReducer} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import watchers from './watch';
// import devToolsEnhancer from 'remote-redux-devtools';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// @ts-ignore
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage/src';

import rootReducer, {initialState} from "./reducers";
// import {rootEpic} from './epics';
// import { createEpicMiddleware } from "redux-observable";
import { TRootAction } from "./actions";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// const observableMiddleware = createEpicMiddleware<TRootAction, TRootAction, IRootState>();

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
//
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const indexedDbStorage = createIdbStorage({
    name: 'Scoreboard-redux-persist-indexed-db',
    storeName: 'keyval',

});

const persistConfig = {
    key: 'root',
    // storage,  //use for local storage instead of indexed DB
    storage: indexedDbStorage, // indexed db ,
    serialize: true, // Data serialization is not required and disabling it allows you to inspect storage value in DevTools
    // stateReconciler: autoMergeLevel2,
    // version: 0, //seems to break persistence if no migration is provided (seems logical. state is overwritten
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// @ts-ignore
// observableMiddleware.run(rootEpic)

export const store = createStore(persistedReducer,initialState, composeWithDevTools(
    // applyMiddleware(observableMiddleware)
));
export const persistor = persistStore(store);

watchers(store);

