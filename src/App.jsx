import React, { useState } from 'react';
import Game from './Game';
import Clear from './Clear';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>δέκαGame</h1>
          デカゲーム
        </header>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/Clear" element={<Clear />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
