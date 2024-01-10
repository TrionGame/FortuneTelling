//▼ぞろ目チェック
let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
function isDoublesInArray(inputValue, doublesTargetArray) {
    return $.inArray(parseInt(inputValue), doublesTargetArray) !== -1;
}
let inputValue = "32";
let res = isDoublesInArray(inputValue, doublesTargetArray);
// console.log(res);

//▼入力値カウント(1+2+3+4...)
function calcEachNum(num) {
    let cntSum = 0;
    let expression = "";
    for (var i = 0; i < num.length; i++) {
        cntSum += parseInt(num[i]);
        expression += num[i]; // 式に各桁の数字を追加

        if (i < num.length - 1) {
            expression += " + "; // 最後の桁以外に "+" を追加
        }
    }
    //ぞろ目チェック
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    console.log("ぞろ目チェック" + cntSum);
    if (!isDoublesInArray(cntSum, doublesTargetArray)) {
        while (cntSum >= 10) {
            var tempCntSum = 0;
            var cntsumStr = cntSum.toString();
            for (var i = 0; i < cntsumStr.length; i++) {
                    tempCntSum += parseInt(cntsumStr[i]);
                    console.log("属"+tempCntSum);
                    if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                        console.log("一次ブレイク");
                        break;
                    }
            }
            if (isDoublesInArray(tempCntSum, doublesTargetArray)) {
                console.log("二次ブレイク");
                cntSum = tempCntSum;
                break;
            }else{
                cntSum = tempCntSum;
            }
            // cntSum = tempCntSum;
        }
    }
    let expressionStr = "(" + expression + ")->" + tempCntSum + "->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
var result = calcEachNum("20150607");
// console.log("結果：" + result.cntSum);
// console.log("(式)：" + result.expression);


// 生年月日から算出(ベース/メイン/チャレンジ/イヤーナンバー)
function calculateDigits(birthdate) {
    // 月と日を取得
    let day = birthdate.substr(6, 2);
    let b_date = birthdate.substr(4, 4);

    //メイン
    // var sum = 0;
    // for (var i = 0; i < birthdate.length; i++) {
    //     sum += parseInt(birthdate[i]);
    // }
    // while (sum >= 10) {
    //     var tempSum = 0;
    //     var sumStr = sum.toString();
    //     for (var i = 0; i < sumStr.length; i++) {
    //         tempSum += parseInt(sumStr[i]);
    //     }
    //     sum = tempSum;
    // }
    // console.log("メイン：" + sum);
    let sumBirthdate = calcEachNum(birthdate);
    console.log("newメイン：" + sumBirthdate.cntSum + "　" + sumBirthdate.expression);
    // $("#valMain").text(sumBirthdate.cntSum);
    //ベース(日)
    // let daySum = 0;
    // for (var i = 0; i < day.length; i++) {
    //     daySum += parseInt(day[i]);
    // }
    // while (daySum >= 10) {
    //     var tempDaySum = 0;
    //     var daysumStr = daySum.toString();
    //     for (var i = 0; i < daysumStr.length; i++) {
    //         tempDaySum += parseInt(daysumStr[i]);
    //     }
    //     daySum = tempDaySum;
    // }
    // console.log("ベース：" + daySum);
    let sumDay = calcEachNum(day);
    console.log("newベース：" + sumDay.cntSum + "　" + sumDay.expression);
    // $("#valBase").text(sumDay.cntSum);


    //チャレンジ(月日)
    // let dateSum = 0;
    // for (var i = 0; i < b_date.length; i++) {
    //     dateSum += parseInt(b_date[i]);
    // }
    // while (dateSum >= 10) {
    //     var tempDateSum = 0;
    //     var datesumStr = dateSum.toString();
    //     for (var i = 0; i < datesumStr.length; i++) {
    //         tempDateSum += parseInt(datesumStr[i]);
    //     }
    //     dateSum = tempDateSum;
    // }
    // console.log("チャレンジ：" + dateSum);
    let sumBdate = calcEachNum(b_date);
    console.log("newメイン：" + sumBdate.cntSum + "　" + sumBdate.expression);
    // $("#valChal").text(sumBdate.cntSum);


    //イヤーナンバー
    let yearSum = 0;
    var currentYear = new Date().getFullYear();
    let yearNum = parseInt(currentYear) + parseInt(b_date);
    yearNum = yearNum.toString();
    // console.log("year計算：" + yearNum);
    // console.log("文字数：" + yearNum.length);
    for (var i = 0; i < yearNum.length; i++) {
        yearSum += parseInt(yearNum[i]);
    }
    // console.log(yearSum);
    while (yearSum >= 10) {
        var tempYearNumSum = 0;
        var yearNumsumStr = yearSum.toString();
        // console.log(yearNumsumStr);
        for (var i = 0; i < yearNumsumStr.length; i++) {
            tempYearNumSum += parseInt(yearNumsumStr[i]);
        }
        yearSum = tempYearNumSum;
    }
    // console.log("イヤーナンバー：" + yearSum);
    return {
        // sum: sum,
        sumBirthdate: sumBirthdate,
        sumDay: sumDay,
        sumBdate: sumBdate,
        yearSum: yearSum
    }
}

