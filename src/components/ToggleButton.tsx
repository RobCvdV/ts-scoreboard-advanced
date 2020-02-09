import React from "react";
import './ToggleButton.css';

export interface IToggleButtonProps {
    content: string;
    state: 'on' | 'off';
    onClick: (event?: any) => void;
}

export default class ToggleButton extends React.Component<IToggleButtonProps>{
    render() {
        return <button
            onClick={this.props.onClick}
            className={'toggle-button'}
        >
            {this.props.content}
            <span className={'toggle-button-light '
            + this.props.state}></span>
        </button>
    }
}

