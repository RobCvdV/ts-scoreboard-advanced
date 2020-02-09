import React, { Component } from "react";
import User, { IUserProps } from "./User";
import './UserBoard.scss';

export interface IUserBoardState {
    users: string[];
}

class UserBoard extends Component<{}, IUserBoardState>{

    public state: IUserBoardState = {
        users: [
            "Bert",
            "Joggy",
            "Bill"
        ]
    }

    public render(){
        return(
            <div>
                <h1 className={'board-title'}>Board</h1>
                <div className={'user-list'}>
                {this.state.users.map((user, index) => {
                    return <User key={index} index={index} name={user}/>
                })}
                </div>
            </div>
        )
    }
}

export default UserBoard;