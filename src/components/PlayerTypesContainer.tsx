import React, { Component } from "react";
import request from "superagent";
import PlayerTypes from "./PlayerTypes";

interface IPlayerTypesState {

    playerTypes: null | any[];

}

export default class PlayerTypesContainer extends Component<{}, IPlayerTypesState> {
    public state: IPlayerTypesState = {
        playerTypes: null
    };

    public componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => this.updatePlayerTypes(Object.keys(response.body.message) /* transform */))
            .catch(console.error);
    }

    private updatePlayerTypes = (playerTypes: any[]) => {
        console.log('Got the player types: ', playerTypes)
        this.setState({
            playerTypes: playerTypes,
        });
    };

    render() {
        return <PlayerTypes playerTypes={this.state.playerTypes}/>;
    }
}