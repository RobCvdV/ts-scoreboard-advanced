import React, { Component } from 'react';

// import PropTypes from 'prop-types';

export interface ITitleProps {
    content: string;
    chapter: string;
}

class Title extends Component<ITitleProps> {

    // propTypes are not needed if you define interfaces with mandatory props, it will even fail to build.
    // public static propTypes = {
    //     content: PropTypes.string.isRequired,
    // };

    // a default prop still makes the prop forced compile time, though it is always there, so no compile errors. just default values
    public static defaultProps = {
        chapter: '',
    };

    public render() {
        return <h1>{this.props.chapter !== '' ? this.props.chapter + ' - ' : ''}{this.props.content}</h1>;
    }
}

// or simply (for simple render components
// const Title = ({ content }: ITitleProps) => <h1>{content}</h1>;
export default Title;