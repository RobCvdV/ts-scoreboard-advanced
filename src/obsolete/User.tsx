import React, { Component, MouseEventHandler } from "react";
import './User.scss'

export interface IUserProps {
    index: number
    name: string;
}

export interface IUserState {
    present: boolean;
}

class User extends Component<IUserProps, IUserState>{

    public state: IUserState = {present: false}

    render () {
        return (
            <div className={'user-item'}>
                <span>{this.props.index}</span>
                <b>{this.props.name}</b>
                <span>Present: </span>
                <button id={'button-present'} className={this.state.present ? 'is-present':''} onClick={this.onPresentToggle}>
                    {this.state.present && <span/>}
                </button>
            </div>
        )
    }

    onPresentToggle = () => {
        this.setState({
            present: !this.state.present
        })
    }
}


export default User;