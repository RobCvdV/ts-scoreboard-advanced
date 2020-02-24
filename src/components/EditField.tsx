import React, { Component, RefObject } from "react";
import './EditField.css';

interface IEditFieldState {
    content: string;
    isEditing: boolean;
}

interface IEditFieldProps {
    contentOriginal: string
    editingCompleted: (content: string) => void
}

export default class AddPlayer extends Component<IEditFieldProps, IEditFieldState> {
    private node: RefObject<HTMLInputElement>;

    public state: IEditFieldState = {
        content: this.props.contentOriginal,
        isEditing: false
    }

    constructor(props: IEditFieldProps) {
        super(props);

        this.node = React.createRef();
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            content: event.currentTarget.value,
        });
    }

    private handleAbort = () => {
        this.setState({
            content: this.props.contentOriginal,
        });
        this.setState({isEditing: false});
    }

    private handleKeyPressed = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case "Enter": {
                // update callback
                this.props.editingCompleted(this.state.content);
                this.setState({isEditing: false});
                break;
            }
            case "Escape": {
                this.handleAbort();
                break;
            }
        }
    }

    private handleClick = (event: React.MouseEvent) => {
        this.setState({isEditing: true});
        this.node.current!.focus();
    }

    public render() {
        return (
            <input
                type={'text'}
                className={'edit-field' + (this.state.isEditing ? ' editing': '')}
                value={this.state.content}
                onChange={this.handleChange}
                onAbort={this.handleAbort}
                onKeyDown={this.handleKeyPressed}
                onClick={this.handleClick}
                readOnly={!this.state.isEditing}
                ref={this.node}
            />
        )
    }
}