<<<<<<< HEAD
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
    // let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    let doublesTargetArray = [11, 22, 33];

    //引数が８桁(生年月日の場合)
    if (num.length == 8) {
        let birth_year = num.substr(0, 4);//生まれ年
        let birth_month = num.substr(4, 2);//生まれ月
        let birth_day = num.substr(6, 2);//生まれ日

        //年
        for (var i = 0; i < birth_year.length; i++) {
            cntSum += parseInt(birth_year[i]);
            expression += birth_year[i]; // 式に各桁の数字を追加

            if (i < birth_year.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }

        //月
        if (isDoublesInArray(birth_month, doublesTargetArray)) {
            cntSum += parseInt(birth_month);
            expression += "+" + birth_month;
        } else {
            for (var i = 0; i < birth_month.length; i++) {
                cntSum += parseInt(birth_month[i]);
                expression += birth_month[i]; // 式に各桁の数字を追加

                if (i < birth_month.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }

        if (isDoublesInArray(birth_day, doublesTargetArray)) {
            cntSum += parseInt(birth_day);
            expression += "+" + birth_day;
        } else {
            for (var i = 0; i < birth_day.length; i++) {
                cntSum += parseInt(birth_day[i]);
                expression += birth_day[i]; // 式に各桁の数字を追加

                if (i < birth_day.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }
        let cntSumString = cntSum.toLocaleString();
        // cntSum = 0;
        // for (var i = 0; i < cntSumString.length; i++) {
        //     cntSum += parseInt(cntSumString[i]);
        // }

        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }


    }
    else if (num.length == 4) {//４桁の場合(誕生月日)
        let birth_month = num.substr(0, 2);//生まれ月
        let birth_day = num.substr(2, 2);//生まれ日

        //月
        if (isDoublesInArray(birth_month, doublesTargetArray)) {
            cntSum += parseInt(birth_month);
            expression += "+" + birth_month;
            console.log("4keta1");
        } else {
            for (var i = 0; i < birth_month.length; i++) {
                cntSum += parseInt(birth_month[i]);
                expression += birth_month[i]; // 式に各桁の数字を追加

                if (i < birth_month.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }

        if (isDoublesInArray(birth_day, doublesTargetArray)) {
            cntSum += parseInt(birth_day);
            expression += "+" + birth_day;
            console.log("4keta2");
        } else {
            for (var i = 0; i < birth_day.length; i++) {
                cntSum += parseInt(birth_day[i]);
                expression += birth_day[i]; // 式に各桁の数字を追加

                if (i < birth_day.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }
        let cntSumString = cntSum.toLocaleString();
        // console.log(cntSumString);
        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }
    } else if (num.length == 2) {//2桁の場合(月or日)
        let birth_data = num.substr(0, 2);//生まれ月

        //月
        if (isDoublesInArray(birth_data, doublesTargetArray)) {
            cntSum += parseInt(birth_data);
            expression += "+" + birth_data;
        } else {
            for (var i = 0; i < birth_data.length; i++) {
                cntSum += parseInt(birth_data[i]);
                expression += birth_data[i]; // 式に各桁の数字を追加

                if (i < birth_data.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }
        let cntSumString = cntSum.toLocaleString();
        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }
    }
    else {
        // console.log("name=>Num");
        for (var i = 0; i < num.length; i++) {
            cntSum += parseInt(num[i]);
            if (num[i] == 0) {
                continue;
            }
            expression += num[i]; // 式に各桁の数字を追加

            if (i < num.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }

        let cntSumString = cntSum.toLocaleString();
        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }
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
    let expressionStr = "(" + expression + ")->" + cntsumStr + "->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
function calcEachNum2(num) {
    let cntSum = 0;
    let expression = "";
    for (var i = 0; i < num.length; i++) {
        cntSum += parseInt(num[i]);
        if (num[i] == 0) {
            continue;
        }
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
    // let expressionStr = "(" + expression + ")->" + cntsumStr + "->" + cntSum;
    let expressionStr = num + "->" + cntsumStr + "->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}



// 生年月日から算出(ベース/メイン/チャレンジ/イヤーナンバー)
function calculateDigits(birthdate) {
    // 月と日を取得
    let birth_year = birthdate.substr(0, 4);//生まれ年
    let birth_month = birthdate.substr(4, 2);//生まれ月
    let day = birthdate.substr(6, 2);//生まれ日
    let b_date = birthdate.substr(4, 4);//生まれ月日

    let sumBirthdate = calcEachNum(birthdate);//メイン数

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
        11: ["0~25歳", "26~52歳", "53歳~"],
        22: ["0~32歳", "33~59歳", "60歳~"],
        33: ["0~30歳", "31~57歳", "58歳~"],
    };
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
        11: ["25", "26", "52", "53"],
        22: ["32", "33", "59", "60"],
        33: ["30", "31", "57", "58"],
    };

    var rangeFirstVal = valuesTable[sumBirthdate.cntSum][0];
    var rangeSecondVal = valuesTable[sumBirthdate.cntSum][1];
    var rangeThirdVal = valuesTable[sumBirthdate.cntSum][2];
    let sumBirthMonth = calcEachNum(birth_month);
    let sumBirthYear = calcEachNum(birth_year);
    sumBirthMonth["rangeFirstVal"] = rangeFirstVal;
    sumDay["rangeSecondVal"] = rangeSecondVal;
    sumBirthYear["rangeThirdVal"] = rangeThirdVal;


    //▼ピナクルナンバー:登り山
    // let birth_year = birthdate.substr(0, 4);//生まれ年
    // let birth_month = birthdate.substr(4, 2);//生まれ月
    // let day = birthdate.substr(6, 2);//生まれ日
    //ファースト(生まれ月＋日)[年齢=36-メイン数]
    let firstAge = 36 - parseInt(sumBirthdate.cntSum);
    let sumMonthDay = parseInt(birth_month) + parseInt(day);
    let pnFirstVal = calcEachNum2(sumMonthDay.toString());
    // var pnFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳](" + parseInt(birth_month) + "+" + parseInt(day) + ")->";
    // var pnFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳]";
    var pnFirstRange = "[0歳~" + firstAge + "歳]";

    //セカンド(生まれ日+生まれ年)[年齢=ファースト+9]
    let sumYearDay = parseInt(birth_year) + parseInt(day);
    sumYearDay = calcEachNum2(sumYearDay.toString());
    let secondAge = firstAge + 9;
    let fromSecondAge = parseInt(firstAge) + 1;
    // let pnSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳](" + parseInt(day) + "+" + parseInt(birth_year) + ")->";
    let pnSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳]";

    //サード(ファースト＋セカンド)
    let thirdAge = secondAge + 9;
    let fromThirdAge = parseInt(secondAge) + 1;
    // let pnThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳](" + parseInt(pnFirstVal.cntSum) + "+" + parseInt(sumYearDay.cntSum) + ")->";
    let pnThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳]";
    let pnThirdVal = parseInt(sumBdate.cntSum) + parseInt(sumYearDay.cntSum)
    pnThirdVal = calcEachNum2(pnThirdVal.toString());
    //フォース(生まれ月＋年)
    let fromFourthAge = parseInt(thirdAge) + 1;
    // let pnFourthRange = "[" + fromFourthAge + "歳~](" + parseInt(birth_month) + "+" + parseInt(birth_year) + ")->";
    let pnFourthRange = "[" + fromFourthAge + "歳~]";
    let pnFourthVal = parseInt(birth_month) + parseInt(birth_year);
    pnFourthVal = calcEachNum2(pnFourthVal.toString());
    let pinacleArr = [];
    // 各要素をオブジェクトとして初期化
    pinacleArr["pnFirst"] = {};
    pinacleArr["pnSecond"] = {};
    pinacleArr["pnThird"] = {};
    pinacleArr["pnFourth"] = {};
    pinacleArr["pnFirst"]["pnFirstRange"] = pnFirstRange;
    pinacleArr["pnFirst"]["pnFirstVal"] = pnFirstVal;
    pinacleArr["pnSecond"]["pnSecondRange"] = pnSecondRange;
    pinacleArr["pnSecond"]["pnSecondVal"] = sumYearDay;
    pinacleArr["pnThird"]["pnThirdRange"] = pnThirdRange;
    pinacleArr["pnThird"]["pnThirdVal"] = pnThirdVal;
    pinacleArr["pnFourth"]["pnFourthRange"] = pnFourthRange;
    pinacleArr["pnFourth"]["pnFourthVal"] = pnFourthVal;

    //チャレンジナンバー：助け杖
    //ファースト(生まれ日-月)[年齢=36-メイン数]
    var chFirstVal = parseInt(day) - parseInt(birth_month);
    chFirstVal = calcEachNum2(Math.abs(chFirstVal).toString());
    // var chFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳](" + parseInt(day) + "-" + parseInt(birth_month) + ")->";
    // var chFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳]";
    var chFirstRange = "[0歳~" + firstAge + "歳]";

    //セカンド
    var chSeconVal = parseInt(birth_year) - parseInt(day);
    chSeconVal = calcEachNum2(Math.abs(chSeconVal).toString());
    // let chSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳](" + parseInt(birth_year) + "-" + parseInt(day) + ")->";
    let chSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳]";

    //サード
    var chThirdVal = parseInt(chSeconVal.cntSum) - parseInt(chFirstVal.cntSum);
    chThirdVal = calcEachNum2(Math.abs(chThirdVal).toString());
    // let chThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳](" + parseInt(chSeconVal.cntSum) + "-" + parseInt(chFirstVal.cntSum) + ")->";
    let chThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳]";

    //フォース
    var chFourthVal = parseInt(birth_month) - parseInt(birth_year);
    chFourthVal = calcEachNum2(Math.abs(chFourthVal).toString());
    // let chFourthRange = "[" + fromFourthAge + "歳~](" + parseInt(birth_month) + "-" + parseInt(birth_year) + ")->";
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
        yearSum: yearSum,
        pinacleArr: pinacleArr,
        challengeArr: challengeArr,
        graphAgeData:valuesTable_2,
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
//フォーディメンション用カウント(身体)
function numBody(cnt4, cnt5) {
    let cnt4Int = parseInt(cnt4);
    let cnt5Int = parseInt(cnt5);
    let cntSumVal = cnt4Int + cnt5Int;

    let cntSum = 0;
    let expression = "";
    let cntSumValStr = cntSumVal.toString();
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    if (!isDoublesInArray(cntSumVal, doublesTargetArray)) {
        for (var i = 0; i < cntSumValStr.length; i++) {
            cntSum += parseInt(cntSumValStr[i]);
            expression += cntSumValStr[i]; // 式に各桁の数字を追加
    
            if (i < cntSumValStr.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }
    }else{
        cntSum = cntSumVal;
    }
    //ぞろ目チェック
    let cntsumStr = cntSum;
    console.log(cntSum);
    console.log(doublesTargetArray);
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
    // let expressionStr = "4(" + cnt4Int+"),5(" + cnt5Int + ")->(" + expression + ")->" + cntsumStr + "->" + cntSum;
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
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
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
    }else{
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
    // let expressionStr = "4(" + cnt4Int+"),5(" + cnt5Int + ")->(" + expression + ")->" + cntsumStr + "->" + cntSum;
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
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
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
    }else{
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
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
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
    }else{
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
    // let expressionStr = "4(" + cnt4Int+"),5(" + cnt5Int + ")->(" + expression + ")->" + cntsumStr + "->" + cntSum;
    let expressionStr = "7(" + cnt7Int + "),9(" + cnt9Int + ")->(" + cnt7Int + "+" + cnt9Int + ")->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
=======
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
    // let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    let doublesTargetArray = [11, 22, 33];

    //引数が８桁(生年月日の場合)
    if (num.length == 8) {
        let birth_year = num.substr(0, 4);//生まれ年
        let birth_month = num.substr(4, 2);//生まれ月
        let birth_day = num.substr(6, 2);//生まれ日

        //年
        for (var i = 0; i < birth_year.length; i++) {
            cntSum += parseInt(birth_year[i]);
            expression += birth_year[i]; // 式に各桁の数字を追加

            if (i < birth_year.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }

        //月
        if (isDoublesInArray(birth_month, doublesTargetArray)) {
            cntSum += parseInt(birth_month);
            expression += "+" + birth_month;
        } else {
            for (var i = 0; i < birth_month.length; i++) {
                cntSum += parseInt(birth_month[i]);
                expression += birth_month[i]; // 式に各桁の数字を追加

                if (i < birth_month.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }

        if (isDoublesInArray(birth_day, doublesTargetArray)) {
            cntSum += parseInt(birth_day);
            expression += "+" + birth_day;
        } else {
            for (var i = 0; i < birth_day.length; i++) {
                cntSum += parseInt(birth_day[i]);
                expression += birth_day[i]; // 式に各桁の数字を追加

                if (i < birth_day.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }
        let cntSumString = cntSum.toLocaleString();
        // cntSum = 0;
        // for (var i = 0; i < cntSumString.length; i++) {
        //     cntSum += parseInt(cntSumString[i]);
        // }

        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }


    }
    else if (num.length == 4) {//４桁の場合(誕生月日)
        let birth_month = num.substr(0, 2);//生まれ月
        let birth_day = num.substr(2, 2);//生まれ日

        //月
        if (isDoublesInArray(birth_month, doublesTargetArray)) {
            cntSum += parseInt(birth_month);
            expression += "+" + birth_month;
            console.log("4keta1");
        } else {
            for (var i = 0; i < birth_month.length; i++) {
                cntSum += parseInt(birth_month[i]);
                expression += birth_month[i]; // 式に各桁の数字を追加

                if (i < birth_month.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }

        if (isDoublesInArray(birth_day, doublesTargetArray)) {
            cntSum += parseInt(birth_day);
            expression += "+" + birth_day;
            console.log("4keta2");
        } else {
            for (var i = 0; i < birth_day.length; i++) {
                cntSum += parseInt(birth_day[i]);
                expression += birth_day[i]; // 式に各桁の数字を追加

                if (i < birth_day.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }
        let cntSumString = cntSum.toLocaleString();
        // console.log(cntSumString);
        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }
    } else if (num.length == 2) {//2桁の場合(月or日)
        let birth_data = num.substr(0, 2);//生まれ月

        //月
        if (isDoublesInArray(birth_data, doublesTargetArray)) {
            cntSum += parseInt(birth_data);
            expression += "+" + birth_data;
        } else {
            for (var i = 0; i < birth_data.length; i++) {
                cntSum += parseInt(birth_data[i]);
                expression += birth_data[i]; // 式に各桁の数字を追加

                if (i < birth_data.length - 1) {
                    expression += " + "; // 最後の桁以外に "+" を追加
                }
            }
        }
        let cntSumString = cntSum.toLocaleString();
        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }
    }
    else {
        // console.log("name=>Num");
        for (var i = 0; i < num.length; i++) {
            cntSum += parseInt(num[i]);
            if (num[i] == 0) {
                continue;
            }
            expression += num[i]; // 式に各桁の数字を追加

            if (i < num.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }

        let cntSumString = cntSum.toLocaleString();
        cntSum = 0;
        if (!isDoublesInArray(cntSumString, doublesTargetArray)) {
            for (var i = 0; i < cntSumString.length; i++) {
                cntSum += parseInt(cntSumString[i]);
            }

        } else {
            cntSum = cntSumString;
        }
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
    let expressionStr = "(" + expression + ")->" + cntsumStr + "->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}
function calcEachNum2(num) {
    let cntSum = 0;
    let expression = "";
    for (var i = 0; i < num.length; i++) {
        cntSum += parseInt(num[i]);
        if (num[i] == 0) {
            continue;
        }
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
    // let expressionStr = "(" + expression + ")->" + cntsumStr + "->" + cntSum;
    let expressionStr = num + "->" + cntsumStr + "->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
}



// 生年月日から算出(ベース/メイン/チャレンジ/イヤーナンバー)
function calculateDigits(birthdate) {
    // 月と日を取得
    let birth_year = birthdate.substr(0, 4);//生まれ年
    let birth_month = birthdate.substr(4, 2);//生まれ月
    let day = birthdate.substr(6, 2);//生まれ日
    let b_date = birthdate.substr(4, 4);//生まれ月日

    let sumBirthdate = calcEachNum(birthdate);//メイン数

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
        11: ["0~25歳", "26~52歳", "53歳~"],
        22: ["0~32歳", "33~59歳", "60歳~"],
        33: ["0~30歳", "31~57歳", "58歳~"],
    };
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
        11: ["25", "26", "52", "53"],
        22: ["32", "33", "59", "60"],
        33: ["30", "31", "57", "58"],
    };

    var rangeFirstVal = valuesTable[sumBirthdate.cntSum][0];
    var rangeSecondVal = valuesTable[sumBirthdate.cntSum][1];
    var rangeThirdVal = valuesTable[sumBirthdate.cntSum][2];
    let sumBirthMonth = calcEachNum(birth_month);
    let sumBirthYear = calcEachNum(birth_year);
    sumBirthMonth["rangeFirstVal"] = rangeFirstVal;
    sumDay["rangeSecondVal"] = rangeSecondVal;
    sumBirthYear["rangeThirdVal"] = rangeThirdVal;


    //▼ピナクルナンバー:登り山
    // let birth_year = birthdate.substr(0, 4);//生まれ年
    // let birth_month = birthdate.substr(4, 2);//生まれ月
    // let day = birthdate.substr(6, 2);//生まれ日
    //ファースト(生まれ月＋日)[年齢=36-メイン数]
    let firstAge = 36 - parseInt(sumBirthdate.cntSum);
    let sumMonthDay = parseInt(birth_month) + parseInt(day);
    let pnFirstVal = calcEachNum2(sumMonthDay.toString());
    // var pnFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳](" + parseInt(birth_month) + "+" + parseInt(day) + ")->";
    // var pnFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳]";
    var pnFirstRange = "[0歳~" + firstAge + "歳]";

    //セカンド(生まれ日+生まれ年)[年齢=ファースト+9]
    let sumYearDay = parseInt(birth_year) + parseInt(day);
    sumYearDay = calcEachNum2(sumYearDay.toString());
    let secondAge = firstAge + 9;
    let fromSecondAge = parseInt(firstAge) + 1;
    // let pnSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳](" + parseInt(day) + "+" + parseInt(birth_year) + ")->";
    let pnSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳]";

    //サード(ファースト＋セカンド)
    let thirdAge = secondAge + 9;
    let fromThirdAge = parseInt(secondAge) + 1;
    // let pnThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳](" + parseInt(pnFirstVal.cntSum) + "+" + parseInt(sumYearDay.cntSum) + ")->";
    let pnThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳]";
    let pnThirdVal = parseInt(sumBdate.cntSum) + parseInt(sumYearDay.cntSum)
    pnThirdVal = calcEachNum2(pnThirdVal.toString());
    //フォース(生まれ月＋年)
    let fromFourthAge = parseInt(thirdAge) + 1;
    // let pnFourthRange = "[" + fromFourthAge + "歳~](" + parseInt(birth_month) + "+" + parseInt(birth_year) + ")->";
    let pnFourthRange = "[" + fromFourthAge + "歳~]";
    let pnFourthVal = parseInt(birth_month) + parseInt(birth_year);
    pnFourthVal = calcEachNum2(pnFourthVal.toString());
    let pinacleArr = [];
    // 各要素をオブジェクトとして初期化
    pinacleArr["pnFirst"] = {};
    pinacleArr["pnSecond"] = {};
    pinacleArr["pnThird"] = {};
    pinacleArr["pnFourth"] = {};
    pinacleArr["pnFirst"]["pnFirstRange"] = pnFirstRange;
    pinacleArr["pnFirst"]["pnFirstVal"] = pnFirstVal;
    pinacleArr["pnSecond"]["pnSecondRange"] = pnSecondRange;
    pinacleArr["pnSecond"]["pnSecondVal"] = sumYearDay;
    pinacleArr["pnThird"]["pnThirdRange"] = pnThirdRange;
    pinacleArr["pnThird"]["pnThirdVal"] = pnThirdVal;
    pinacleArr["pnFourth"]["pnFourthRange"] = pnFourthRange;
    pinacleArr["pnFourth"]["pnFourthVal"] = pnFourthVal;

    //チャレンジナンバー：助け杖
    //ファースト(生まれ日-月)[年齢=36-メイン数]
    var chFirstVal = parseInt(day) - parseInt(birth_month);
    chFirstVal = calcEachNum2(Math.abs(chFirstVal).toString());
    // var chFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳](" + parseInt(day) + "-" + parseInt(birth_month) + ")->";
    // var chFirstRange = "36-" + parseInt(sumBirthdate.cntSum) + "=" + firstAge + "[0歳~" + firstAge + "歳]";
    var chFirstRange = "[0歳~" + firstAge + "歳]";

    //セカンド
    var chSeconVal = parseInt(birth_year) - parseInt(day);
    chSeconVal = calcEachNum2(Math.abs(chSeconVal).toString());
    // let chSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳](" + parseInt(birth_year) + "-" + parseInt(day) + ")->";
    let chSecondRange = "[" + fromSecondAge + "歳~" + secondAge + "歳]";

    //サード
    var chThirdVal = parseInt(chSeconVal.cntSum) - parseInt(chFirstVal.cntSum);
    chThirdVal = calcEachNum2(Math.abs(chThirdVal).toString());
    // let chThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳](" + parseInt(chSeconVal.cntSum) + "-" + parseInt(chFirstVal.cntSum) + ")->";
    let chThirdRange = "[" + fromThirdAge + "歳~" + thirdAge + "歳]";

    //フォース
    var chFourthVal = parseInt(birth_month) - parseInt(birth_year);
    chFourthVal = calcEachNum2(Math.abs(chFourthVal).toString());
    // let chFourthRange = "[" + fromFourthAge + "歳~](" + parseInt(birth_month) + "-" + parseInt(birth_year) + ")->";
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
        yearSum: yearSum,
        pinacleArr: pinacleArr,
        challengeArr: challengeArr,
        graphAgeData:valuesTable_2,
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
//フォーディメンション用カウント(身体)
function numBody(cnt4, cnt5) {
    let cnt4Int = parseInt(cnt4);
    let cnt5Int = parseInt(cnt5);
    let cntSumVal = cnt4Int + cnt5Int;

    let cntSum = 0;
    let expression = "";
    let cntSumValStr = cntSumVal.toString();
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
    if (!isDoublesInArray(cntSumVal, doublesTargetArray)) {
        for (var i = 0; i < cntSumValStr.length; i++) {
            cntSum += parseInt(cntSumValStr[i]);
            expression += cntSumValStr[i]; // 式に各桁の数字を追加
    
            if (i < cntSumValStr.length - 1) {
                expression += " + "; // 最後の桁以外に "+" を追加
            }
        }
    }else{
        cntSum = cntSumVal;
    }
    //ぞろ目チェック
    let cntsumStr = cntSum;
    console.log(cntSum);
    console.log(doublesTargetArray);
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
    // let expressionStr = "4(" + cnt4Int+"),5(" + cnt5Int + ")->(" + expression + ")->" + cntsumStr + "->" + cntSum;
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
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
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
    }else{
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
    // let expressionStr = "4(" + cnt4Int+"),5(" + cnt5Int + ")->(" + expression + ")->" + cntsumStr + "->" + cntSum;
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
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
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
    }else{
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
    let doublesTargetArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
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
    }else{
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
    // let expressionStr = "4(" + cnt4Int+"),5(" + cnt5Int + ")->(" + expression + ")->" + cntsumStr + "->" + cntSum;
    let expressionStr = "7(" + cnt7Int + "),9(" + cnt9Int + ")->(" + cnt7Int + "+" + cnt9Int + ")->" + cntSum;
    return {
        cntSum: cntSum,
        expression: expressionStr,
    }
>>>>>>> 0f8dfb3b9400dea30437e79d84a8a927df4b27d9
}