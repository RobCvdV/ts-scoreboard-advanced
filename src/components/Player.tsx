import React, { Component } from 'react';
import './Player.css';
import SimpleButton from "./SimpleButton";
import { IPlayer } from "../entities/player";
import EditField from "./EditField";

export interface IPlayerProps extends IPlayer {
    addPlayerScore?: (id: number, add: number) => void;
    deletePlayer?: (id: number) => void;
    setPlayerName?: (id: number, name: string) => void;
}

export default class Player extends Component<IPlayerProps> {
    public static defaultProps = {
        scorePerHit: 1,
    };

    public render() {


        return (
            <li className="player">
                {<SimpleButton
                    content={'X'}
                    onClick={() => {this.props.deletePlayer!(this.props.id)}}
                    extraClasses={'square'}
                    disabled={this.props.addPlayerScore === undefined}
                />}
                <EditField
                    contentOriginal={this.props.name}
                    editingCompleted={(name:string) => {this.props.setPlayerName!(this.props.id, name)}}
                />
                <p className="score">{this.props.score}</p>
                {<SimpleButton
                    content={'+'}
                    onClick={() => {this.props.addPlayerScore!(this.props.id, 1)}}
                    disabled={this.props.addPlayerScore === undefined}
                    extraClasses={'square'}
                />}
            </li>
        );
    }
}