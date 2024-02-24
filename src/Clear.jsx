import React, { useState } from 'react';
import Game from './Game';
import './Clear.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Clear() {
  return (
    <div className="Clear">
      <p className='ClearMessage'>Clear!</p>
      <button className='ClearButton' onClick={() => window.location.href = '/'}>Back to Game</button>
    </div>
  );
}

export default Clear;