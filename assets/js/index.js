$(document).ready(function () {
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
            $("#inputedBirthdate").text(birthdate);
            var result = calculateDigits(birthdate);
            $("#valBase").text(result.sumDay.cntSum);
            $("#valBase_shiki").text(result.sumDay.expression);
            $("#valMain").text(result.sumBirthdate.cntSum);
            $("#valMain_shiki").text(result.sumBirthdate.expression);
            $("#valChal").text(result.sumBdate.cntSum);
            $("#valChal_shiki").text(result.sumBdate.expression);
            $("#valYearNum").text(result.yearSum);

            var resultName = convertStringToNumberWithConditions(name, birthdate);
            console.log(resultName);
            $("#inputedName").text(name);
            $("#inputedConvertedString").text(resultName.convertedString);
            $("#valMichi").text(resultName.sumMichi.cntSum);
            $("#valMichi_shiki").text(resultName.sumMichi.expression);
            $("#valReach").text(resultName.sumReach.cntSum);
            $("#valReach_shiki").text(resultName.sumReach.expression);
            $("#valHeart").text(resultName.sumHeart.cntSum);
            $("#valHeart_shiki").text(resultName.sumHeart.expression);
            $("#valPer").text(resultName.sumPersona.cntSum);
            $("#valPer_shiki").text(resultName.sumPersona.expression);
            $("#valWeak").text(resultName.sumCntString.cntSum);
            $("#valWeak_shiki").text(resultName.sumCntString.expression);
            $("#valMiss").text("(" + resultName.missingNumbers + ")");
            $("#valCharacter").text("\"" + resultName.valCharacter + "\"");
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

            $("#errorMessages").css({
                "display": "none",
            })
            $(".results-wrap").css({
                "display": "block",
            })
            //▼グラフのデータ
            console.log("実際のデータ");
            console.log(resultName.digitCounts);
            var data = {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                datasets: [{
                    label: '基準値',
                    data: [5, 3, 4, 3, 5, 3, 3, 2, 6],
                    backgroundColor: 'lightgrey',
                    borderWidth: 0
                }, {
                    label: 'データセット',
                    // data: [1, 2, 3, 4, 5, 6, 3, 2, 1],
                    
                    // data: resultName.digitCounts,
                    data: Object.values(resultName.digitCounts),

                    // backgroundColor: function (context) {
                    //     // 基準値を超える場合、バーの色を変更
                    //     var label = context.chart.data.labels[context.dataIndex];
                    //     var threshold = getThreshold(label);
                    //     console.log("基準："+threshold);
                    //     console.log("データ："+context.dataset.data[context.dataIndex]);
                    //     console.log(context.dataset.data);
                    //     // console.log(context.dataset.data[context.dataIndex] + ">"+threshold);
                    //     return context.dataset.data[context.dataIndex] >= threshold ? '#cc5ee7d7' : '#5e83e7d7';
                    // }

                    backgroundColor: function (context) {
                        // 基準値を超える場合、バーの色を変更
                        var label = context.chart.data.labels[context.dataIndex];
                        var threshold = getThreshold(label);
                        console.log("基準："+threshold);
                        console.log("データ："+context.dataset.data[context.dataIndex]);
                        console.log(context.dataset.data);
                        
                        // データセットの取得方法を修正
                        var dataset = context.chart.data.datasets[context.datasetIndex];
                        var data = dataset.data || [];
                        
                        return data[context.dataIndex] >= threshold ? '#cc5ee7d7' : '#5e83e7d7';
                    }
                }]
            };

            // グラフを描画するCanvas要素を取得
            var ctx = document.getElementById('myChart').getContext('2d');

            // 各ラベルごとの基準値
            var thresholds = {
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

            // グラフのオプション
            var options = {
                scales: {
                    x: {
                        type: 'linear', // 横軸の種類
                        position: 'bottom', // 横軸の位置
                        title: {
                            display: true,
                            text: '横軸'
                        },
                        ticks: {
                            stepSize: 1, // 刻み幅
                            min: 1, // 最小値
                            max: 9 // 最大値
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: '縦軸'
                        },
                        ticks: {
                            stepSize: 1, // 刻み幅
                            min: 1, // 最小値
                            max: 6 // 最大値
                        }
                    }
                }
            };

            // グラフを作成
            var myChart = new Chart(ctx, {
                type: 'bar', // バーグラフを使用
                data: data,
                options: options
            });

            // ラベルごとの基準値を取得する関数
            // function getThreshold(label) {
            //     return thresholds[label] || 0;
            // }
            function getThreshold(label) {
                return typeof thresholds[label] !== 'undefined' ? thresholds[label] : 0;
            }
            //▲
        }
    });
});