$(document).ready(function () {
    $('.popup-trigger').click(function () {
        // ポップアップを表示
        $('#popupOverlay').fadeIn();
    });
    $('#popupOverlay').click(function (event) {
        // クリックされた要素がポップアップ自体でない場合、ポップアップを非表示
        if (event.target.id === 'popupOverlay') {
            $(this).fadeOut();
        }
    });



    $("#calcBtn").click(function () {
        let errMsg = [];
        let birthdate = $("[name='birthdate']").val().replace(/\s/g, '');
        if (birthdate == "") {
            errMsg.push("生年月日を入力してください。");
        } else if (!/^\d{8}$/.test(birthdate)) {
            errMsg.push("生年月日は半角数字8桁で入力してください。");
        }

        let name = $("[name='name']").val().replace(/\s/g, '');
        if (name == "") {
            errMsg.push("名前を入力してください。");
        } else if (!/^[a-zA-Z]+$/.test(name)) {
            errMsg.push("名前は英字のみ入力可能です。");
        }


        $("#errorMessages").empty();
        if (errMsg.length > 0) {
            $("#errorMessages").css({
                "display": "block",
            })
            for (var i = 0; i < errMsg.length; i++) {
                $("#errorMessages").append("<p>" + errMsg[i] + "</p>");
            }
        } else {
            /*
            *ベース,メイン,チャレンジ,道,到達,ハート,ペルソナ,ウィーク,欠落,
            */
            const numKeyWord = {
                0: '',
                1: '自信、積極的',
                2: '共感、優しさ',
                3: '楽しむ、味わう',
                4: '安定、形にする',
                5: '自由、動かす',
                6: '愛情、家族',
                7: '真実、極める',
                8: '情熱、豊かさ',
                9: '知恵、皆の為に',
                11: '宇宙と繋がる',
                22: '宇宙と創造する',
                33: '愛、宇宙そのもの',
                44: '',
                55: '',
                66: '',
                77: '',
                88: '',
                99: '',
            };
            const numToCircleNum = {
                0: '⓪',
                1: '①',
                2: '②',
                3: '③',
                4: '④',
                5: '⑤',
                6: '⑥',
                7: '⑦',
                8: '⑧',
                9: '⑨',
                11: '⑪',
                22: '㉒',
                33: '㉝',
                44: '㊹',
                55: '55',
                66: '66',
                77: '77',
                88: '88',
                99: '99',
            };

            /*
            *イヤーナンバー
            */
            //▼
            const YearNumMsg = {
                1: "スタートの年、新たな目標を立てる、積極的な行動、ゆっくり進める",
                2: "選択の年、現実的な選択、今後３年間影響、他人に相談すると良い",
                3: "楽しむ年、弾けて味わう、楽観的に、素直に",
                4: "安定の年、土台作り、現状維持、学歴、資格、自制、忍耐",
                5: "飛躍の年、更に飛躍、拡大、不安定、旅行、海外へ行く、冒険、変化、情報収集",
                6: "家族の年、育てる、育む、愛でる、愛する、奉仕、家族のこと",
                7: "内省の年、見つめる、見極める、深める、休息、プライベートを充実",
                8: "達成の年、到達、花が咲いた、マックス、幸運、強気な行動、派手、本質を見る年",
                9: "終りの年、お片付け、整理、次への準備、断捨離、大人しく過ごす",
                11: "魂の選択の年、魂からの揺さぶり、深い選択、人生にとってとても大事な年、宇宙の声を聞く",
                22: "激震の年、激震の中形作る、極端、突然の大恋愛、この年の努力が大事",
                33: "地割れ、大激震、宇宙が思う",
                44: "",
                55: "",
                66: "",
                77: "",
                88: "",
                99: ""
            };
            //▲
            $("#inputedBirthdate").text(birthdate);
            // ベース、メイン、チャレンジ、イヤーナンバー取得
            var result = calculateDigits(birthdate);
            // ベースの値を設定
            $("#valBase").text(result.sumDay.cntSum);
            $("#valBase_shiki").text(result.sumDay.expression);
            $("#valBase_keyWord").text(numKeyWord[result.sumDay.cntSum]);
            // メインの値を設定
            $("#valMain").text(result.sumBirthdate.cntSum);
            $("#valMain_shiki").text(result.sumBirthdate.expression);
            $("#valMain_keyWord").text(numKeyWord[result.sumBirthdate.cntSum]);
            // チャレンジの値を設定
            $("#valChal").text(result.sumBdate.cntSum);
            $("#valChal_shiki").text(result.sumBdate.expression);
            $("#valChal_keyWord").text(numKeyWord[result.sumBdate.cntSum]);
            // イヤーナンバーの値を設定
            $("#valYearNum").text(result.yearSum.cntSum);
            $("#yearNumMsg").text(YearNumMsg[result.yearSum.cntSum]);


            // 年齢取得処理
            // メイン数を1桁になるまで分解足し算する。11->2,22->4,33->6 ...99->18->9
            let change_num_for_calc_age = parseInt(result.sumBirthdate.cntSum);
            let mainSingle = sumDigitsUntilSingle(change_num_for_calc_age);


            /* メジャーサイクルナンバー 年齢設定　メイン数によって取得する年齢が変わる */
            // 表に表示する用の年齢
            $("#graphMajorAge_2").text(result.graphAgeData[mainSingle][0] + "歳");
            $("#graphMajorAge_3").text(result.graphAgeData[mainSingle][2] + "歳");
            // ファースト～サードに表示する用の年齢
            $("#valMajor_1_shiki").text("[" + result.sumBirthMonth.rangeFirstVal + "]");
            $("#valMajor_2_shiki").text("[" + result.sumDay.rangeSecondVal + "]");
            $("#valMajor_3_shiki").text("[" + result.sumBirthYear.rangeThirdVal + "]");


            /* メジャーサイクルナンバー 数秘術計算結果設定 */
            // 表に表示する用の数秘術計算結果
            $("#graphMajorNum_1").text(result.sumBirthMonth.cntSum);
            $("#graphMajorNum_2").text(result.sumBirthDay.cntSum);
            $("#graphMajorNum_3").text(result.sumBirthYear.cntSum);
            // ファースト～サードに表示する数秘術計算結果表示用
            $("#valMajor_1_ans").html(numToCircleNum[result.sumBirthMonth.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.sumBirthMonth.cntSum] + "</span>");
            $("#valMajor_2_ans").html(numToCircleNum[result.sumBirthDay.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.sumDay.cntSum] + "</span>");
            $("#valMajor_3_ans").html(numToCircleNum[result.sumBirthYear.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.sumBirthYear.cntSum] + "</span>");//元




            /* ピナクルサイクル 年齢設定 */
            // 表に表示する用の年齢
            let calc_age = 36 - mainSingle;
            $("#graphPinnacleAge_2").text(calc_age + "歳");
            $("#graphPinnacleAge_3").text((parseInt(calc_age) + 9) + "歳");
            $("#graphPinnacleAge_4").text((parseInt(calc_age) + 18) + "歳");
            // ファースト～サードに表示する用の年齢
            $("#valPinnacle_1_shiki").text(result.pinacleArr.pnFirst.pnFirstRange);
            $("#valPinnacle_2_shiki").text(result.pinacleArr.pnSecond.pnSecondRange);
            $("#valPinnacle_3_shiki").text(result.pinacleArr.pnThird.pnThirdRange);
            $("#valPinnacle_4_shiki").text(result.pinacleArr.pnFourth.pnFourthRange);


            /* ピナクルサイクル 数秘術計算結果設定 */
            // 表に表示する用の数秘術計算結果
            $("#graphPinnacleNum_1").text(result.sumBdate.cntSum);
            $("#graphPinnacleNum_2").text(result.pinacleArr.pnSecond.pnSecondVal.cntSum);
            $("#graphPinnacleNum_3").text(result.pinacleArr.pnThird.pnThirdVal.cntSum);
            $("#graphPinnacleNum_4").text(result.pinacleArr.pnFourth.pnFourthVal.cntSum);
            // ファースト～サードに表示する数秘術計算結果表示用
            $("#valPinnacle_1_ans").html(numToCircleNum[result.sumBdate.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.sumBdate.cntSum] + "</span>");
            $("#valPinnacle_2_ans").html(numToCircleNum[result.pinacleArr.pnSecond.pnSecondVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.pinacleArr.pnSecond.pnSecondVal.cntSum] + "</span>");
            $("#valPinnacle_3_ans").html(numToCircleNum[result.pinacleArr.pnThird.pnThirdVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.pinacleArr.pnThird.pnThirdVal.cntSum] + "</span>");
            $("#valPinnacle_4_ans").html(numToCircleNum[result.pinacleArr.pnFourth.pnFourthVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.pinacleArr.pnFourth.pnFourthVal.cntSum] + "</span>");




            /* チャレンジナンバー 年齢設定 */
            // 表に表示する用の年齢
            $("#graphChallengeAge_2").text(parseInt(calc_age) + "歳");
            $("#graphChallengeAge_3").text((parseInt(calc_age) + 9) + "歳");
            $("#graphChallengeAge_4").text((parseInt(calc_age) + 18) + "歳");
            // ファースト～サードに表示する用の年齢
            $("#valChallenge_1_shiki").text(result.challengeArr.chFirst.chFirstRange);
            $("#valChallenge_2_shiki").text(result.challengeArr.chSecond.chSecondRange);
            $("#valChallenge_3_shiki").text(result.challengeArr.chThird.chThirdRange);
            $("#valChallenge_4_shiki").text(result.challengeArr.chFourth.chFourthRange);



            /* チャレンジナンバー 数秘術計算結果設定 */
            // 表に表示する用の数秘術計算結果
            $("#graphChallengeNum_1").text(result.challengeArr.chFirst.chFirstVal.cntSum);
            $("#graphChallengeNum_2").text(result.challengeArr.chSecond.chSecondVal.cntSum);
            $("#graphChallengeNum_3").text(result.challengeArr.chThird.chThirdVal.cntSum);
            $("#graphChallengeNum_4").text(result.challengeArr.chFourth.chFourthVal.cntSum);
            // ファースト～サードに表示する数秘術計算結果表示用
            $("#valChallenge_1_ans").html(numToCircleNum[result.challengeArr.chFirst.chFirstVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.challengeArr.chFirst.chFirstVal.cntSum] + "</span>");
            $("#valChallenge_2_ans").html(numToCircleNum[result.challengeArr.chSecond.chSecondVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.challengeArr.chSecond.chSecondVal.cntSum] + "</span>");
            $("#valChallenge_3_ans").html(numToCircleNum[result.challengeArr.chThird.chThirdVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.challengeArr.chThird.chThirdVal.cntSum] + "</span>");
            $("#valChallenge_4_ans").html(numToCircleNum[result.challengeArr.chFourth.chFourthVal.cntSum] + "<span class='res-contents br-sp' style='font-weight: 500;margin-left: 10px;vertical-align: text-bottom;display: inline-block;'>" + numKeyWord[result.challengeArr.chFourth.chFourthVal.cntSum] + "</span>");





            // アルファベット数字変換及び道・到達・ハート・ペルソナ・ウィーク・欠落・特性・フォーディメンションバランス取得
            var resultName = convertStringToNumberWithConditions(name, birthdate);

            // inputの名前とアルファベット数字変換後の値
            $("#inputedName").text(name);
            $("#inputedConvertedString").text(resultName.convertedString);

            // 道の値を設定
            $("#valMichi").text(resultName.sumMichi.cntSum);
            $("#valMichi_shiki").text(resultName.sumMichi.expression);
            $("#valMichi_keyWord").text(numKeyWord[resultName.sumMichi.cntSum]);

            // 到達の値を設定
            $("#valReach").text(resultName.sumReach.cntSum);
            $("#valReach_shiki").text(resultName.sumReach.expression);
            $("#valReach_keyWord").text(numKeyWord[resultName.sumReach.cntSum]);

            // ハートの値を設定
            $("#valHeart").text(resultName.sumHeart.cntSum);
            $("#valHeart_shiki").text(resultName.sumHeart.expression);
            $("#valHeart_keyWord").text(numKeyWord[resultName.sumHeart.cntSum]);

            // ペルソナの値を設定
            $("#valPer").text(resultName.sumPersona.cntSum);
            $("#valPer_shiki").text(resultName.sumPersona.expression);
            $("#valPer_keyWord").text(numKeyWord[resultName.sumPersona.cntSum]);

            // ウィークの値を設定
            $("#valWeak").text(resultName.sumCntString.cntSum);
            $("#valWeak_shiki").text(resultName.sumCntString.expression);
            $("#valWeak_keyWord").text(numKeyWord[resultName.sumCntString.cntSum]);

            // 欠落の値を設定
            $("#valMiss").text("(" + resultName.missingNumbers + ")");

            // 特性の値を設定
            $("#valCharacter").text("\"" + resultName.valCharacter + "\"");

            // 数秘計算結果の数字と紐づくキーワードを取得

            // 特性のキーワード取得
            // カンマ区切りの文字列から数字を抽出する関数
            function extractNumbers(inputString) {
                return inputString.split(',').map(Number);
            }
            var numbers = extractNumbers(resultName.valCharacter);
            var outputText = "";
            // 各数字に対応する処理を行う
            numbers.forEach(function (number, index) {
                outputText += numKeyWord[number];
                if (index < numbers.length - 1) {
                    outputText += " / ";
                }
            });
            $("#valCharacter_keyWord").text(numKeyWord[resultName.valCharacter]);
            $("#valCharacter_keyWord").text(outputText);
            $("#cntOne").text(resultName.digitCounts[1]);
            $("#cntTwo").text(resultName.digitCounts[2]);
            $("#cntThree").text(resultName.digitCounts[3]);
            $("#cntFour").text(resultName.digitCounts[4]);
            $("#cntFive").text(resultName.digitCounts[5]);
            $("#cntSix").text(resultName.digitCounts[6]);
            $("#cntSeven").text(resultName.digitCounts[7]);
            $("#cntEight").text(resultName.digitCounts[8]);
            $("#cntNine").text(resultName.digitCounts[9]);

            // フォーディメンションバランスのの値を設定
            numBody = numBody(resultName.digitCounts[4], resultName.digitCounts[5]);
            $("#val4D_1_ans").text(numToCircleNum[numBody.cntSum]);
            $("#val4D_1_shiki").text(numBody.expression);
            numMind = numMind(resultName.digitCounts[1], resultName.digitCounts[8]);
            $("#val4D_2_ans").text(numToCircleNum[numMind.cntSum]);
            $("#val4D_2_shiki").text(numMind.expression);
            numEmotion = numEmotion(resultName.digitCounts[2], resultName.digitCounts[3], resultName.digitCounts[6]);
            $("#val4D_3_ans").text(numToCircleNum[numEmotion.cntSum]);
            $("#val4D_3_shiki").text(numEmotion.expression);
            numIntuition = numIntuition(resultName.digitCounts[7], resultName.digitCounts[9]);
            $("#val4D_4_ans").text(numToCircleNum[numIntuition.cntSum]);
            $("#val4D_4_shiki").text(numIntuition.expression);



            $("#errorMessages").css({
                "display": "none",
            })
            $(".results-wrap").css({
                "display": "block",
            })
            $(".form-wrap").css({
                "display": "none",
            })

        }
    });
});

$(function () {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
