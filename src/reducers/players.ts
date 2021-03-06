import { IPlayersState } from "../entities/player";
import { createReducer } from "typesafe-actions";
import { TPlayersActions } from "../actions";
import {
    addPlayer,
    addPlayerScore,
    deletePlayer,
    addPlayerWithName,
    setPlayerScore,
    startRandomlyAddingPlayerScores,
    stopRandomlyAddingPlayerScores,
    deletePlayers,
    deleteAllPlayers,
    setPlayerName
} from "../actions/players";
import { RandomPlayerScoreAddingEngine } from "../engines/randomPlayerScoreAddingEngine";
import { store } from "../store";

export const initialState: IPlayersState = {
    playerList: []
};

const reducer = createReducer<IPlayersState, TPlayersActions>(initialState)
    .handleAction(addPlayerScore, (state, action): IPlayersState => {
        return {
            ...state,
            playerList: state.playerList.map(player => {
                if (player.id === action.payload.playerId) {
                    return {
                        ...player,
                        score: player.score + action.payload.amount,
                    };
                } else {
                    return player;
                }
            })
        }
    })
    .handleAction(setPlayerScore, (state, action): IPlayersState => {
        return {
            ...state,
            playerList: state.playerList.map(player => {
                if (player.id === action.payload.playerId) {
                    return {
                        ...player,
                        score: action.payload.amount,
                    };
                } else {
                    return player;
                }
            })
        }
    })
    .handleAction(setPlayerName, (state, action): IPlayersState => {
        return {
            ...state,
            playerList: state.playerList.map(player => {
                if (player.id === action.payload.playerId) {
                    return {
                        ...player,
                        name: action.payload.name,
                    };
                } else {
                    return player;
                }
            })
        }
    })
    .handleAction(addPlayer, (state, action): IPlayersState => {
        return {
            ...state,
            playerList: state.playerList.concat(action.payload)
        }
    })
    .handleAction(addPlayerWithName, (state, action): IPlayersState => {
        const {playerList} = state;
        const newPlayer = {
            id: playerList.reduce((maxId, player) => {
                return Math.max(maxId, player.id ? player.id : 0);
            }, 0) + 1,
            name: action.payload,
            score: 0
        };
        return {
            ...state,
            playerList: state.playerList.concat(newPlayer)
        }
    })
    .handleAction(deletePlayer, (state, action): IPlayersState => {
        return {
            ...state,
            playerList: state.playerList.filter(pl => pl.id !== action.payload)
        }
    })
    .handleAction(deletePlayers, (state, action) => {
        return {
            ...state,
            playerList: state.playerList.filter(pl => !action.payload.includes(pl.id))
        }
    })
    .handleAction(deleteAllPlayers, state => {
        return { ...state, playerList: []}
    })
    .handleAction(startRandomlyAddingPlayerScores, (state, action) => {
        const {amountMax, intervalInSeconds, exponentialAdding, hitChance} = action.payload;
        RandomPlayerScoreAddingEngine.startRandomlyAddingToScores(
            () => state.playerList.map<number>(pl => pl.id!),
            scoreAddings => scoreAddings.forEach(score => store.dispatch(addPlayerScore(score))),
            amountMax,
            intervalInSeconds,
            exponentialAdding,
            hitChance
        );
        return state;
    })
    .handleAction(stopRandomlyAddingPlayerScores, state => {
        RandomPlayerScoreAddingEngine.stopRandomlyAddingToScores();
        return state;
    })
;

export default reducer;