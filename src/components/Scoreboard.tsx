import React, { Component } from 'react';
import Player, { IPlayer, IPlayerProps } from './Player';
import Title from "./Title";
import './Scoreboard.css';
import { ScoreRandomAdd } from "./ScoreRandomAdd";
import PlusButton from "./PlusButton";
import ToggleButton from "./ToggleButton";
import AddPlayer from "./AddPlayer";

interface IScoreboardState {
    players: IPlayer[];
    isRandomizing: boolean;
}

const players: IPlayer[] = [
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
        players: players,
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
                });
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

    public renderPlayer = (player: IPlayer) => (<Player
        updatePlayerScore={this.state.isRandomizing ? undefined : this.updatePlayerScore}
        key={player.id}
        //rest of the porps
        {...player}
    />);

    render() {
        const {players} = this.state;
        return (
            <div className="scoreboard">
                <Title content={'Scoreboard'}/>
                <ToggleButton content={'See score comming'}
                              state={this.state.isRandomizing ? 'on' : 'off'}
                              onClick={this.toggleRandomAddHandler}/>
                <ul>
                    {players.sort((a, b) => b.score - a.score).map(this.renderPlayer)}
                </ul>
                <AddPlayer />
            </div>
        )
    }
}