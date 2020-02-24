import React, { Component } from 'react';
import Player from './Player';
import Title from "./Title";
import './Scoreboard.css';
import ToggleButton from "./ToggleButton";
import AddPlayer from "./AddPlayer";
import { IPlayer } from "../entities/player";
import SimpleButton from "./SimpleButton";

export interface IScoreboardProps {
    players: IPlayer[];
    isRandomizing: boolean;
    addPlayerScore: (id: number, add: number) => void;
    deletePlayer: (id: number) => void;
    addPlayer: (name: string) => void;
    toggleRandomAddHandler: () => void;
    resetPlayerScores: () => void;
    clearBoard:() => void;
    setPlayerName:(id: number, name: string) => void;
}

export default class Scoreboard extends Component<IScoreboardProps> {

    public renderPlayer = (player: IPlayer) => (<Player
        addPlayerScore={this.props.isRandomizing ? undefined : this.props.addPlayerScore}
        deletePlayer={this.props.deletePlayer}
        setPlayerName={this.props.setPlayerName}
        key={player.id}
        //rest of the props
        {...player}
    />);

    render() {
        const {players} = this.props;
        return (
            <div className="scoreboard">
                <div className={'scoreboard-header'}>
                    <Title content={'Scoreboard'}/>
                    <div className={'scoreboard-menu-buttons'}>
                        <ToggleButton
                            content={'Generate scores'}
                            state={this.props.isRandomizing ? 'on' : 'off'}
                            onClick={this.props.toggleRandomAddHandler}/>
                        <SimpleButton content={'Reset Scores'} onClick={this.props.resetPlayerScores} />
                        <SimpleButton content={'Clear Board'} onClick={this.props.clearBoard} disabled={this.props.isRandomizing}/>
                    </div>
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