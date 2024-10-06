function log(value) {
    console.log(value);
}

/*
*▼ぞろ目チェック
*@string inputValue 確認する文字列
*@array doublesTargetArray 対象のデータ配列
*@return boolean
*/
let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
function isDoublesInArray(inputValue, doublesTargetArray) {
    return $.inArray(parseInt(inputValue), doublesTargetArray) !== -1;
}

/**
 * 1桁になるまで分解足し算する処理
 * @param  inputValue：計算対象の数字
 * @returns 計算結果
 */
function sumDigitsUntilSingle(inputValue) {
    let cntSum = parseInt(inputValue);
    let expression = "";
    let formulaList = [];
    let cntsumStr = "";

    // 計算式表示用
    formulaList.push(inputValue);

    // 1桁になるまで分解足し算処理をループ
    while (cntSum >= 10) {

        // 数値を文字列に変換
        cntsumStr = cntSum.toString();
        // 文字列を各文字に分割して配列に
        let digitsArray = cntsumStr.split('');
        // 各桁の数字を合計
        let sum = digitsArray.reduce((sum, digit) => sum + Number(digit), 0);
        cntSum = sum;

        // 計算式表示用　配列の各要素を文字列に変換して、"+" でつなげたものを格納
        expression = digitsArray.join(' + ');
        formulaList.push("(" + expression + ")" + " -> " + cntSum);
    }

    // 配列の要素を全て文字列として連結
    let expressionStr = formulaList.join(' -> '); // 結果: "19 -> 1 + 9 -> 10 -> 1 + 0 -> 1"
    log("sumDigitsUntilSingleの計算結果 " + expressionStr)
    return cntSum;
}

/* 
計算開始時点でinput値がぞろ目(11~99)の場合は1桁に分解せずそのまま出力する。ぞろ目じゃない場合は1桁になるまでorぞろ目(11~99)になるまで足し算する。
例：input値11 →output 11　/  input値111 →output 1+1+1→3
この計算式を使用している項目
ベース：日
ライトナンバー
*/
function startIsDoublesNum(val) {
    // inputの日がぞろ目の場合はそのまま返却
    if (isDoublesInArray(val, doublesTargetArray)) {
        let expressionStr = "(" + val + ")" + " -> " + val;
        log("startIsDoublesNumの計算結果 " + expressionStr);
        return {
            cntSum: val,
            expression: expressionStr,
        }
    } else {
        // ぞろ目じゃない場合は1桁になるまでorぞろ目になるまで分解計算実行
        let result = calcEachNum(val);
        log("startIsDoublesNumの計算結果 " + result.expression);
        return {
            cntSum: result.cntSum,
            expression: result.expression,
        }
    }
}

/* 
inputの月、日がぞろ目の場合は1桁に分解せずそのまま計算する 11月12日→11+1+2→14→1+4→5
inputの年はぞろ目の場合でも1桁に分解後計算する 1999→1+9+9+9
メイン：年+月+日
*/
function mainNum(birth_year, birth_month, day) {
    let sumMonth;
    let sumDay;
    let digitsArrayMonth;
    let digitsArrayDay;
    let expressionMonth;
    let expressionDay;

    // 初回の年計算だけぞろ目を加味して計算する必要があるため別々で計算
    // 年を1桁に分解して合計する
    let calBirthYear = birth_year.toString();
    let digitsArrayYear = calBirthYear.split('');
    let sumBirthYear = digitsArrayYear.reduce((sum, digit) => sum + Number(digit), 0);
    let expressionYear = digitsArrayYear.join(' + ');

    // inputの月がぞろ目の場合、そのまま計算に使用する
    if (isDoublesInArray(birth_month, doublesTargetArray)) {
        sumMonth = birth_month;
        expressionMonth = birth_month;
    } else {
        let calMonth = birth_month.toString();
        digitsArrayMonth = calMonth.split('');
        sumMonth = digitsArrayMonth.reduce((sum, digit) => sum + Number(digit), 0);
        expressionMonth = digitsArrayMonth.join(' + ');
    }
    // inputの日がぞろ目の場合、そのまま計算に使用する
    if (isDoublesInArray(day, doublesTargetArray)) {
        sumDay = day;
        expressionDay = day;
    } else {
        let calDay = day.toString();
        digitsArrayDay = calDay.split('');
        sumDay = digitsArrayDay.reduce((sum, digit) => sum + Number(digit), 0);
        expressionDay = digitsArrayDay.join(' + ');
    }

    let calFirst = Number(sumBirthYear) + Number(sumMonth) + Number(sumDay);
    // 計算式表示用　配列の各要素を文字列に変換して、"+" でつなげたものを格納
    let firstLog = "(" + expressionYear + " + " + expressionMonth + " + " + expressionDay + ")";

    // ぞろ目じゃない場合は1桁になるまでorぞろ目になるまで分解計算実行
    let result = calcEachNum(calFirst);
    log("mainNumの計算結果 " + firstLog + " -> " + result.expression)
    return {
        cntSum: result.cntSum,
        expression: result.expression,
    }
}

