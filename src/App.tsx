import React from 'react';
import './App.css';
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<Title content={"A Proper Title"}/>*/}
      <Scoreboard />
    </div>
  );
}

export default App;
