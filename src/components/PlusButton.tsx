import React from "react";
import './PlusButton.css';

export interface IPlusButtonProps {
    onClick: (event?: any) => void;
    disabled: boolean;
}

export default class PlusButton extends React.Component<IPlusButtonProps> {
    render() {
        return <button
            onClick={this.props.onClick}
            className={'plus-button' + (this.props.disabled ? ' disabled' : '')}>+</button>
    }
}

