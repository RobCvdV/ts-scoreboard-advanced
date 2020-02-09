import React, { Component } from 'react';
import './Player.css';
import SimpleButton from "./SimpleButton";

export interface IPlayer {
    id?: number;
    name: string;
    score: number;
}
export interface IPlayerProps extends IPlayer {
    updatePlayerScore?: (id: number, score: number) => void;
    deletePlayer?: (id: number) => void;
}

export default class Player extends Component<IPlayerProps> {
    public static defaultProps = {
        score: 0,
    };

    public handleUpdate = () => {
        if (!this.props.updatePlayerScore) return;

        const { id, score } = this.props;
        if (!id) return;

        this.props.updatePlayerScore(id, score + 1);
    };

    public handleDeletePlayer = () => {
        if (!this.props.deletePlayer) return;

        const { id } = this.props;
        if (!id) return;

        this.props.deletePlayer(id);
    }

    public render() {
        return (
            <li className="player">
                {<SimpleButton
                    content={'X'}
                    onClick={this.handleDeletePlayer}
                />}
                <p className="name">{this.props.name}</p>
                <p className="score">{this.props.score}</p>
                {<SimpleButton
                    content={'+'}
                    onClick={this.handleUpdate}
                    disabled={this.props.updatePlayerScore === undefined}/>}
            </li>
        );
    }
}