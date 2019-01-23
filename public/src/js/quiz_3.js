$(document).ready(function () {
    var que;
    var right;
    var i = 0;

    var que1 = {
        que: "아 왜그러세요~",
        right: "김선태"
    };
    var que2 = {
        que: "팀장님, 팀장님 <br>삐지셨어요?",
        right: "박정은"
    };
    var que3 = {
        que: "바쁘냐?",
        right: "안경호"
    };
    var que4 = {
        que: "디자인은 내가 할께,<Br> 넌 니 일이나 해",
        right: "이영신"
    };
    var que5 = {
        que: "<img src='/src/images/quiz/hand.png'/>",
        right: "김요한"
    };
    var que6 = {
        que: "<img src='/src/images/quiz/hair.jpg'/>",
        right: "오혁근"
    };
    var que7 = {
        que: "<img src='/src/images/quiz/bora.png'/>",
        right: "김보라"
    };
    var que8 = {
        que: "<img src='/src/images/quiz/earing.png' style='width: auto !important; height:440px'/>",
        right: "김우진"
    };
    var que9 = {
        que: "<img src='/src/images/quiz/selfi.png'/>",
        right: "강현진"
    };
    var que10 = {
        que: "<img src='/src/images/quiz/jungrae.png'/>",
        right: "장정례"
    };
    var que11 = {
        que: "<img src='/src/images/quiz/dujin.jpg'/>",
        right: "최두진"
    };
    var que12 = {
        que: "<img src='/src/images/quiz/hunji.png'/>",
        right: "이지선"
    };
    var que13 = {
        que: "<img src='/src/images/quiz/taeksung.png'/>",
        right: "김택성"
    };
    var que14 = {
        que: "찍어서 맞추세요!<br> <span style='font-size:2rem;'>(힌트:나오지 않은 사람 중에 있음)</span>",
        right: "강미혜"
    };
    var quelst = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10, que11, que12, que13, que14];

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
        if ($("#o1").val() != null) {
            if ($("#o1").val() == quelst[i].right) {} else {
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
