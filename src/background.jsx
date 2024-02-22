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
    }else if(list[2] === 5){
        //( の場合
        formula += operator[5];
    }else{
        //それ以外の演算子の場合
        //計算式として成り立たない
        return false;
    }

    //listの4番目(数字部分）/15番目の文字
    if (list[3] === 0){
        //空白の場合
    }else if(list[3] === 5 || list[3] === 6){
        return false;
    }else{
        formula += operator[list[3]];
    }

    //listの5番目(数字部分）/15番目の文字
    if (list[4] === 0){
        //空白の場合
    }else if(list[4] === 5){
        //( の場合
        formula = formula + operator[5];
    }else{
        //それ以外の演算子の場合
        //計算式として成り立たない
        return false;
    }

    //listの6番目(数字部分）/15番目の文字
    formula += list[5];

    //listの7番目/15番目の文字
    if (list[6] === 0){
        //空白の場合
    }else if(list[6] === 5 || list[6] === 6){
        formula += operator[list[6]];
    }else{
        return false;
    }

    //listの8番目/15番目の文字
    if (list[7] === 0){
        //空白の場合
    }else if(list[7] === 5 || list[7] === 6){
        return false;
    }else{
        formula += operator[list[7]];
    }

    //listの9番目/15番目の文字
    if (list[8] === 0){
        //空白の場合
    }else if(list[8] === 5 || list[8] === 6){
        formula += operator[list[8]];
    }else{
        return false;
    }

    //listの10番目(数字部分）/15番目の文字
    formula += list[9];

    //listの11番目/15番目の文字
    if (list[10] === 0){
        //空白の場合
    }else if(list[10] === 6){
        formula += operator[list[10]];
    }else{
        return false;
    }

    //listの12番目/15番目の文字
    if (list[11] === 0){
        //空白の場合
    }else if(list[11] === 5 || list[11] === 6){
        return false;
    }else{
        formula += operator[list[11]];
    }
    //listの13番目/15番目の文字
    if (list[12] === 0){
        //空白の場合
    }else if(list[12] === 6){
        formula += operator[list[12]];
    }else{
        return false;
    }
    //listの14番目/15番目の文字
    formula += list[13];

    //listの15番目/15番目の文字
    if (list[14] === 0){
        //空白の場合
    }else if(list[14] === 6){
        formula += operator[list[14]];
    }else{
        return false;
    }
    var check = eval(formula);
    if(check === 10){
        //正解の時1を返す
        return 1;
    }else{
        //不正解の時2を返す
        return 0;
    }
    
    
}

//CorrectWrong([5,4,0,3,0,2,6,1,0,3,0,2,0,1,0])
//を実行すると、1が返ってくる
//(4 * 2)+ 3 - 1  = 10
//540302610302010


