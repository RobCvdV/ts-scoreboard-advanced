import React, { Component } from "react";
import { Link } from "react-router-dom";
import './HeaderMenu.css';

export default class HeaderMenu extends Component {
    render() {
        return (
            <div className={'header-menu'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/scoreboard'}>Scoreboard</Link>
                <Link to={'/player-types'}>Player Types</Link>
            </div>
        )
    }
}