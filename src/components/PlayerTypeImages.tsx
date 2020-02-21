import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PlayerTypeImage } from "./PlayerTypeImage";

interface IPlayerTypeImagesProps {
    playerType: string;
    playerTypeImages: string[];
}

export default class PlayerTypeImages extends Component<IPlayerTypeImagesProps> {
    render() {
        if (!this.props.playerTypeImages) return <div>
            Nothing to show.
            <Link to="/">&lt;-- Go back</Link>
        </div>

        const playerType = this.props.playerType;
        const images = this.props.playerTypeImages;

        return (<div className={'player-types-images'}>
            <h1>This is what {playerType} looks like</h1>
            <p><Link to="/">&lt;-- Go back</Link></p>
            {images.map(url => <PlayerTypeImage key={url} url={url} />)}
        </div> )
    }
}