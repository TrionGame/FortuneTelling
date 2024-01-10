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
            $("#valMain").text(result.sumBirthdate.cntSum);
            $("#valChal").text(result.sumBdate.cntSum);
            $("#valYearNum").text(result.yearSum);

            var resultName = convertStringToNumberWithConditions(name,birthdate);
            console.log(resultName);
            $("#inputedName").text(name);
            $("#inputedConvertedString").text(resultName.convertedString);
            $("#valMichi").text(resultName.sumMichi.cntSum);
            $("#valReach").text(resultName.sumReach.cntSum);
            $("#valHeart").text(resultName.sumHeart.cntSum);
            $("#valPer").text(resultName.sumPersona.cntSum);
            $("#valWeak").text(resultName.sumCntString.cntSum);
            $("#valMiss").text("("+resultName.missingNumbers+")");
            $("#valCharacter").text("\""+resultName.valCharacter+"\"");
            // $("#valCharacter").text(resultName.yearSum);

            $("#errorMessages").css({
                "display": "none",
            })
            $(".results-wrap").css({
                "display": "block",
            })
        }
    });

    // 
   
});