/* 
inputの月、日がぞろ目の場合は1桁に分解せずそのまま計算する 11月12日→11+1+2→14→1+4→5
チャレンジ：月+日
*/
function charengeNum(birth_month, day) {
    let sumMonth;
    let sumDay;
    let digitsArrayMonth;
    let digitsArrayDay;
    let expressionMonth;
    let expressionDay;

    // inputの月がぞろ目の場合、そのまま計算に使用する
    if (isDoublesInArray(birth_month, doublesTargetArray)) {
        sumMonth = birth_month;
        expressionMonth = birth_month;
    } else {
        let calMonth = birth_month.toString();
        digitsArrayMonth = calMonth.split('');
        sumMonth = digitsArrayMonth.reduce((sum, digit) => sum + Number(digit), 0);
        expressionMonth = digitsArrayMonth.join(' + ');
    }
    // inputの日がぞろ目の場合、そのまま計算に使用する
    if (isDoublesInArray(day, doublesTargetArray)) {
        sumDay = day;
        expressionDay = day;
    } else {
        let calDay = day.toString();
        digitsArrayDay = calDay.split('');
        sumDay = digitsArrayDay.reduce((sum, digit) => sum + Number(digit), 0);
        expressionDay = digitsArrayDay.join(' + ');
    }

    let calFirst = Number(sumMonth) + Number(sumDay);
    // 計算式表示用　配列の各要素を文字列に変換して、"+" でつなげたものを格納
    let firstLog = "(" + expressionMonth + " + " + expressionDay + ")";

    // ぞろ目じゃない場合は1桁になるまでorぞろ目になるまで分解計算実行
    let result = calcEachNum(calFirst);
    log("charengeNumの計算結果 " + firstLog + " -> " + result.expression)
    return {
        cntSum: result.cntSum,
        expression: result.expression,
    }
}
/* 
入力値カウント(1+2+3+4...)各数字を一つずつカウントし、1桁になった場合またはぞろ目になった場合はカウントを終了する
イヤーナンバー
道
到達
ハート
ペルソナ
ウイーク
フォーディーメンション
メジャーサイクルナンバー
ピナクルナンバー
チャレンジナンバー
*/
function calcEachNum(inputValue) {
    let cntSum = inputValue;
    let expression = "";
    let formulaList = [];
    let cntsumStr = "";

    // 計算式表示用
    formulaList.push(inputValue);

    // 数字が10以上（1桁じゃない）かつぞろ目じゃない場合は分解足し算処理をループ
    while (cntSum >= 10 && !isDoublesInArray(cntSum, doublesTargetArray)) {
        // 数値を文字列に変換
        cntsumStr = cntSum.toString();
        // 文字列を各文字に分割して配列に
        let digitsArray = cntsumStr.split('');
        // 各桁の数字を合計
        let sum = digitsArray.reduce((sum, digit) => sum + Number(digit), 0);
        cntSum = sum;

        // 計算式表示用　配列の各要素を文字列に変換して、"+" でつなげたものを格納
        expression = digitsArray.join(' + ');
        formulaList.push("(" + expression + ")" + " -> " + cntSum);
    }

    cntSum = parseInt(cntSum);

    // 配列の要素を全て文字列として連結
    let expressionStr = formulaList.join(' -> '); // 結果: "19 -> 1 + 9 -> 10 -> 1 + 0 -> 1"
    log("calcEachNumの計算結果 " + expressionStr)
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
// 生年月日から算出(ベース/メイン/チャレンジ/イヤーナンバー・メジャーサイクルナンバー/ピナクルナンバー/チャレンジナンバー)
function calculateDigits(birthdate) {
    // 月と日を取得
    let birth_year = birthdate.substr(0, 4);//生まれ年
    let birth_month = birthdate.substr(4, 2);//生まれ月
    let day = birthdate.substr(6, 2);//生まれ日
    let b_date = birthdate.substr(4, 4);//生まれ月日

    let sumDay = startIsDoublesNum(day); //ベース

    let sumBirthdate = mainNum(birth_year, birth_month, day);//メイン数

    let sumBdate = charengeNum(birth_month, day);//チャレンジ・ピナクルナンバーのファースト
    //イヤーナンバー
    let yearSum = 0;
    var currentYear = new Date().getFullYear();
    let yearNum = parseInt(currentYear) + parseInt(b_date);
    yearSum = calcEachNum(yearNum.toString());

    //　▼メジャーサイクルナンバー：追い風
    let valuesTable = {
        1: ["0~26歳", "27~53歳", "54歳~"],
        2: ["0~25歳", "26~52歳", "53歳~"],
        3: ["0~33歳", "34~60歳", "61歳~"],
        4: ["0~32歳", "33~59歳", "60歳~"],
        5: ["0~31歳", "32~58歳", "59歳~"],
        6: ["0~30歳", "31~57歳", "58歳~"],
        7: ["0~29歳", "30~56歳", "57歳~"],
        8: ["0~28歳", "29~55歳", "56歳~"],
        9: ["0~27歳", "28~54歳", "55歳~"],
    };
    /*
    *年齢表示　棒グラフ用
    */
    let valuesTable_2 = {
        1: ["26", "27", "53", "54"],
        2: ["25", "26", "52", "53"],
        3: ["33", "34", "60", "61"],
        4: ["32", "33", "59", "60"],
        5: ["31", "32", "58", "59"],
        6: ["30", "31", "57", "58"],
        7: ["29", "30", "56", "57"],
        8: ["28", "29", "55", "56"],
        9: ["27", "28", "54", "55"],
    };


    // メイン数を1桁になるまで分解足し算する メジャーサイクルで使用するメイン数は1桁になるまで分割計算したものを使用する
    let change_num_for_calc_age = parseInt(sumBirthdate.cntSum);
    let mainSingle = sumDigitsUntilSingle(change_num_for_calc_age);


    // メジャーサイクルナンバー 数秘術計算結果を取得
    let sumBirthMonth = calcEachNum(birth_month);
    let sumBirthDay = calcEachNum(day);
    let sumBirthYear = calcEachNum(birth_year);

    // メジャーサイクルナンバー ファースト～サードに表示する用の年齢を取得
    var rangeFirstVal = valuesTable[mainSingle][0];
    var rangeSecondVal = valuesTable[mainSingle][1];
    var rangeThirdVal = valuesTable[mainSingle][2];
    sumBirthMonth["rangeFirstVal"] = rangeFirstVal;
    sumDay["rangeSecondVal"] = rangeSecondVal;
    sumBirthYear["rangeThirdVal"] = rangeThirdVal;


    //▼ピナクルナンバー:登り山
    /*
    birth_year = birthdate.substr(0, 4);//生まれ年
    birth_month = birthdate.substr(4, 2);//生まれ月
    day = birthdate.substr(6, 2);//生まれ日
    19900313
    ファースト(生まれ月＋日)[年齢=36-メイン数]
    */
    let firstAge = 36 - mainSingle;
    let sumMonthDay = parseInt(birth_month) + parseInt(day);
    let pnFirstVal = calcEachNum(sumMonthDay.toString());
    var pnFirstRange = "[0歳~" + firstAge + "歳]";

    //セカンド(生まれ日+生まれ年)[年齢=ファースト+9]
    let sumYearDay = parseInt(birth_year) + parseInt(day);
    sumYearDay = calcEachNum(sumYearDay.toString());
    let secondAge = firstAge + 9;
    let fromSecondAge = parseInt(firstAge) + 1;
    let pnSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳]";

    //サード(ファースト＋セカンド)
    let thirdAge = secondAge + 9;
    let fromThirdAge = parseInt(secondAge) + 1;
    let pnThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳]";
    let pnThirdVal = parseInt(sumBdate.cntSum) + parseInt(sumYearDay.cntSum)
    pnThirdVal = calcEachNum(pnThirdVal.toString());
    //フォース(生まれ月＋年)
    let fromFourthAge = parseInt(thirdAge) + 1;
    let pnFourthRange = "[" + fromFourthAge + "歳~]";
    let pnFourthVal = parseInt(birth_month) + parseInt(birth_year);
    pnFourthVal = calcEachNum(pnFourthVal.toString());//20000913= 2000+09 = 2009 = 11 = 2
    let pinacleArr = [];
    // 各要素をオブジェクトとして初期化
    pinacleArr["pnFirst"] = {};
    pinacleArr["pnSecond"] = {};
    pinacleArr["pnThird"] = {};
    pinacleArr["pnFourth"] = {};
    pinacleArr["pnFirst"]["pnFirstRange"] = pnFirstRange;
    pinacleArr["pnFirst"]["pnFirstVal"] = pnFirstVal; //テスト：ぞろ目排除
    pinacleArr["pnSecond"]["pnSecondRange"] = pnSecondRange;
    pinacleArr["pnSecond"]["pnSecondVal"] = sumYearDay;//テスト：ぞろ目排除
    pinacleArr["pnThird"]["pnThirdRange"] = pnThirdRange;
    pinacleArr["pnThird"]["pnThirdVal"] = pnThirdVal;//テスト：ぞろ目排除
    pinacleArr["pnFourth"]["pnFourthRange"] = pnFourthRange;
    pinacleArr["pnFourth"]["pnFourthVal"] = pnFourthVal;//テスト：ぞろ目排除

    //チャレンジナンバー：助け杖
    //ファースト(生まれ日-月)[年齢=36-メイン数]
    var chFirstVal = parseInt(day) - parseInt(birth_month);
    chFirstVal = calcEachNum(Math.abs(chFirstVal).toString());
    var chFirstRange = "[0歳~" + firstAge + "歳]";

    //セカンド
    var chSeconVal = parseInt(birth_year) - parseInt(day);
    chSeconVal = calcEachNum(Math.abs(chSeconVal).toString());
    let chSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳]";

    //サード
    var chThirdVal = parseInt(chSeconVal.cntSum) - parseInt(chFirstVal.cntSum);
    chThirdVal = calcEachNum(Math.abs(chThirdVal).toString());
    let chThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳]";

    //フォース
    var chFourthVal = parseInt(birth_month) - parseInt(birth_year);
    chFourthVal = calcEachNum(Math.abs(chFourthVal).toString());
    let chFourthRange = "[" + fromFourthAge + "歳~]";
    let challengeArr = [];
    // 各要素をオブジェクトとして初期化
    challengeArr["chFirst"] = {};
    challengeArr["chSecond"] = {};
    challengeArr["chThird"] = {};
    challengeArr["chFourth"] = {};
    challengeArr["chFirst"]["chFirstVal"] = chFirstVal
    challengeArr["chFirst"]["chFirstRange"] = chFirstRange;
    challengeArr["chSecond"]["chSecondVal"] = chSeconVal
    challengeArr["chSecond"]["chSecondRange"] = chSecondRange;
    challengeArr["chThird"]["chThirdVal"] = chThirdVal
    challengeArr["chThird"]["chThirdRange"] = chThirdRange;
    challengeArr["chFourth"]["chFourthVal"] = chFourthVal
    challengeArr["chFourth"]["chFourthRange"] = chFourthRange;

    //返り値
    return {
        sumBirthYear: sumBirthYear,
        sumBirthMonth: sumBirthMonth,
        sumBirthdate: sumBirthdate,
        sumDay: sumDay,
        sumBdate: sumBdate,
        sumBirthDay: sumBirthDay, //テスト　追加
        yearSum: yearSum,
        pinacleArr: pinacleArr,
        challengeArr: challengeArr,
        graphAgeData: valuesTable_2,
    }
}

