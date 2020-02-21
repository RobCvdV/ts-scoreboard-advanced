import React from "react";
import './PlayerTypeImage.css';

interface IPlayerTypeImage {
    url: string;
}
export const PlayerTypeImage = (prop: IPlayerTypeImage) => {
    return <img src={prop.url} alt={prop.url}/>
}