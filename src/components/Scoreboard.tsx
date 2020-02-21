import React, { Component } from 'react';
import Player from './Player';
import Title from "./Title";
import './Scoreboard.css';
import ToggleButton from "./ToggleButton";
import AddPlayer from "./AddPlayer";
import { IPlayer } from "../entities/player";

export interface IScoreboardProps {
    players: IPlayer[];
    isRandomizing: boolean;
    addPlayerScore: (id: number, add: number) => void;
    deletePlayer: (id: number) => void;
    addPlayer: (name: string) => void;
    toggleRandomAddHandler: () => void;
}

export default class Scoreboard extends Component<IScoreboardProps> {

    public renderPlayer = (player: IPlayer) => (<Player
        addPlayerScore={this.props.isRandomizing ? undefined : this.props.addPlayerScore}
        deletePlayer={this.props.deletePlayer}
        key={player.id}
        //rest of the porps
        {...player}
    />);

    render() {
        const {players} = this.props;
        return (
            <div className="scoreboard">
                <div className={'scoreboard-header'}>
                    <Title content={'Scoreboard'}/>
                    <ToggleButton content={'See scores coming in'}
                                  state={this.props.isRandomizing ? 'on' : 'off'}
                                  onClick={this.props.toggleRandomAddHandler}/>
                </div>
                <div className={"scoreboard-content"}>
                    <ul className={"scoreboard-list"}>
                        {players.sort((a, b) => b.score - a.score).map(this.renderPlayer)}
                    </ul>
                </div>
                <div className={"scoreboard-footer"}>
                    <AddPlayer addPlayer={this.props.addPlayer}/>
                </div>
            </div>
        )
    }
}