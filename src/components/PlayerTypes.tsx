import React, { Component } from "react";
import './PlayerTypes.css';
import { Link } from "react-router-dom";

interface IPlayerTypesProps {

    playerTypes: null | any[];

}

export default class PlayerTypes extends Component<IPlayerTypesProps> {
    private renderPlayerType = (playerType: string) => {
        return <li key={playerType}>
            <Link to={`/player-type/${playerType}`}>{playerType}</Link>
        </li>
    }

    render() {
        const content: any = !this.props.playerTypes
            ? <p>Loading player type info...</p>
            : <ul>
                {this.props.playerTypes.map(playerType => this.renderPlayerType(playerType))}
            </ul>;
        return (
            <div className={'player-types'}>
                <h1 className={'title'}>Best Players In The World</h1>
                {content}
            </div>
        )
    }
}