//Name⇒数値化
function convertStringToNumberWithConditions(inputString, birthdate) {
    let cntString = inputString.length;
    var conversionTable = {
        'A': '1', 'J': '1', 'S': '1',
        'B': '2', 'K': '2', 'T': '2',
        'C': '3', 'L': '3', 'U': '3',
        'D': '4', 'M': '4', 'V': '4',
        'E': '5', 'N': '5', 'W': '5',
        'F': '6', 'O': '6', 'X': '6',
        'G': '7', 'P': '7', 'Y': '7',
        'H': '8', 'Q': '8', 'Z': '8',
        'I': '9', 'R': '9'
    };

    var vowels = 'AIUEO';
    var consonants = 'BCDFGHJKLMNPQRSTVWXYZ';

    var convertedString = "";
    var vowelsCount = 0;
    var consonantsCount = 0;
    var vowelsList = "";
    var consonantsList = "";

    // 月と日を取得
    let birth_year = birthdate.substr(0, 4);//生まれ年
    let birth_month = birthdate.substr(4, 2);//生まれ月
    let day = birthdate.substr(6, 2);//生まれ日

    // 入力文字列を変換表に基づいて数字に変換
    for (var i = 0; i < inputString.length; i++) {
        var upperCaseChar = inputString[i].toUpperCase();

        if (vowels.includes(upperCaseChar)) {
            var convertedVowel = conversionTable[upperCaseChar];
            convertedString += convertedVowel;
            vowelsCount++;
            vowelsList += convertedVowel;
        } else if (consonants.includes(upperCaseChar)) {
            var convertedConsonant = conversionTable[upperCaseChar];
            convertedString += convertedConsonant;
            consonantsCount++;
            consonantsList += convertedConsonant;
        } else {
            convertedString += inputString[i];
        }
    }

    var missingNumbers = [];
    for (var num = 1; num <= 9; num++) {
        if (!convertedString.includes(num.toString())) {
            missingNumbers.push(num);
        }
    }
    var missingNumbersString = missingNumbers.join(',');
    log(convertedString);

    //ライトナンバー ローマ字を数字に変換後、全てを足して1桁になるまで足し算。ぞろ目11～99になったら計算ストップ。ローマ字を数字に変換時点で11～99の場合はそのまま出力する。
    let sumRigth = startIsDoublesNum(convertedString);

    //道：convertedString
    let sumMichi = calcEachNum(convertedString);

    //メイン数
    let sumBirthdate = mainNum(birth_year,birth_month,day);
    let sumBirthdateNum = sumBirthdate.cntSum;

    //到達
    let sumReachval = parseInt(sumBirthdateNum) + parseInt(sumMichi.cntSum);
    let sumReach = calcEachNum(sumReachval.toString());
    //母音文字列：vowelsList
    if (vowelsList == "") {
        vowelsList = "0"
    }
    let sumHeart = calcEachNum(vowelsList);
    //子音文字列：consonantsList
    if (consonantsList == "") {
        consonantsList = "0"
    }
    let sumPersona = calcEachNum(consonantsList);
    //ウイーク
    let sumCntString = calcEachNum(cntString.toString());


    var inputString = convertedString;

    var digitCounts = {};
    var exceededLimits = {};
    var limits = {
        "1": 5,
        "2": 3,
        "3": 4,
        "4": 3,
        "5": 5,
        "6": 3,
        "7": 3,
        "8": 2,
        "9": 6
    };
    // limitsに存在する数字を元にdigitCountsを初期化
    for (var digit in limits) {
        digitCounts[digit] = 0;
    }
    for (var i = 0; i < inputString.length; i++) {
        var digit = inputString[i];

        // // digitCountsの値が未定義（undefined）の場合、0を代入
        digitCounts[digit] = (digitCounts[digit] || 0) + 1;

        // if (digitCounts[digit]) {
        //     digitCounts[digit]++;
        // } else {
        //     digitCounts[digit] = 1;
        // }
        // 上限基準
        if (digitCounts[digit] >= limits[digit]) {
            exceededLimits[digit] = digitCounts[digit];
        }
    }
    var exceededLimitsString = Object.keys(exceededLimits).join(", ");

    return {
        convertedString: convertedString,
        sumRigth: sumRigth,//ライトナンバー
        sumMichi: sumMichi,//道
        sumReach: sumReach,//到達
        sumHeart: sumHeart,//ハート
        sumPersona: sumPersona,//ペルソナ
        sumCntString: sumCntString,//ウイーク
        missingNumbers: missingNumbersString,//欠落
        valCharacter: exceededLimitsString,//特性
        digitCounts: digitCounts
    };
}
//フォーディメンション用カウント(身体)
function numBody(cnt4, cnt5) {
    let cnt4Int = parseInt(cnt4);
    let cnt5Int = parseInt(cnt5);
    let cntSumVal = cnt4Int + cnt5Int;

    let cntSum = 0;
    let expression = "";
    let cntSumValStr = cntSumVal.toString();
    if (!isDoublesInArray(cntSumVal, doublesTargetArray)) {
        for (var i = 0; i < cntSumValStr.length; i++) {
            cntSum += parseInt(cntSumValStr[i]);
            expression += cntSumValStr[i]; // 式に各桁の数字を追加

            if (i < cntSumValStr.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }
    } else {
        cntSum = cntSumVal;
    }
    //ぞろ目チェック
    let cntsumStr = cntSum;
    if (!isDoublesInArray(cntSum, doublesTargetArray)) {
        while (cntSum >= 10) {
            var tempCntSum = 0;
            cntsumStr = cntSum.toString();
            for (var i = 0; i < cntsumStr.length; i++) {
                tempCntSum += parseInt(cntsumStr[i]);
                if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                    break;
                }
            }
            if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                cntSum = tempCntSum;
                break;
            } else {
                cntSum = tempCntSum;
            }
        }
    }
    let expressionStr = "4(" + cnt4Int + "),5(" + cnt5Int + ")->(" + cnt4Int + "+" + cnt5Int + ")->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
