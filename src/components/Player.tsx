import React, { Component } from 'react';
import './Player.css';
import SimpleButton from "./SimpleButton";
import { IPlayer } from "../entities/player";

export interface IPlayerProps extends IPlayer {
    addPlayerScore?: (id: number, add: number) => void;
    deletePlayer?: (id: number) => void;
}

export default class Player extends Component<IPlayerProps> {
    public static defaultProps = {
        scorePerHit: 1,
    };

    public handleUpdate = () => {
        if (!this.props.addPlayerScore) return;

        const { id } = this.props;
        if (!id) return;

        this.props.addPlayerScore(id, 1);
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
                    extraClasses={'square'}
                    disabled={this.props.addPlayerScore === undefined}
                />}
                <p className="name">{this.props.name}</p>
                <p className="score">{this.props.score}</p>
                {<SimpleButton
                    content={'+'}
                    onClick={this.handleUpdate}
                    disabled={this.props.addPlayerScore === undefined}
                    extraClasses={'square'}
                />}
            </li>
        );
    }
}