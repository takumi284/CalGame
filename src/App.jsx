import React, { useState } from 'react';
import './App.css';

function App() {

  // 各inputの初期値をstateで管理
  const [input1, setInput1] = useState(Math.floor(Math.random() * 10));
  const [input2, setInput2] = useState(Math.floor(Math.random() * 10));
  const [input3, setInput3] = useState(Math.floor(Math.random() * 10));
  const [input4, setInput4] = useState(Math.floor(Math.random() * 10));
  const [bracket1, setBracket1] = useState("");
  const [bracket2, setBracket2] = useState("");
  const [bracket3, setBracket3] = useState("");
  const [bracket4, setBracket4] = useState("");
  const [bracket5, setBracket5] = useState("");
  const [bracket6, setBracket6] = useState("");

  const setBrackets = (b1, b2, b3, b4, b5, b6) => {
    setBracket1(b1);
    setBracket2(b2);
    setBracket3(b3);
    setBracket4(b4);
    setBracket5(b5);
    setBracket6(b6);
  }

  const handleButton4 = () => {
    setBracket1("");
    setBracket2("");
    setBracket3("");
    setBracket4("");
    setBracket5("");
    setBracket6("");
  };


  const handleButton2_2 = () => {
    setBracket1("(");
    setBracket2("");
    setBracket3(")");
    setBracket4("(");
    setBracket5("");
    setBracket6(")");
  };

  const handleButton2_11 = () => {
    setBracket1("(");
    setBracket2("");
    setBracket3(")");
    setBracket4("");
    setBracket5("");
    setBracket6("");
  };

  const handleButton11_2 = () => {
    setBracket1("");
    setBracket2("");
    setBracket3("");
    setBracket4("(");
    setBracket5("");
    setBracket6(")");
  };

  const handleButton3_1 = () => {
    setBracket1("(");
    setBracket2("");
    setBracket3("");
    setBracket4("");
    setBracket5(")");
    setBracket6("");
  };

  const handleButton1_3 = () => {
    setBracket1("");
    setBracket2("(");
    setBracket3("");
    setBracket4("");
    setBracket5("");
    setBracket6(")");
  };

  const handleButton1_2_1 = () => {
    setBracket1("");
    setBracket2("(");
    setBracket3("");
    setBracket4("");
    setBracket5(")");
    setBracket6("");
  };

  // // タイマーの開始時間
  // let seconds = 0;
  // let minutes = 0;
  
  // // タイマー要素の取得
  // const timerElement = document.getElementById('timer');
  
  // // タイマーの更新関数
  // function updateTimer() {
  //   seconds++;
  //   if (seconds >= 60) {
  //     seconds = 0;
  //     minutes++;
  //   }
  //   timerElement.textContent = (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  // }
  
  // // タイマーの開始
  // setInterval(updateTimer, 1000);

  // // タイマーの停止
  // function stopTimer() {
  //   clearInterval(timerInterval);
  // }


  return (
    <div className="App">
      <header className="App-header">
        <h1>CalGame</h1>
      </header>
      <body className="App-body">
        <div className="number-field">
          <div className="bracket">
            {bracket1}
          </div>

          <div className="number-area">
            {input1}
          </div>

          <select className="operator1">
            <option value="+" selected>+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">÷</option>
          </select>

          {/* <select className="operator2">
            <option value=" " selected> </option>
            <option value="(">(</option>
          </select> */}
          <div className="bracket">
            {bracket2} 
          </div>

          <div className="number-area">
          {input2}
          </div>

          <div className="bracket">
            {bracket3}
          </div>

          {/* <select className="operator2">
            <option value=" " selected> </option>
            <option value="(">(</option>
            <option value=")">)</option>
          </select> */}
          
          <select className="operator1">
            <option value="+" selected>+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">÷</option>
          </select>

          <div className="bracket">
            {bracket4}
          </div>

          <div className="number-area">
            {input3}
          </div>

          <div className="bracket">
            {bracket5}
          </div>

          <select className="operator1">
            <option value="+" selected>+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">÷</option>
          </select>

          <div className="number-area">
          {input4}
          </div>

          <div className="bracket">
            {bracket6}
          </div>
        </div>
        <button className="button1">cal</button>
        <div className='image_field'>
          <img src="image/4.png" className="image1" onClick={handleButton4}></img>
          <img src="image/2-2.png" className="image1" onClick={handleButton2_2}></img>
          <p></p>
          <img src="image/2-11.png" className="image1" onClick={handleButton2_11}></img>
          <img src="image/11-2.png" className="image1" onClick={handleButton11_2}></img>
          <p></p>
          <img src="image/3-1.png" className="image1" onClick={handleButton3_1}></img>
          <img src="image/1-3.png" className="image1" onClick={handleButton1_3}></img>
          <p></p>
          <img src="image/1-2-1.png" className="image1" onClick={handleButton1_2_1}></img>
        </div>

        {/* <button className="button2" onClick={stopTimer}>stop</button>
        <p id="timer">00:00</p> */}
      </body>
    </div>
  );
}

export default App;
