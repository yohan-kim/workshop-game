$(document).ready(function () {
    var que;
    var ans;
    var right;
    var i = 0;
    var score = 0;
    const startCountDown = $('.countDown');
    var que1 = {
        que: "아 왜그러세요~",
        right: "김선태"
    };
    var que2 = {
        que: "팀장님, 팀장님 삐지셨어요?",
        right: "박정은"
    };
    var que3 = {
        que: "어~련~하시겠어요",
        right: "정유리"
    };
    var que4 = {
        que: "디자인은 내가 할께, 넌 니 일이나 해",
        right: "이영신"
    };
    var que5 = {
        que: "______ element in HTML5 is used to indicate that text has been added to the document.?",
        right: "3"
    };
    var que6 = {
        que: "______ attribute used in <table> element sets the width, in pixels, between the edge of a cell and its content",
        right: "0"
    };
    var que7 = {
        que: "Which attribute specifies the stack order of an element?",
        ans: ["x-index", "y-index", "z-index", "xy-index"],
        right: "2"
    };
    var que8 = {
        que: "Which property controls scrolling of an image in background? ",
        ans: ["background-fixed", "background-scroll", "background-scrolling", "background-attachment"],
        right: "3"
    };
    var que9 = {
        que: "What is default value of position property?",
        ans: ["static", "fixed", "relative", "absolute"],
        right: "0"
    };
    var que10 = {
        que: "Which CSS has highest priority?",
        ans: ["inline", "internal", "external", "Each have equal priority"],
        right: "0"
    };
    var quelst = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];
    var wrong = [];

    const wait=()=> {
        return new Promise((resolve, reject) => {
            let count = 10;
            const interval = setInterval(() => {
              count -= 1;
              if (count <= 0) {
                clearInterval(interval);
                resolve($('.countDown').html(''));
                return;
              }
              startCountDown.text(count);
            }, 1000);
          }).catch(e => console.log(e));
    }
    $("#start").click(function () {
        $(".front").hide();
        $("#sub").show();
        $(".quiz").show();
        $("#num").text(i + 1 + "/" + quelst.length)
        $("#q").text(quelst[i].que);
        $("#op1").html("<input type='text' name='opt' id='o1' required placeholder='답 :'><label for='o1'>");
    });
    $("#sub").click(function (e) {
        e.preventDefault();
        if ($("#o1").val() != null) {
            if ($("#o1").val() == quelst[i].right) {
                score++;
            } else {

                //틀렸을 경우 
                $('#o1').addClass('bg--red');
                setTimeout(() => {
                    $("#o1").removeClass('bg--red');
                }, 500);

                wait().then()
              return;
               
            }
            $("#sub").hide();
            $(".score").text(score);
            if (i != quelst.length - 1) {
                next();
            } else {
                reslt();
            }
        } else {
            $(".p").text("Select One option");
        }
    });

    function next() {
        if (i != (quelst.length) - 1) {
            i++;
        }
        $("#q").text(quelst[i].que);
        $("#op1").html("<input type='text' name='opt' id='o1' required placeholder='답 :'>");
        $("#num").text(i + 1 + "/" + quelst.length);
        $("#sub").show();
    }

    function reslt() {
        $(".quiz").hide();
        $(".result").show();
        $(".score").text(score + "/" + quelst.length);
        if (score <= 4) {
            $(".message").text("Oh no!!You need to do better.");
        } else if (score < 8) {
            $(".message").text("Good.Dont stop studying.");
        } else {
            $(".message").text("Great!!You have really good knowledge of HTML and CSS.");
        }
    }
    // $("#an").click(function () {
    //     $(".result").hide();
    //     $(".answers").show();
    //     if ((wrong.toString()).search("0") != -1) {
    //         $("#a1").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("1") != -1) {
    //         $("#a2").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("2") != -1) {
    //         $("#a3").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("3") != -1) {
    //         $("#a4").css('color', '#ff6347');
    //     } a
    //     if ((wrong.toString()).search("4") != -1) {
    //         $("#a5").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("5") != -1) {
    //         $("#a6").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("6") != -1) {
    //         $("#a7").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("7") != -1) {
    //         $("#a8").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("8") != -1) {
    //         $("#a9").css('color', '#ff6347');
    //     }
    //     if ((wrong.toString()).search("9") != -1) {
    //         $("#a10").css('color', '#ff6347');
    //     }

    // });
    
});