//フォーディメンション用カウント(精神)
function numMind(cnt1, cnt8) {
    let cnt1Int = parseInt(cnt1);
    let cnt8Int = parseInt(cnt8);
    let cntSumVal = cnt1Int + cnt8Int;
    let cntSum = 0;
    let expression = "";
    let cntSumValStr = cntSumVal.toString();

    if (!isDoublesInArray(cntSumVal, doublesTargetArray)) {
        for (var i = 0; i < cntSumValStr.length; i++) {
            cntSum += parseInt(cntSumValStr[i]);
            expression += cntSumValStr[i]; // 式に各桁の数字を追加

            if (i < cntSumValStr.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }
    } else {
        cntSum = cntSumVal;
    }
    //ぞろ目チェック
    let cntsumStr = cntSum;
    if (!isDoublesInArray(cntSum, doublesTargetArray)) {
        while (cntSum >= 10) {
            var tempCntSum = 0;
            cntsumStr = cntSum.toString();
            for (var i = 0; i < cntsumStr.length; i++) {
                tempCntSum += parseInt(cntsumStr[i]);
                if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                    break;
                }
            }
            if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                cntSum = tempCntSum;
                break;
            } else {
                cntSum = tempCntSum;
            }
        }
    }
    let expressionStr = "1(" + cnt1Int + "),8(" + cnt8Int + ")->(" + cnt1Int + "+" + cnt8Int + ")->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
