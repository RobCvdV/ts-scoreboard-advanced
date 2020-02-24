import { createStore } from "redux";
import { persistStore, persistReducer} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import watchers from './watch';
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// @ts-ignore
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage/src';
import {rootReducer, initialState} from "./reducers";

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

export const store = createStore(persistedReducer,initialState, composeWithDevTools(
    // applyMiddleware(observableMiddleware)
));
export const persistor = persistStore(store);

watchers(store);

