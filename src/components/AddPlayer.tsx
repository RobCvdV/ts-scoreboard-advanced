import React, { Component } from 'react';

interface IAddPlayerState {
    name: string;
}

export default class AddPlayer extends Component<{}, IAddPlayerState> {
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
        console.log('form submitted...');
    }

    private handleChange(event: any) {
        this.setState({
            name: event.target.value,
        })
    }
}