//フォーディメンション用カウント(感情)
function numEmotion(cnt2, cnt3, cnt6) {
    let cnt2Int = parseInt(cnt2);
    let cnt3Int = parseInt(cnt3);
    let cnt6Int = parseInt(cnt6);
    let cntSumVal = cnt2Int + cnt3Int + cnt6Int;
    let cntSum = 0;
    let expression = "";
    let cntSumValStr = cntSumVal.toString();
    if (!isDoublesInArray(cntSumVal, doublesTargetArray)) {
        for (var i = 0; i < cntSumValStr.length; i++) {
            cntSum += parseInt(cntSumValStr[i]);
            expression += cntSumValStr[i]; // 式に各桁の数字を追加

            if (i < cntSumValStr.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }
    } else {
        cntSum = cntSumVal;
    }
    //ぞろ目チェック
    let cntsumStr = cntSum;
    if (!isDoublesInArray(cntSum, doublesTargetArray)) {
        while (cntSum >= 10) {
            var tempCntSum = 0;
            cntsumStr = cntSum.toString();
            for (var i = 0; i < cntsumStr.length; i++) {
                tempCntSum += parseInt(cntsumStr[i]);
                if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                    break;
                }
            }
            if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                cntSum = tempCntSum;
                break;
            } else {
                cntSum = tempCntSum;
            }
        }
    }
    let expressionStr = "2(" + cnt2Int + "),3(" + cnt3Int + "),6(" + cnt6Int + ")->(" + cnt2Int + "+" + cnt3Int + "+" + cnt6Int + ")->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
