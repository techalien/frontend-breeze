$(document).ready(function() {
    var e = [
        ["init", 0],
        ["club1", 100, "d7723e", "ff5700"],
        ["club2", 200, "e95a60", "b12c32"],
        ["club3", 300, "b59822", "fbd22c"],
        ["club4", 400, "b59822", "fbd22c"],
        ["club5", 500, "b59822", "fbd22c"],
        ["club6", 600, "b59822", "fbd22c"],
        ["club7", 700, "b59822", "fbd22c"],
        ["club8", 800, "2c5c26", "268719"],
        ["club9", 900, "b59822", "fbd22c"],
        ["club10", 1000, "2c5c26", "268719"],
        ["club11", 1100, "3e43cb", "5d62ec"],
        ["club12", 1200, "3e43cb", "5d62ec"],
        ["club13", 1300, "d7723e", "ff5700"],
        ["club14", 1400, "d7723e", "ff5700"],
        ["club15", 1500, "d7723e", "ff5700"],
        ["free", 1525, "fff", "123"]
    ];
    var t = [];
    var n = [];
    var r = e[e.length - 1][1] - e[0][1];
    for (var i = 1; i < e.length; i++) {
        t.push((e[i][1] - e[i - 1][1]) * 100 / r)
    }
    n.push(t[0], t[1], t[2], t[3], t[4], t[5] , t[6], t[7] ,t[8] , t[9], t[10], t[11],t[12],t[13],t[14]);
    for (i = 0; i < $(".timeline_bar li").length; i++) {
        var s = i + 1;
        $("ul.timeline_bar li:nth-child(" + s + ")").css({
            width: t[i] + "%",
            "background-color": "#" + e[s][2]
        })
    }
    for (i = 0; i < $(".dynasty_bar li").length; i++) {
        var s = i + 1;
        $("ul.dynasty_bar li:nth-child(" + s + ")").css({
            width: n[i] + "%"
        })
    }
    for (i = 1; i <= $(".thumb_list li").length; i++) {
        $("ul.thumb_list li:nth-child(" + i + ")").css({
            display: "none"
        })
    }
    $(".bar_bar").css({
        width: $(".timeline_bar").width() + 40
    });
    $(".year_bar").css({
        width: $(".timeline_bar").width() + 60
    });
    $(".timeline_scroll_overlay").css({
        width: $("ul.timeline_bar li:nth-child(" + 1 + ")").offset().left
    });
    $(".timeline_bar li").mouseover(function(t) {
        var n = $(this).index();
        $(this).css({
            "background-color": "#" + e[n + 1][3]
        });
        var r = $(".timeline_pointer").width() / 2;
        $(".timeline_pointer").fadeIn(1);
        if (t.pageX - r <= 5) {
            $(".timeline_pointer").css({
                left: 5
            })
        } else {
            $(".timeline_pointer").css({
                left: t.pageX - r
            })
        }
        for (i = 1; i <= $(".thumb_list li").length; i++) {
            $("ul.thumb_list li:nth-child(" + i + ")").css({
                display: "none"
            })
        }
        $("ul.thumb_list li:nth-child(" + parseInt(n + 1) + ")").fadeIn(200)
    });
    $(".timeline_bar li").mousemove(function(e) {
        var t = $(".timeline_pointer").width() / 2;
        if (e.pageX - t <= 5) {
            $(".timeline_pointer").css({
                left: 5
            })
        } else {
            $(".timeline_pointer").css({
                left: e.pageX - t
            })
        }
    });
    $(".timeline_bar li").mouseout(function() {
        var t = $(this).index();
        $(this).css({
            "background-color": "#" + e[t + 1][2]
        });
        $(".timeline_pointer").fadeOut(1)
    });
    $(".timeline_bar li").click(function() {
        var e = $(this).index();
        e = e + 1;
        $("html:not(:animated), body:not(:animated)").animate({
            scrollTop: $(".section-" + e).offset().top
        }, 800)
    });
    $(window).resize(function() {
        $(".bar_bar").css({
            width: $(".timeline_bar").width() + 40
        });
        $(".year_bar").css({
            width: $(".timeline_bar").width() + 60
        });
        var e = $(window).scrollTop();
        var t = $(window).height();
        var n = $(document).height();
        var r;
        if (e >= $(".landing").offset().top && e < $(".landing").offset().top + $(".landing").height()) {
            r = parseInt($("ul.timeline_bar li:nth-child(1)").offset().left)
        } else if (e >= $(".intro").offset().top && e < $(".intro").offset().top + $(".intro").height()) {
            r = parseInt($("ul.timeline_bar li:nth-child(1)").offset().left)
        } else {
            for (var i = 1; i <= 12; i++) {
                var s = ".section-" + i;
                var o = $(s).offset().top;
                var u = $(s).height();
                if (e >= o && e < o + u) {
                    screen_rule_check = 1;
                    if (i < 12) {
                        r = parseInt($("ul.timeline_bar li:nth-child(" + i + ")").offset().left) + parseInt($("ul.timeline_bar li:nth-child(" + i + ")").width())
                    } else {
                        r = 100 + "%"
                    }
                }
            }
        }
        $(".timeline_scroll_overlay").css({
            width: r
        })
    });
    $(window).scroll(function() {
        var e = $(window).scrollTop();
        var t = $(window).height();
        var n = $(document).height();
        var r;
        if (e >= $(".landing").offset().top && e < $(".landing").offset().top + $(".landing").height()) {
            r = parseInt($("ul.timeline_bar li:nth-child(1)").offset().left)
        } else if (e >= $(".intro").offset().top && e < $(".intro").offset().top + $(".intro").height()) {
            r = parseInt($("ul.timeline_bar li:nth-child(1)").offset().left)
        } else {
            for (var i = 1; i <= 12; i++) {
                var s = ".section-" + i;
                var o = $(s).offset().top;
                var u = $(s).height();
                if (e >= o && e < o + u) {
                    screen_rule_check = 1;
                    if (i < 12) {
                        r = parseInt($("ul.timeline_bar li:nth-child(" + i + ")").offset().left) + parseInt($("ul.timeline_bar li:nth-child(" + i + ")").width())
                    } else {
                        r = 100 + "%"
                    }
                }
            }
        }
        $(".timeline_scroll_overlay").css({
            width: r
        })
    })
})