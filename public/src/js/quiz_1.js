$(document).ready(function () {
    var que;
    var right;
    var i = 0;
  
    var que1 = {
        que: "태국의 연평균기온은 _____도",
        right: "34"
    };
    var que2 = {
        que: "지폐에 그려진 사람은 태국국왕이다.<br> 금액이 높아질수록 나이 든 모습이며, <br> 2016년 서거한 이 국왕의 이름은<br> _____ 아둔야뎃이다.",
        right: "푸미폰"
    };
    var que3 = {
        que: "태국을 상징하는 동물은?",
        right: "코끼리"
    };
    var que4 = {
        que: "태국 제 2의 도시는 _____이다.",
        right: "치앙마이"
    };
    var que5 = {
        que: "태국 돈 중 가장 고액권은 ______바트다.",
        right: "1000"
    };
    var que6 = {
        que: "태국 총리는 __________다. <br> 쿠데타로 2014년 집권했다.",
        right: "쁘라윳짠오차"
    };
    var que7 = {
        que: "태국과 가장 사이가 안 좋은 나라는 <br>_______이다. <br> 푸미폰 국왕이 서거했을 당시에도 <br>조문을 보내지 않았다.",
        right: "미얀마"
    };
    var que8 = {
        que: "이노부스트는 동고동락 카오락에서 <br>_____ 국립공원과 <br>제임스본드 섬 투어를 했다. ",
        right: "팡아만"
    };
    var que9 = {
        que: "카오락의 영문 스펠링은 <br>_________이다. (영문)",
        right: "khaolak"
    };
    var que10 = {
        que: "우리나라 여권으로 태국을 ______ 일간 <br>무비자로 여행할 수 있다.",
        right: "90"
    };
    var que11 = {
        que: "이노부스트 투어에도 포함되었던 <br>카오락의 야시장 이름은<br> ______ 마켓이다.",
        right: "방니앙"
    };
  
    var quelst = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10,que11];

    $("#start").click(function () {
        $(".front").hide();
        $("#sub").show();
        $(".quiz").show();
        $("#num").text(i + 1 + "/" + quelst.length)
        $("#q").html(quelst[i].que);
        $("#op1").html("<input type='text' name='opt' id='o1' required placeholder='답 :'><label for='o1'>");
    });
    $("#sub").click(function (e) {
        e.preventDefault();
        let answer = $("#o1").val().replace(/ /gi, "");
        answer= answer.toLowerCase();
        console.log(answer);
        if (answer != null) {
            if (answer == quelst[i].right) {}
             else {
                //틀렸을 경우 
                $('#o1').addClass('bg--red');
                setTimeout(() => {
                    $("#o1").removeClass('bg--red');
                }, 500);
                return;
            }
            $("#sub").hide();
            if (i != quelst.length - 1) {
                next();
            } else {
                reslt();
            }
        } 
    });

    function next() {
        if (i != (quelst.length) - 1) {
            i++;
        }
        $("#q").html(quelst[i].que);
        $("#op1").html("<input type='text' name='opt' id='o1' required placeholder='답 :'>");
        $("#num").text(i + 1 + "/" + quelst.length);
        $("#sub").show();
    }

    function reslt() {
        $(".quiz").hide();
        $(".result").show();
    }

});
