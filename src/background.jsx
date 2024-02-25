var operator = ['','+', '-', '*', '/', '(', ')'];
//調査開始

//CorrectWrong関数：引数として受け取ったlistの中身を数式に変換する関数
function CorrectWrong(list){
    var formula = '';
    //listの1番目/15番目の文字
    if (list[0] === 0){
        //最初が空白の場合
    }else if(list[0] === 5){
        //最初が ( の場合
        formula += operator[5];
    }else{
        //それ以外の演算子の場合
        //計算式として成り立たない
        return false;
    }
    //list[1]
    formula += list[1];

    //list[2]
    if (list[2] === 0){
        //空白の場合
    }else if(list[2] === 5 || list[2] === 6){
        return false;
    }else{
        formula += operator[list[2]];
    }
    
    //list[3]
    if (list[3] === 0){
        //空白の場合
    }else if(list[3] === 5){
        //( の場合
        formula += operator[list[3]];
    }else{
        //それ以外の演算子の場合
        //計算式として成り立たない
        return false;
    }

    //list[4]
    formula += list[4];

    //list[5]
    if (list[5] === 0){
        //空白の場合
    }else if(list[5] === 5 || list[5] === 6){
        formula += operator[list[5]];
    }else{
        return false;
    }

    //list[6]
    if (list[6] === 0){
        //空白の場合
    }else if(list[6] === 5 || list[6] === 6){
        return false;
    }else{
        formula += operator[list[6]];
    }

    //list[7]
    if (list[7] === 0){
        //空白の場合
    }else if(list[7] === 5 || list[7] === 6){
        formula += operator[list[7]];
    }else{
        return false;
    }

    //list[8]
    formula += list[8];

    //list[9]
    if (list[9] === 0){
        //空白の場合
    }else if(list[9] === 6){
        formula += operator[list[9]];
    }else{
        return false;
    }

    //list[10]
    if (list[10] === 0){
        //空白の場合
    }else if(list[10] === 5 || list[10] === 6){
        return false;
    }else{
        formula += operator[list[10]];
    }
    
    //list[11]
    formula += list[11];

    //list[12]
    if (list[12] === 0){
        //空白の場合
    }else if(list[12] === 6){
        formula += operator[list[12]];
    }else{
        return false;
    }
    return formula;
}

//calculation関数：引数として受け取った数式を計算する関数
function calculation(formula){
    return eval(formula);
}

//check関数：引数として受け取った数式の答えが10かどうかを判定する関数
function check(eq){
    if(eq === 10){
        //正解の時1を返す
        return 1;
    }else{
        //不正解の時2を返す
        return 0;
    }
}

//check(calculation(CorrectWrong([5,4,3,0,2,6,1,0,3,0,2,1,0])))
//を実行すると、1が返ってくる
//(4 * 2)+ 3 - 1  = 10


//test関数：引数として受け取ったlistが10になるための数式かど存在するかどうかを判定する関数
function make_answer(list){
    let first =  [5,list[0],0,0,list[1],6,0,5,list[2],0,0,list[3],6];
    let second = [0,list[0],0,5,list[1],0,0,0,list[2],6,0,list[3],0];
    let third =  [0,list[0],0,5,list[1],0,0,0,list[2],0,0,list[3],6];
    let forth =  [5,list[0],0,0,list[1],0,0,0,list[2],6,0,list[3],0];
    let fifth =  [0,list[0],0,0,list[1],0,0,0,list[2],0,0,list[3],0];
    let sixth =  [5,list[0],0,0,list[1],6,0,0,list[2],0,0,list[3],0];
    let seventh = [0,list[0],0,0,list[1],0,0,5,list[2],0,0,list[3],6];

    
    
    for (let i = 1; i < 5; i++){
        for(let j = 1; j < 5; j++){
            for(let k = 1; k < 5; k++){
                let check1 = first;
                let check2 = second;
                let check3 = third;
                let check4 = forth;
                let check5 = fifth;
                let check6 = sixth;
                let check7 = seventh;
                check1[2] = i;
                check1[6] = j;
                check1[10] =k;
                check2[2] = i;
                check2[6] = j;
                check2[10] =k;
                check3[2] = i;
                check3[6] = j;
                check3[10] =k;
                check4[2] = i;
                check4[6] = j;
                check4[10] =k;
                check5[2] = i;
                check5[6] = j;
                check5[10] =k;
                check6[2] = i;
                check6[6] = j;
                check6[10] =k;
                check7[2] = i;
                check7[6] = j;
                check7[10] =k;
                
                const checks = [check1, check2, check3, check4, check5, check6, check7];
                for (let i = 0; i < checks.length; i++) {
                    if (check(calculation(CorrectWrong(checks[i]))) === 1) {
                        return CorrectWrong(checks[i]);
                    }
                }
            }
        }
        
    }
    return false;
}

function test(list){
    if (make_answer(list) === false){
        return false;
    } else {
        return true;
    }
}

export {check, CorrectWrong, test, make_answer};

//test([9,8,2,5])
//を実行すると、1が返ってくる
//(9+8)-(2+5) = 10