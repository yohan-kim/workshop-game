$(document).ready(function () {
    var que;
    var ans;
    var right;
    var i = 0;
    var score = 0;
    var que1 = {
        que: "아 왜그러세요~",
        ans: ["&lt;hyperlink&gt;", "&lt;a&gt;", "&lt;link&gt;", "&lt;source&gt;"],
        right: "1"
    };
    var que2 = {
        que: "Which tag is used to specify a list of prefined options for input controls?",
        ans: ["&lt;embed&gt;", "&lt;source&gt;", "&lt;li&gt;", "&lt;datalist&gt;"],
        right: "3"
    };
    var que3 = {
        que: " Which HTML element is used to display a scalar measurement within a range?",
        ans: ["&lt;meter&gt;", "&lt;range&gt;", "&lt;scalar&gt;", "&lt;progress&gt;"],
        right: "0"
    };
    var que4 = {
        que: "Choose the correct HTML element to define important text?",
        ans: ["&lt;important&gt;", "&lt;strong&gt;", "&lt;imp&gt;", "&lt;b&gt;"],
        right: "1"
    };
    var que5 = {
        que: "______ element in HTML5 is used to indicate that text has been added to the document.?",
        ans: ["&lt;fill&gt;", "&lt;insert&gt;", "&lt;add&gt;", "&lt;ins&gt;"],
        right: "3"
    };
    var que6 = {
        que: "______ attribute used in <table> element sets the width, in pixels, between the edge of a cell and its content",
        ans: ["cellpadding", " cellspacing", "colspacing", "edgespacing"],
        right: "0"
    };
    var que7 = { que: "Which attribute specifies the stack order of an element?", ans: ["x-index", "y-index", "z-index", "xy-index"], right: "2" };
    var que8 = { que: "Which property controls scrolling of an image in background? ", ans: ["background-fixed", "background-scroll", "background-scrolling", "background-attachment"], right: "3" };
    var que9 = { que: "What is default value of position property?", ans: ["static", "fixed", "relative", "absolute"], right: "0" };
    var que10 = { que: "Which CSS has highest priority?", ans: ["inline", "internal", "external", "Each have equal priority"], right: "0" };
    var quelst = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10];
    var wrong = [];
    $("#start").click(function () {
        $(".front").hide();
        $("#sub").show();
        $(".quiz").show();
        $("#num").text(i + 1 + "/" + quelst.length)
        $("#q").text(quelst[i].que);
        $("#op1").html("<input type='text' name='opt' id='o1' value='0'><label for='o1'>" + quelst[i].ans[0]) + "</label>";
        $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>" + quelst[i].ans[1]) + "</label>";
        $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>" + quelst[i].ans[2]) + "</label>";
        $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>" + quelst[i].ans[3]) + "</label>";
    });
    $("#sub").click(function () {
        if ($("input[name='opt']:checked").val() != null) {
            if ($("input[name='opt']:checked").val() == quelst[i].right) {
                score++;
            }
            else {
                wrong.push(i);
            }
            $("#sub").hide();
            $(".score").text(score);
            if (i != quelst.length - 1) {
                next();
            }
            else {
                reslt();
            }

        }
        else {
            $(".p").text("Select One option");
        }
    });
    function next() {
        if (i != (quelst.length) - 1) {
            i++;
        }
        $("#q").text(quelst[i].que);
        $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>" + quelst[i].ans[0]) + "</label>";
        $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>" + quelst[i].ans[1]) + "</label>";
        $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>" + quelst[i].ans[2]) + "</label>";
        $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>" + quelst[i].ans[3]) + "</label>";
        $("#num").text(i + 1 + "/" + quelst.length);
        $("#sub").show();
    }
    function reslt() {
        $(".quiz").hide();
        $(".result").show();
        $(".score").text(score + "/" + quelst.length);
        if (score <= 4) {
            $(".message").text("Oh no!!You need to do better.");
        }
        else if (score < 8) {
            $(".message").text("Good.Dont stop studying.");
        }
        else {
            $(".message").text("Great!!You have really good knowledge of HTML and CSS.");
        }
    }
    $("#an").click(function () {
        $(".result").hide();
        $(".answers").show();
        if ((wrong.toString()).search("0") != -1) {
            $("#a1").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("1") != -1) {
            $("#a2").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("2") != -1) {
            $("#a3").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("3") != -1) {
            $("#a4").css('color', '#ff6347');
        } a
        if ((wrong.toString()).search("4") != -1) {
            $("#a5").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("5") != -1) {
            $("#a6").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("6") != -1) {
            $("#a7").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("7") != -1) {
            $("#a8").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("8") != -1) {
            $("#a9").css('color', '#ff6347');
        }
        if ((wrong.toString()).search("9") != -1) {
            $("#a10").css('color', '#ff6347');
        }

    });

});
