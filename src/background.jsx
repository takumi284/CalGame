operator = ['','+', '-', '*', '/', '(', ')'];

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
    //listの2番目(数字部分）/15番目の文字
    formula += list[1];

    //listの3番目/15番目の文字
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
        formula = formula + operator[3];
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

    return eval(formula);
}
function check(eq){
    if(eq === 10){
        //正解の時1を返す
        return 1;
    }else{
        //不正解の時2を返す
        return 0;
    }
}

//check(CorrectWrong([5,4,3,0,2,6,1,0,3,0,2,1,0]))
//を実行すると、1が返ってくる
//(4 * 2)+ 3 - 1  = 10


