import React, { useState } from 'react';
import './App.css';

function App() {

  // 各inputの初期値をstateで管理
  const [input1, setInput1] = useState(Math.floor(Math.random() * 10));
  const [input2, setInput2] = useState(Math.floor(Math.random() * 10));
  const [input3, setInput3] = useState(Math.floor(Math.random() * 10));
  const [input4, setInput4] = useState(Math.floor(Math.random() * 10));


  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React App</h1>
      </header>
      <body className="App-body">
        <div className="number-field">
          <div className="number-area">
          {input1}
          </div>
          +
          <div className="number-area">
          {input2}
          </div>
          +
          <div className="number-area">
          {input3}
          </div>
          +
          <div className="number-area">
          {input4}
          </div>
        </div>
        <button className="button1">cal</button>
      </body>
    </div>
  );
}

export default App;
