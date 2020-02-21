import React, { Component } from 'react';
import './AddPlayer.css';

interface IAddPlayerState {
    name: string;
}

interface IAddPlayerProps {
    addPlayer: (name: string) => void
}

export default class AddPlayer extends Component<IAddPlayerProps, IAddPlayerState> {
    public state: IAddPlayerState = {
        name: '',
    }

    public render() {
        return (
            <div className="add-player">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text" name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </label>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        );
    }

    private handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Adding player with name: ', this.state.name);
        this.props.addPlayer(this.state.name);
        //clear input
        this.setState({name:''});
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: event.currentTarget.value,
        });
    }
}