import React, { Component } from "react";
import request from "superagent";
import PlayerTypeImages from "./PlayerTypeImages";
import { RouteComponentProps, match as Match } from "react-router";
import { Routed, RoutedHistory, RoutedLocation, RoutedMatch } from "../hoc/Routed";

interface IPlayerTypeImagesContainerParams {
    type: string;
}

interface IPlayerTypeImagesContainerProps extends RouteComponentProps<IPlayerTypeImagesContainerParams> {}

interface IPlayerTypeImagesContainerState {images: null | string[];}

@Routed
export default class PlayerTypeImagesContainer extends Component<IPlayerTypeImagesContainerProps, IPlayerTypeImagesContainerState> {

    @RoutedMatch
    public match!: Match<IPlayerTypeImagesContainerParams>;

    @RoutedLocation
    public location!: Location;

    @RoutedHistory
    public history!: History;

    public state: IPlayerTypeImagesContainerState = {images: null}

    public componentDidMount(): void {
        const {type} = this.props.match.params;

        request
            .get(`https://dog.ceo/api/breed/${encodeURIComponent(type)}/images`)
            .then(response => this.updateImages(response.body.message))
            .catch(console.error);
    }

    private updateImages = (images: string[]) => {
        this.setState({
            images: images,
        });
    };

    render() {
        const {type} = this.match.params;
        const {images} = this.state;

        if (!images)
            return <p>Loading...</p>;

        return <PlayerTypeImages
            playerType={type}
            playerTypeImages={images}
        />
    }
}