//フォーディメンション用カウント(直感)
function numIntuition(cnt7, cnt9) {
    let cnt7Int = parseInt(cnt7);
    let cnt9Int = parseInt(cnt9);
    let cntSumVal = cnt7Int + cnt9Int;
    let cntSum = 0;
    let expression = "";
    let cntSumValStr = cntSumVal.toString();
    if (!isDoublesInArray(cntSumVal, doublesTargetArray)) {
        for (var i = 0; i < cntSumValStr.length; i++) {
            cntSum += parseInt(cntSumValStr[i]);
            expression += cntSumValStr[i]; // 式に各桁の数字を追加

            if (i < cntSumValStr.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }
    } else {
        cntSum = cntSumVal;
    }
    //ぞろ目チェック
    let cntsumStr = cntSum;
    if (!isDoublesInArray(cntSum, doublesTargetArray)) {
        while (cntSum >= 10) {
            var tempCntSum = 0;
            cntsumStr = cntSum.toString();
            for (var i = 0; i < cntsumStr.length; i++) {
                tempCntSum += parseInt(cntsumStr[i]);
                if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                    break;
                }
            }
            if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                cntSum = tempCntSum;
                break;
            } else {
                cntSum = tempCntSum;
            }
        }
    }
    let expressionStr = "7(" + cnt7Int + "),9(" + cnt9Int + ")->(" + cnt7Int + "+" + cnt9Int + ")->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}