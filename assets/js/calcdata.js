//▼ぞろ目チェック
let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
function isDoublesInArray(inputValue, doublesTargetArray) {
    return $.inArray(parseInt(inputValue), doublesTargetArray) !== -1;
}
let inputValue = "32";
let res = isDoublesInArray(inputValue, doublesTargetArray);

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
    let expressionStr = "(" + expression + ")->" + cntsumStr + "->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}


// 生年月日から算出(ベース/メイン/チャレンジ/イヤーナンバー)
function calculateDigits(birthdate) {
    // 月と日を取得
    let day = birthdate.substr(6, 2);
    let b_date = birthdate.substr(4, 4);

    let sumBirthdate = calcEachNum(birthdate);

    let sumDay = calcEachNum(day);

    let sumBdate = calcEachNum(b_date);


    //イヤーナンバー
    let yearSum = 0;
    var currentYear = new Date().getFullYear();
    let yearNum = parseInt(currentYear) + parseInt(b_date);
    yearNum = yearNum.toString();
    for (var i = 0; i < yearNum.length; i++) {
        yearSum += parseInt(yearNum[i]);
    }
    while (yearSum >= 10) {
        var tempYearNumSum = 0;
        var yearNumsumStr = yearSum.toString();
        for (var i = 0; i < yearNumsumStr.length; i++) {
            tempYearNumSum += parseInt(yearNumsumStr[i]);
        }
        yearSum = tempYearNumSum;
    }
    return {
        // sum: sum,
        sumBirthdate: sumBirthdate,
        sumDay: sumDay,
        sumBdate: sumBdate,
        yearSum: yearSum
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

    //道：convertedString
    let sumMichi = calcEachNum(convertedString);

    //メイン数
    let sumBirthdate = calcEachNum(birthdate);
    let sumBirthdateNum = sumBirthdate.cntSum;

    //到達
    let sumReachval = parseInt(sumBirthdateNum) + parseInt(sumMichi.cntSum);
    let sumReach = calcEachNum(sumReachval.toString());
    //母音文字列：vowelsList
    let sumHeart = calcEachNum(vowelsList);
    //子音文字列：consonantsList
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
    console.log(digitCounts);
    var exceededLimitsString = Object.keys(exceededLimits).join(", ");

    return {
        convertedString: convertedString,
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