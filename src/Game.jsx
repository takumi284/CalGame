import React, { useState } from 'react';
import './Game.css';
import {check, CorrectWrong, test, make_answer} from './background';


function Game() {
    // 各inputの初期値をstateで管理
    while (true){
      var in1 = Math.floor(Math.random() * 10);
      var in2 = Math.floor(Math.random() * 10);
      var in3 = Math.floor(Math.random() * 10);
      var in4 = Math.floor(Math.random() * 10);

    var flag = test([in1, in2, in3, in4]);
        if (flag === true){
            break;
        }
    }
    const [input1, setInput1] = useState(in1);
    const [input2, setInput2] = useState(in2);
    const [input3, setInput3] = useState(in3);
    const [input4, setInput4] = useState(in4);
    const [bracket1, setBracket1] = useState(0);
    const [bracket2, setBracket2] = useState(0);
    const [bracket3, setBracket3] = useState(0);
    const [bracket4, setBracket4] = useState(0);
    const [bracket5, setBracket5] = useState(0);
    const [bracket6, setBracket6] = useState(0);
    const [cal1, setCal1] = useState(1);
    const [cal2, setCal2] = useState(1);
    const [cal3, setCal3] = useState(1);
    const [n, setN] = useState(1);

    const operator = ['','+', '-', '*', '/', '(', ')'];

    const update = () => {
        // 空の配列を作成
        var selectedValues = [];

        // HTMLから要素を取得
        var selectElements = document.querySelectorAll('.operator1');

        // 各要素に対してループ処理を行う
        selectElements.forEach(function(selectElement) {
            // 選択されたオプションの値を取得して配列に追加
            selectedValues.push(selectElement.value);
        });

        setCal1(parseInt(selectedValues[0], 10));
        setCal2(parseInt(selectedValues[1], 10));
        setCal3(parseInt(selectedValues[2], 10));

        var c1 = parseInt(selectedValues[0], 10);
        var c2 = parseInt(selectedValues[1], 10);
        var c3 = parseInt(selectedValues[2], 10);

        let form = [bracket1, input1, c1, bracket2, input2, bracket3, c2, bracket4, input3, bracket5, c3, input4, bracket6];

        if (check(eval(CorrectWrong(form))) == true) {
            alert('正解 ' + eval(CorrectWrong(form)));
            if (n < 5) {
                while (true){
                var in1 = Math.floor(Math.random() * 10);
                var in2 = Math.floor(Math.random() * 10);
                var in3 = Math.floor(Math.random() * 10);
                var in4 = Math.floor(Math.random() * 10);
            
                var flag = test([in1, in2, in3, in4]);
                    if (flag === true){
                        break;
                    }
                }
                setInput1(in1);
                setInput2(in2);
                setInput3(in3);
                setInput4(in4);
                setN(n + 1);
                selectElements[0].value = 1;
                selectElements[1].value = 1;
                selectElements[2].value = 1;
                setBracket1(0);
                setBracket2(0);
                setBracket3(0);
                setBracket4(0);
                setBracket5(0);
                setBracket6(0);
            } else if (n >= 5) {
                window.location.href = "/Clear";
            }
        } else{
            alert('不正解' + eval(CorrectWrong(form)));
        }
    };

    const answer = () => {
        alert(make_answer([input1, input2, input3, input4]));
    };

    const handleButton4 = () => {
        setBracket1(0);
        setBracket2(0);
        setBracket3(0);
        setBracket4(0);
        setBracket5(0);
        setBracket6(0);
    };

    const handleButton2_2 = () => {
        setBracket1(5);
        setBracket2(0);
        setBracket3(6);
        setBracket4(5);
        setBracket5(0);
        setBracket6(6);
    };

    const handleButton2_11 = () => {
        setBracket1(5);
        setBracket2(0);
        setBracket3(6);
        setBracket4(0);
        setBracket5(0);
        setBracket6(0);
    };

    const handleButton11_2 = () => {
        setBracket1(0);
        setBracket2(0);
        setBracket3(0);
        setBracket4(5);
        setBracket5(0);
        setBracket6(6);
    };

    const handleButton3_1 = () => {
        setBracket1(5);
        setBracket2(0);
        setBracket3(0);
        setBracket4(0);
        setBracket5(6);
        setBracket6(0);

    };

    const handleButton1_3 = () => {
        setBracket1(0);
        setBracket2(5);
        setBracket3(0);
        setBracket4(0);
        setBracket5(0);
        setBracket6(6);
    };

    const handleButton1_2_1 = () => {
        setBracket1(0);
        setBracket2(5);
        setBracket3(0);
        setBracket4(0);
        setBracket5(6);
        setBracket6(0);
    };

    return (
        <div className="Game">
        <body className="App-body">
            {/* <div align="left">
                <button className="button2" onClick={answer}>正解例</button>
            </div> */}

            <div className="number-field">
                <div className="bracket">
                {operator[bracket1]}
            </div>

            <div className="number-area">
                {input1}
            </div>

            <select className="operator1">
                <option value="1" selected>+</option>
                <option value="2">-</option>
                <option value="3">x</option>
                <option value="4">÷</option>
            </select>

            <div className="bracket">
                {operator[bracket2]} 
            </div>

            <div className="number-area">
                {input2}
            </div>

            <div className="bracket">
                {operator[bracket3]}
            </div>

            <select className="operator1">
                <option value="1" selected>+</option>
                <option value="2">-</option>
                <option value="3">x</option>
                <option value="4">÷</option>
            </select>

            <div className="bracket">
                {operator[bracket4]}
            </div>

            <div className="number-area">
                {input3}
            </div>

            <div className="bracket">
                {operator[bracket5]}
            </div>

            <select className="operator1">
                <option value="1" selected>+</option>
                <option value="2">-</option>
                <option value="3">x</option>
                <option value="4">÷</option>
            </select>

            <div className="number-area">
                {input4}
            </div>

            <div className="bracket">
                {operator[bracket6]}
            </div>
            </div>
            <button className="button1" onClick={update}>answer</button>
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
            <p>{n}/5</p>
            <button className="button2" onClick={answer}>答えを確認</button>
        </body>
    </div>
    );
}

export default Game;
