import React, { Component } from 'react';
import Player, { IPlayer, IPlayerProps } from './Player';
import Title from "./Title";
import './Scoreboard.css';
import { ScoreRandomAdd } from "./ScoreRandomAdd";
import ToggleButton from "./ToggleButton";
import AddPlayer from "./AddPlayer";

interface IScoreboardState {
    players: IPlayer[];
    isRandomizing: boolean;
}

const playersInitialState: IPlayer[] = [
    {
        id: 1,
        name: 'Arien',
        score: 1,
    },
    {
        id: 2,
        name: 'Mimi',
        score: 5,
    },
    {
        id: 3,
        name: 'Rein',
        score: 4,
    }
];

export default class Scoreboard extends Component {
    public state: Readonly<IScoreboardState> = {
        players: playersInitialState,
        isRandomizing: false
    };

    private randomizeScores = new ScoreRandomAdd();

    private toggleRandomAddHandler = () => {
        if (this.randomizeScores.isRandomizing()) {
            this.randomizeScores.stopRandomlyAddingToScores();
            this.setState({isRandomizing: false});
        } else {
            this.randomizeScores.startRandomlyAddingToScores(
                () => this.state.players,
                (playersOut) => {
                    this.setState({
                        players: playersOut
                    });
                },
                50,
                1000
            );
            this.setState({isRandomizing: true});
        }
    }

    public updatePlayerScore = (id: number, score: number) => {
        this.setState({
            players: this.state.players.map(player => {
                if (player.id === id) {
                    return {
                        ...player,
                        score,
                    };
                } else {
                    return player;
                }
            }),
        });
    };

    public addPlayer = (name: string) => {
        const newPlayer = {
            id: this.state.players.reduce((maxId, player) => {
                return Math.max(maxId, player.id ? player.id : 0);
            }, 0) + 1,
            name: name,
            score: 0
        }
        this.setState({
            players: this.state.players.concat(newPlayer)
        })
    };

    public deletePlayer = (id: number) => {
        this.setState({
            players: this.state.players.filter(value => value.id !== id)
        })
    }

    public renderPlayer = (player: IPlayer) => (<Player
        updatePlayerScore={this.state.isRandomizing ? undefined : this.updatePlayerScore}
        deletePlayer={this.deletePlayer}
        key={player.id}
        //rest of the porps
        {...player}
    />);

    render() {
        const {players} = this.state;
        return (
            <div className="scoreboard">
                <div className={'scoreboard-header'}>
                    <Title content={'Scoreboard'}/>
                    <ToggleButton content={'See scores coming in'}
                                  state={this.state.isRandomizing ? 'on' : 'off'}
                                  onClick={this.toggleRandomAddHandler}/>
                </div>
                <div className={"scoreboard-content"}>
                    <ul className={"scoreboard-list"}>
                        {players.sort((a, b) => b.score - a.score).map(this.renderPlayer)}
                    </ul>
                </div>
                <div className={"scoreboard-footer"}>
                    <AddPlayer addPlayer={this.addPlayer}/>
                </div>
            </div>
        )
    }
}