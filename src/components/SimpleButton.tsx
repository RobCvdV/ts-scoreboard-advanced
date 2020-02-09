import React from "react";
import './SimpleButton.css';

export interface ISimpleButtonProps {
    content: string
    onClick: (event?: any) => void;
    disabled?: boolean;
}

export default class SimpleButton extends React.Component<ISimpleButtonProps> {
    render() {
        return <button
            onClick={this.props.onClick}
            className={'plus-button' + (this.props.disabled ? ' disabled' : '')}
        >
            {this.props.content}
        </button>
    }
}

