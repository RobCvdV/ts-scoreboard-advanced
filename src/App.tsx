import React from 'react';
import './App.css';
import { Route } from "react-router";
import HeaderMenu from "./components/HeaderMenu";
import PlayerTypesContainer from "./components/PlayerTypesContainer";
import PlayerTypeImagesContainer from "./components/PlayerTypeImagesContainer";
import ScoreboardContainer from "./components/ScoreboardContainer";


const App: React.FC = () => {
    return (
        <div className="App">
            <HeaderMenu/>
            <div className={'content'}>
                <Route exact={true} path={'/scoreboard'} component={ScoreboardContainer}/>
                <Route exact={true} path={'/player-type/:type'} component={PlayerTypeImagesContainer}/>
                <Route exact={true} path={'/player-types'} component={PlayerTypesContainer}/>
                <Route exact={true} path={'/'} component={ScoreboardContainer}/>
            </div>
        </div>
    );
}

export default App;
