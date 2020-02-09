import * as React from 'react';

export interface ILightSwitchState {
    active: boolean;
}

export default class LightSwitch extends React.Component<{}, ILightSwitchState> {

    public state: ILightSwitchState = {active: true};

    public render() {
        return (
            <div>
                <p>
                    The light switch is <strong>{this.state.active ? 'on' : 'off'}</strong>
                </p>
                <button onClick={this.toggle}>Toggle</button>
            </div>
        );
    }

    private toggle = () => {
        this.setState({
            active: !this.state.active,
        });
    };
}