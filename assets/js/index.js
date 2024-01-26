$(document).ready(function () {

    // 表を開くトリガーがクリックされたとき
    $('.popup-trigger').click(function () {
        // ポップアップを表示
        $('#popupOverlay').fadeIn();
    });

    // 背景をタップしたとき
    $('#popupOverlay').click(function (event) {
        // クリックされた要素がポップアップ自体でない場合、ポップアップを非表示
        if (event.target.id === 'popupOverlay') {
            $(this).fadeOut();
        }
    });



    $("#calcBtn").click(function () {
        console.log("▼Start Calc.");
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
            };
            $("#inputedBirthdate").text(birthdate);
            var result = calculateDigits(birthdate);
            $("#valBase").text(result.sumDay.cntSum);
            $("#valBase_shiki").text(result.sumDay.expression);
            $("#valBase_keyWord").text(numKeyWord[result.sumDay.cntSum]);
            // $("#valMajor_2_shiki").text("[" + result.sumDay.rangeSecondVal + "]" + result.sumDay.expression);
            $("#valMajor_2_shiki").text("[" + result.sumDay.rangeSecondVal + "]");
            $("#valMajor_2_ans").text(numToCircleNum[result.sumDay.cntSum]);
            $("#valMajor_1_ans").text(numToCircleNum[result.sumBirthMonth.cntSum]);
            // $("#valMajor_1_shiki").text("[" + result.sumBirthMonth.rangeFirstVal + "]" + result.sumBirthMonth.expression);
            $("#valMajor_1_shiki").text("[" + result.sumBirthMonth.rangeFirstVal + "]");
            $("#valMajor_3_ans").text(numToCircleNum[result.sumBirthYear.cntSum]);
            // $("#valMajor_3_shiki").text("[" + result.sumBirthYear.rangeThirdVal + "]" + result.sumBirthYear.expression);
            $("#valMajor_3_shiki").text("[" + result.sumBirthYear.rangeThirdVal + "]");
            $("#valMain").text(result.sumBirthdate.cntSum);
            $("#valMain_shiki").text(result.sumBirthdate.expression);
            $("#valMain_keyWord").text(numKeyWord[result.sumBirthdate.cntSum]);
            $("#valChal").text(result.sumBdate.cntSum);
            $("#valChal_shiki").text(result.sumBdate.expression);
            $("#valChal_keyWord").text(numKeyWord[result.sumBdate.cntSum]);
            $("#valYearNum").text(result.yearSum);



            $("#valPinnacle_1_ans").text(numToCircleNum[result.sumBdate.cntSum]);
            // $("#valPinnacle_1_shiki").text(result.pinacleArr.pnFirst.pnFirstRange + result.pinacleArr.pnFirst.pnFirstVal.expression);
            $("#valPinnacle_1_shiki").text(result.pinacleArr.pnFirst.pnFirstRange);
            $("#valPinnacle_2_ans").text(numToCircleNum[result.pinacleArr.pnSecond.pnSecondVal.cntSum]);
            // $("#valPinnacle_2_shiki").text(result.pinacleArr.pnSecond.pnSecondRange + result.pinacleArr.pnSecond.pnSecondVal.expression);
            $("#valPinnacle_2_shiki").text(result.pinacleArr.pnSecond.pnSecondRange);
            $("#valPinnacle_3_ans").text(numToCircleNum[result.pinacleArr.pnThird.pnThirdVal.cntSum]);
            // $("#valPinnacle_3_shiki").text(result.pinacleArr.pnThird.pnThirdRange + result.pinacleArr.pnThird.pnThirdVal.expression);
            $("#valPinnacle_3_shiki").text(result.pinacleArr.pnThird.pnThirdRange);
            $("#valPinnacle_4_ans").text(numToCircleNum[result.pinacleArr.pnFourth.pnFourthVal.cntSum]);
            // $("#valPinnacle_4_shiki").text(result.pinacleArr.pnFourth.pnFourthRange + result.pinacleArr.pnFourth.pnFourthVal.expression);
            $("#valPinnacle_4_shiki").text(result.pinacleArr.pnFourth.pnFourthRange);

            $("#valChallenge_1_ans").text(numToCircleNum[result.challengeArr.chFirst.chFirstVal.cntSum]);
            // $("#valChallenge_1_shiki").text(result.challengeArr.chFirst.chFirstRange + result.challengeArr.chFirst.chFirstVal.expression);
            $("#valChallenge_1_shiki").text(result.challengeArr.chFirst.chFirstRange);
            $("#valChallenge_2_ans").text(numToCircleNum[result.challengeArr.chSecond.chSecondVal.cntSum]);
            // $("#valChallenge_2_shiki").text(result.challengeArr.chSecond.chSecondRange + result.challengeArr.chSecond.chSecondVal.expression);
            $("#valChallenge_2_shiki").text(result.challengeArr.chSecond.chSecondRange);
            $("#valChallenge_3_ans").text(numToCircleNum[result.challengeArr.chThird.chThirdVal.cntSum]);
            // $("#valChallenge_3_shiki").text(result.challengeArr.chThird.chThirdRange + result.challengeArr.chThird.chThirdVal.expression);
            $("#valChallenge_3_shiki").text(result.challengeArr.chThird.chThirdRange);
            $("#valChallenge_4_ans").text(numToCircleNum[result.challengeArr.chFourth.chFourthVal.cntSum]);
            // $("#valChallenge_4_shiki").text(result.challengeArr.chFourth.chFourthRange + result.challengeArr.chFourth.chFourthVal.expression);
            $("#valChallenge_4_shiki").text(result.challengeArr.chFourth.chFourthRange);

            var resultName = convertStringToNumberWithConditions(name, birthdate);

            $("#inputedName").text(name);
            $("#inputedConvertedString").text(resultName.convertedString);
            $("#valMichi").text(resultName.sumMichi.cntSum);
            $("#valMichi_shiki").text(resultName.sumMichi.expression);
            $("#valMichi_keyWord").text(numKeyWord[resultName.sumMichi.cntSum]);

            $("#valReach").text(resultName.sumReach.cntSum);
            $("#valReach_shiki").text(resultName.sumReach.expression);
            $("#valReach_keyWord").text(numKeyWord[resultName.sumReach.cntSum]);

            $("#valHeart").text(resultName.sumHeart.cntSum);
            $("#valHeart_shiki").text(resultName.sumHeart.expression);
            $("#valHeart_keyWord").text(numKeyWord[resultName.sumHeart.cntSum]);

            $("#valPer").text(resultName.sumPersona.cntSum);
            $("#valPer_shiki").text(resultName.sumPersona.expression);
            $("#valPer_keyWord").text(numKeyWord[resultName.sumPersona.cntSum]);

            $("#valWeak").text(resultName.sumCntString.cntSum);
            $("#valWeak_shiki").text(resultName.sumCntString.expression);
            $("#valWeak_keyWord").text(numKeyWord[resultName.sumCntString.cntSum]);
            $("#valMiss").text("(" + resultName.missingNumbers + ")");
            $("#valCharacter").text("\"" + resultName.valCharacter + "\"");
            // カンマ区切りの文字列から数字を抽出する関数
            function extractNumbers(inputString) {
                return inputString.split(',').map(Number);
            }

            var numbers = extractNumbers(resultName.valCharacter);
            var outputText = "";
            // 各数字に対応する処理を行う
            numbers.forEach(function (number,index) {
                outputText += numKeyWord[number];
                if (index < numbers.length - 1) {
                    outputText += " / ";
                }
            });
            console.log(outputText);
            $("#valCharacter_keyWord").text(numKeyWord[resultName.valCharacter]);
            $("#valCharacter_keyWord").text(outputText);
            // $("#valCharacter").text(resultName.yearSum);
            $("#cntOne").text(resultName.digitCounts[1]);
            $("#cntTwo").text(resultName.digitCounts[2]);
            $("#cntThree").text(resultName.digitCounts[3]);
            $("#cntFour").text(resultName.digitCounts[4]);
            $("#cntFive").text(resultName.digitCounts[5]);
            $("#cntSix").text(resultName.digitCounts[6]);
            $("#cntSeven").text(resultName.digitCounts[7]);
            $("#cntEight").text(resultName.digitCounts[8]);
            $("#cntNine").text(resultName.digitCounts[9]);
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
            // //▼グラフのデータ
            // console.log("実際のデータ");
            // console.log(resultName.digitCounts);
            // var data = {
            //     labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            //     datasets: [{
            //         label: '基準値',
            //         data: [5, 3, 4, 3, 5, 3, 3, 2, 6],
            //         backgroundColor: 'lightgrey',
            //         borderWidth: 0
            //     }, {
            //         label: 'データセット',

            //         data: Object.values(resultName.digitCounts),

            //         backgroundColor: function (context) {
            //             var label = context.chart.data.labels[context.dataIndex];
            //             var threshold = getThreshold(label);
            //             var dataset = context.chart.data.datasets[context.datasetIndex];
            //             var data = dataset.data || [];

            //             return data[context.dataIndex] >= threshold ? '#cc5ee7d7' : '#5e83e7d7';
            //         }
            //     }]
            // };

            // var myChart;
            // var ctx = document.getElementById('myChart').getContext('2d');

            // var thresholds = {
            //     "1": 5,
            //     "2": 3,
            //     "3": 4,
            //     "4": 3,
            //     "5": 5,
            //     "6": 3,
            //     "7": 3,
            //     "8": 2,
            //     "9": 6
            // };

            // // グラフのオプション
            // var options = {
            //     scales: {
            //         x: {
            //             type: 'linear', 
            //             position: 'bottom', 
            //             title: {
            //                 display: true,
            //                 text: '横軸'
            //             },
            //             ticks: {
            //                 stepSize: 1, 
            //                 min: 1, 
            //                 max: 9 
            //             }
            //         },
            //         y: {
            //             title: {
            //                 display: true,
            //                 text: '縦軸'
            //             },
            //             ticks: {
            //                 stepSize: 1, 
            //                 min: 1, 
            //                 max: 6 
            //             }
            //         }
            //     }
            // };

            // var myChart = new Chart(ctx, {
            //     type: 'bar', 
            //     data: data,
            //     options: options
            // });
            // function getThreshold(label) {
            //     return typeof thresholds[label] !== 'undefined' ? thresholds[label] : 0;
            // }
            // //▲
        }
    });

    // 
    // $("#backInput").click(function(){
    //     $(".results-wrap").css({
    //         "display": "none",
    //     })
    //     $(".form-wrap").css({
    //         "display": "block",
    //     })
    // });

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
