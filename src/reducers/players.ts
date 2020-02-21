import { IPlayersState } from "../entities/player";
import { createReducer } from "typesafe-actions";
import { TPlayersActions } from "../actions";
import { addPlayer, addPlayerScore, deletePlayer, addPlayerWithName } from "../actions/players";

const initialState: IPlayersState = {
    playerList: []
};

const reducer = createReducer<IPlayersState, TPlayersActions>(initialState)
    .handleAction(addPlayerScore, (state, action): IPlayersState => {
        return {...state,
            playerList: state.playerList.map(player => {
                if (player.id === action.payload.playerId) {
                    return {
                        ...player,
                        score: player.score + action.payload.add,
                    };
                } else {
                    return player;
                }
            })
        }
    })
    .handleAction(addPlayer, (state, action): IPlayersState => {
        return {...state,
            playerList: state.playerList.concat(action.payload)}
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
        return {...state,
            playerList: state.playerList.concat(newPlayer)
        }
    })
    .handleAction(deletePlayer, (state, action): IPlayersState => {
        return {...state,
            playerList: state.playerList.filter(pl => pl.id !== action.payload)
        }
    })
;

export default reducer;