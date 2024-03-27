import React, { useState } from 'react';
import Game from './Game';
import './Clear.css';


function Clear(props) {
  return (
    <div className="Clear">
      <p className='ClearMessage'>Clear!</p>
      <button className='ClearButton' onClick={() => props.setIsClear(false)}>Back to Game</button>
    </div>
  );
}

export default Clear;