import React, { useState } from 'react';
import Game from './Game';
import Clear from './Clear';
import './App.css';


function App() {
  const [isClear, setIsClear] = useState(false);
  let scene;
  if (isClear === false) {
    scene = <Game setIsClear={setIsClear}/>;
  } else if (isClear === true) {
    scene = <Clear setIsClear={setIsClear}/>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>δέκαGame</h1>
        デカゲーム
      </header>
      <div>
        {scene}
      </div>
    </div>
  );
}

export default App;
