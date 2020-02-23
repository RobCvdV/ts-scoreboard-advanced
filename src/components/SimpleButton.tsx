import React from "react";
import './SimpleButton.css';

export interface ISimpleButtonProps {
    content: string
    onClick: (event?: any) => void;
    disabled?: boolean;
    extraClasses?: string;
}

export default class SimpleButton extends React.Component<ISimpleButtonProps> {
    render() {
        const {extraClasses} = this.props;
        return <button
            onClick={this.props.disabled ? ()=>{} : this.props.onClick}
            className={'simple-button'
                + (this.props.disabled ? ' disabled' : '')
                + (extraClasses !== undefined ? ' ' + extraClasses: '')
            }
        >
            {this.props.content}
        </button>
    }
}

