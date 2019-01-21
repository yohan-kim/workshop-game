$(document).ready(function () {
    var que;
    var right;
    var i = 0;

    var que1 = {
        que: "👳️🛶🐅",
        right: "라이프오브파이"
    };
    var que2 = {
        que: "👦🏠🧔👨",
        right: "나홀로집에"
    };
    var que3 = {
        que: "⚡👨🔨",
        right: "토르"
    };
    var que4 = {
        que: "👦🍫🏭",
        right: "찰리와초콜릿공장"
    };
    var que5 = {
        que: "🎈🎈🎈🏠👦👨🎈🎈🎈",
        right: "업"
    };
    var que6 = {
        que: "❄️🏰👸👧☃️",
        right: "겨울왕국"
    };
    var que7 = {
        que: "🐠🔎",
        right: "니모를찾아서"
    };
    var que8 = {
        que: "😀😢😤🙄😡",
        right: "인사이드아웃"
    };
    var que9 = {
        que: "✏️📒💑",
        right: "노트북"
    };
    var que10 = {
        que: "🚆🧟",
        right: "부산행"
    };
    var que11 = {
        que: "🧔❤️🧔🏔",
        right: "브로크백마운틴"
    };
    var que12 = {
        que: "🧑💍🌋",
        right: "반지의제왕"
    };
    var que13 = {
        que: "👽👦🌕🚲👉👈",
        right: '이티'
    };
    var que14 = {
        que: "🐼👊",
        right: "쿵푸팬더"
    };
    var que15 = {
        que: "🐢🐢🐢🐢🐀",
        right: "닌자거북이"
    };
    var quelst = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10, que11, que12, que13, que14,que15];

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
        const answer = $("#o1").val().replace(/ /gi, "");
        console.log(answer);
        if (answer != null) {
            if (answer == quelst[i].right) {} else {
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

    $('.btn-back').click(() => {
        window.location.href = '/quiz.html';
    });
});