//Name⇒数値化
function convertStringToNumberWithConditions(inputString,birthdate) {
    let cntString = inputString.length;
    console.log("GGG" + cntString);
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

    var vowels = 'AIUEO'; // 母音
    var consonants = 'BCDFGHJKLMNPQRSTVWXYZ'; // 子音

    var convertedString = "";
    var vowelsCount = 0;
    var consonantsCount = 0;
    var vowelsList = "";
    var consonantsList = "";
    // var vowelsList = [];
    // var consonantsList = [];

    // 入力文字列を変換表に基づいて数字に変換
    for (var i = 0; i < inputString.length; i++) {
        var upperCaseChar = inputString[i].toUpperCase();

        if (vowels.includes(upperCaseChar)) {
            var convertedVowel = conversionTable[upperCaseChar];
            convertedString += convertedVowel;
            vowelsCount++;
            // vowelsList.push(convertedVowel);
            vowelsList += convertedVowel;
        } else if (consonants.includes(upperCaseChar)) {
            var convertedConsonant = conversionTable[upperCaseChar];
            convertedString += convertedConsonant;
            consonantsCount++;
            // consonantsList.push(convertedConsonant);
            consonantsList += convertedConsonant;
        } else {
            // 変換表にない文字はそのまま追加
            convertedString += inputString[i];
        }
    }

    var missingNumbers = [];
    for (var num = 1; num <= 9; num++) {
        if (!convertedString.includes(num.toString())) {
            missingNumbers.push(num);
        }
    }
    // ピリオドで区切った文字列に変換
    var missingNumbersString = missingNumbers.join('.');

    //道：convertedString
    let sumMichi = calcEachNum(convertedString);
    console.log("道：" + sumMichi.cntSum + "　" + sumMichi.expression);
    // $("#valBase").text(sumDay.cntSum);

    //メイン数
    let sumBirthdate = calcEachNum(birthdate);
    console.log("newメイン：" + sumBirthdate.cntSum + "　" + sumBirthdate.expression);
    let sumBirthdateNum = sumBirthdate.cntSum;

    //到達
    let sumReachval = parseInt(sumBirthdateNum) + parseInt(sumMichi.cntSum);  
    let sumReach = calcEachNum(sumReachval.toString());

    //母音数(ハート)：vowelsCount
    //母音文字列：vowelsList
    let sumHeart = calcEachNum(vowelsList);
    console.log("ハート：" + sumHeart.cntSum + "　" + sumHeart.expression);
    //子音数：consonantsCount
    //子音文字列：consonantsList
    let sumPersona = calcEachNum(consonantsList);
    console.log("ペルソナ：" + sumPersona.cntSum + "　" + sumPersona.expression);
    //ウイーク
    let sumCntString = calcEachNum(cntString.toString());
    console.log("ウイーク：" + sumCntString.cntSum + "　" + sumCntString.expression);
    //欠陥：missingNumbers()
    return {
        convertedString: convertedString,
        sumMichi: sumMichi,//道
        sumReach: sumReach,//到達
        sumHeart: sumHeart,//ハート
        sumPersona: sumPersona,//ペルソナ
        sumCntString: sumCntString,//ウイーク
        missingNumbers: missingNumbersString,//欠落
        // missingNumbers: missingNumbersString//特性
    };
}

// var inputString = "TSURUMICHIHO";
// var result = convertStringToNumberWithConditions(inputString);
// console.log(result.convertedString); // 出力："213934938986"
// console.log(result.vowelsCount); // 出力：5
// console.log(result.vowelsList); // 出力：["3", "3", "9", "9", "6"]
// console.log(result.consonantsCount); // 出力：7
// console.log(result.consonantsList); // 出力：["2", "1", "9", "4", "3", "8", "8"]
// console.log(result.missingNumbers); // 出力：[5, 7]  