$(document).ready(function() {
    function w(e, t, n, r, i) {
        var s = 50 + "% " + (-r * i + n) + "px";
        return s
    }

    function x() {
        $(".info_lightbox").scrollTo($(".lightbox_content"), 1);
        $(".disclaimer_window").fadeOut(300);
        e = 0;
        if (E == 0) {
            if (C == 1) {
                $(".extra_mughal").hide();
                C = 0;
                $(".mughal_more").html("There were more...");
                $(".mughal_more").css({
                    "margin-top": 0
                });
                $(".info_lightbox").scrollTo($(".mughal_cover_pic"), 800)
            }
            $(".nav_mobile").css({
                left: -200
            });
            if (T != 0) {
                $(".share_box").removeClass("clicked");
                T = 0;
                $(".share_icon").removeClass("hover");
                $(".share_text").removeClass("hover")
            }
            if ($(this).attr("class") == "header_explore") {
                t = $(".header_explore").index(this)
            } else {
                t = $(".section_rule").index(this)
            }
            $("html:not(:animated), body:not(:animated)").animate({
                scrollTop: $(".section_rule").eq(t).offset().top
            }, 400);
            $(".info_cover").css({
                display: "none"
            });
            $(".info_history").css({
                display: "none"
            });
            $(".info_cover").eq(t).css({
                display: "block"
            });
            $(".info_history").eq(t).css({
                display: "block"
            });
            $(".lightbox_bg").addClass("show");
            E = 1;
            $(".plus_photo").addClass("transform");
            $("body").css({
                overflow: "hidden"
            });
            $(".header_explore").css({
                right: parseInt(u + o) + "px"
            });
            $(".share").css({
                right: parseInt(a + o) + "px"
            });
            $(".disclaimer").css({
                "padding-right": parseInt(f + o) + "px"
            });
            $(".info_lightbox").addClass("show");
            $(".lightbox_content").addClass("show");
            $(".back_timeline").addClass("open");
            var n = $(".timeline").width() - o;
            $(".timeline").css({
                width: n
            });
            var r = $(window).width();
            var i = $(window).height();
            var s = 0;
            if (r >= 2e3) {
                s = (2560 - r) / 2
            } else if (r >= 1440 && r < 2e3) {
                s = (2e3 - r) / 2
            } else if (r <= 800 && i >= 800) {
                s = (800 - r) / 2
            } else {
                s = (1440 - r) / 2
            }
            for (var l = 1; l <= 11; l++) {
                $(".section-" + l).css({
                    "background-position": parseInt(-s - Math.round(o / 2)) + "px " + $(".section-" + l).css("backgroundPosition").split(" ")[1]
                })
            }
        }
    }
    document.createElement("nav");
    document.createElement("section");
    document.createElement("footer");
    document.createElement("section");
    var e = 0;
    $(".disclaimer").click(function() {
        if (e == 0) {
            $(".disclaimer_window").fadeIn(300);
            e = 1
        } else {
            $(".disclaimer_window").fadeOut(300);
            e = 0
        }
    });
    $(".disclaimer_close").click(function() {
        $(".disclaimer_window").fadeOut(300);
        e = 0
    });
    if ($(window).height() > 650) {
        $(".section_rule").css({
            height: $(window).height()
        })
    } else {
        $(".section_rule").css({
            height: 650
        })
    }
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });
    var t = 0;
    var n = document.createElement("p");
    n.style.width = "100%";
    n.style.height = "200px";
    var r = document.createElement("div");
    r.style.position = "absolute";
    r.style.top = "0px";
    r.style.left = "0px";
    r.style.visibility = "hidden";
    r.style.width = "200px";
    r.style.height = "150px";
    r.style.overflow = "hidden";
    r.appendChild(n);
    document.body.appendChild(r);
    var i = n.offsetWidth;
    r.style.overflow = "scroll";
    var s = n.offsetWidth;
    if (i == s) s = r.clientWidth;
    document.body.removeChild(r);
    var o = parseInt(i - s);
    var u = parseInt($(".header_explore").css("right"));
    var a = parseInt($(".share").css("right"));
    var f = parseInt($(".disclaimer").css("padding-right"));
    $("div.landing_arrow").click(function() {
        $("html:not(:animated), body:not(:animated)").animate({
            scrollTop: $("nav").offset().top
        }, 800)
    });
    var l = parseInt($(".navigation").height());
    var c = $(".navigation")[0].offsetTop;
    var h = parseInt($(".landing").height());
    var p = [];
    var d = [];
    var v = 16;
    for (var m = 1; m <= v; m++) {
        p.push($(".header-" + m)[0].offsetTop);
        d.push(parseInt($(".section-" + m)[0].offsetTop - $(".header_banner").height()))
    }
    if ($(window).height() > $(".landing").height()) {
        $(".landing").css({
            "background-position": 0 + "px," + 0 + "px"
        })
    }
    $.fn.getBgImage = function(e) {
        var t = 0;
        var n = $(this).css("background-image").replace("url", "").replace("(", "").replace(")", "").replace('"', "").replace('"', "");
        var r = $("<img />");
        r.hide();
        r.bind("load", e);
        $("body").append(r);
        r.attr("src", n);
        $("#tempImg").remove()
    };
    var g = 0;
    var y = $(".landing").css("backgroundPosition").split(" ");
    var b = y[1];
    $(".landing").getBgImage(function() {
        var e = $(this).height();
        if ($(window).height() >= parseInt($("body").css("min-height"))) {
            g = (parseInt($(".landing").height()) - parseInt(e)) * parseInt(b) / 100
        } else {
            g = (parseInt($(window).height()) - parseInt(e)) * parseInt(b) / 100
        }
    });
    var E = 0;
    var S = parseInt($(window).height() - 30 - 63 - 42);
    $(".info_lightbox").css({
        height: S
    });
    $(".lightbox_bg").css({
        height: S
    });
    $(window).scroll(function() {
        if (T != 0) {
            $(".share_box").removeClass("clicked");
            T = 0;
            $(".share_icon").removeClass("hover");
            $(".share_text").removeClass("hover")
        }
        var e = $(document).scrollTop();
        var t = $(window).height();
        if (parseInt(-1 * $(".landing").viewportOffset().top) < $(window).height()) {
            $(".landing").css({
                backgroundPosition: w(1440, 0, g, e, .4)
            })
        }
        if (e >= c) {
            $(".navigation").addClass("fixed");
            $(".intro").css({
                "margin-top": l
            });
            $("footer").css({
                height: 30 + "px"
            });
            $(".timeline").css({
                height: 65 + "px",
                bottom: 30 + "px",
                overflow: "visible"
            })
        } else {
            $(".navigation").removeClass("fixed");
            $(".intro").css({
                "margin-top": 0
            });
            $("footer").css({
                height: 0 + "px"
            });
            $(".timeline").css({
                height: 0 + "px",
                bottom: 0 + "px",
                overflow: "hidden"
            })
        }
        for (var n = 1; n <= v; n++) {
            if (e >= p[n - 1] - l) {
                $(".header-" + n).addClass("fixed");
                $(".section-" + n).css({
                    "margin-top": 42
                });
                if (n == 1) {
                    $(".nav_mobile").addClass("bigscreen")
                }
            } else {
                $(".header-" + n).removeClass("fixed");
                $(".section-" + n).css({
                    "margin-top": 0
                });
                if (n == 1) {
                    $(".nav_mobile").removeClass("bigscreen")
                }
            }
        }
    });
    $(window).resize(function() {
        if ($(window).height() > 650) {
            $(".section_rule").css({
                height: $(window).height()
            })
        } else {
            $(".section_rule").css({
                height: 650
            })
        }
        $.stellar("refresh");
        if ($(window).height() > $(".landing").height()) {
            $(".landing").css({
                "background-position": 50 + "%," + 0 + "px"
            });
            $(".intro").css({
                "background-position": 50 + "%," + 0 + "px"
            })
        } else {
            $(".landing").css({
                "background-position": 50 + "%," + 65 + "%"
            });
            $(".intro").css({
                "background-position": 50 + "%," + 65 + "%"
            })
        }
        $.fn.getBgImage = function(e) {
            var t = 0;
            var n = $(this).css("background-image").replace("url", "").replace("(", "").replace(")", "").replace('"', "").replace('"', "");
            var r = $("<img />");
            r.hide();
            r.bind("load", e);
            $("body").append(r);
            r.attr("src", n);
            $("#tempImg").remove()
        };
        g = 0;
        y = $(".landing").css("backgroundPosition").split(" ");
        b = y[1];
        $(".landing").getBgImage(function() {
            var e = $(this).height();
            if ($(window).height() >= parseInt($("body").css("min-height"))) {
                g = (parseInt($(".landing").height()) - parseInt(e)) * parseInt(b) / 100
            } else {
                g = (parseInt($(window).height()) - parseInt(e)) * parseInt(b) / 100
            }
        });
        c = $(".navigation")[0].offsetTop;
        h = parseInt($(".landing").height());
        if (c == 0) {
            c = h
        }
        var e = $(document).scrollTop();
        if (e >= c) {
            $(".navigation").addClass("fixed");
            $(".intro").css({
                "margin-top": l
            });
            $("footer").css({
                height: 30 + "px"
            })
        } else {
            $(".navigation").removeClass("fixed");
            $(".intro").css({
                "margin-top": 0
            });
            $("footer").css({
                height: 0 + "px"
            })
        }
        for (var n = 1; n <= v; n++) {
            p[n - 1] = $(".header-" + n)[0].offsetTop;
            d[n - 1] = parseInt($(".section-" + n)[0].offsetTop - $(".header_banner").height());
            if (p[n - 1] == l) {
                p[n - 1] = d[n - 1]
            }
            if (e >= p[n - 1] - l) {
                $(".header-" + n).addClass("fixed");
                $(".section-" + n).css({
                    "margin-top": 42
                });
                if (n == 1) {
                    $(".nav_mobile").addClass("bigscreen")
                }
            } else {
                $(".header-" + n).removeClass("fixed");
                $(".section-" + n).css({
                    "margin-top": 0
                });
                if (n == 1) {
                    $(".nav_mobile").removeClass("bigscreen")
                }
            }
        }
        var r = $(".rg-image-wrapper").css("width");
        var i = parseInt(r) * 450 / 880;
        $(".rg-image").css({
            height: i
        });
        S = parseInt($(window).height() - 30 - 63 - 42);
        $(".info_lightbox").css({
            height: S
        });
        $(".lightbox_bg").css({
            height: S
        });
        if (E == 1) {
            $("html:not(:animated), body:not(:animated)").animate({
                scrollTop: $(".section_rule").eq(t).offset().top
            }, 1)
        }
        if (E == 1) {
            var s = $(window).width();
            var u = $(window).height();
            var a = 0;
            if (s >= 2e3) {
                a = (2560 - s) / 2
            } else if (s >= 1440 && s < 2e3) {
                a = (2e3 - s) / 2
            } else if (s <= 800 && u >= 800) {
                a = (800 - s) / 2
            } else {
                a = (1440 - s) / 2
            }
            $(".delhi_section").css({
                "background-position": parseInt(-a - Math.round(o / 2)) + "px 0%"
            });
            $(".timeline").css({
                width: 100 + "%"
            })
        }
    });
    $(".section_rule").click(x);
    $(".header_explore").click(x);
    $(".info_lightbox").click(function(t) {
        if ($(t.target).closest(".lightbox_content").length != 0) {} else {
            $(".disclaimer_window").fadeOut(300);
            e = 0;
            $(".nav_mobile").css({
                left: -140
            });
            N = 0;
            if (T != 0) {
                $(".share_box").removeClass("clicked");
                T = 0;
                $(".share_icon").removeClass("hover");
                $(".share_text").removeClass("hover")
            }
            E = 0;
            $(".info_lightbox").removeClass("show");
            $(".lightbox_content").removeClass("show");
            $(".lightbox_bg").removeClass("show");
            $(".plus_photo").removeClass("transform");
            $("body").css({
                "overflow-y": "scroll"
            });
            $(".header_explore").css({
                right: u + "px"
            });
            $(".share").css({
                right: a + "px"
            });
            $(".disclaimer").css({
                "padding-right": f + "px"
            });
            for (var n = 1; n <= 11; n++) {
                $(".section-" + n).css({
                    "background-position": 50 + "% " + $(".section-" + n).css("backgroundPosition").split(" ")[1]
                })
            }
            $(".back_timeline").removeClass("open");
            $(".timeline").css({
                width: 100 + "%"
            })
        }
    });
    $(".back_timeline").click(function(t) {
        $(".disclaimer_window").fadeOut(300);
        e = 0;
        $(".nav_mobile").css({
            left: -140
        });
        N = 0;
        if (T != 0) {
            $(".share_box").removeClass("clicked");
            T = 0;
            $(".share_icon").removeClass("hover");
            $(".share_text").removeClass("hover")
        }
        E = 0;
        $(".info_lightbox").removeClass("show");
        $(".lightbox_content").removeClass("show");
        $(".lightbox_bg").removeClass("show");
        $(".plus_photo").removeClass("transform");
        $("body").css({
            "overflow-y": "scroll"
        });
        $(".header_explore").css({
            right: u + "px"
        });
        $(".share").css({
            right: a + "px"
        });
        $(".disclaimer").css({
            "padding-right": f + "px"
        });
        for (var n = 1; n <= 11; n++) {
            $(".section-" + n).css({
                "background-position": 50 + "% " + $(".section-" + n).css("backgroundPosition").split(" ")[1]
            })
        }
        $(".back_timeline").removeClass("open");
        $(".timeline").css({
            width: 100 + "%"
        })
    });
    $(".share_text").mouseover(function() {
        $(".share_icon").addClass("hover");
        $(".share_text").addClass("hover")
    });
    $(".share_text").mouseout(function() {
        if (T == 0) {
            $(".share_icon").removeClass("hover");
            $(".share_text").removeClass("hover")
        }
    });
    var T = 0;
    $(".share_text").click(function() {
        if (T == 0) {
            $(".share_box").addClass("clicked");
            T = 1
        } else {
            $(".share_box").removeClass("clicked");
            T = 0;
            $(".share_icon").removeClass("hover");
            $(".share_text").removeClass("hover")
        }
    });
    var N = 0;
    $("div.nav_mobile_symbol").click(function() {
        if (N == 0) {
            $(".nav_mobile").css({
                left: 0
            });
            N = 1
        } else {
            $(".nav_mobile").css({
                left: -140
            });
            N = 0
        }
    });
    $(".nav_mobile ul li").click(function() {
        var e = $(this).index();
        e = e + 1;
        $("html:not(:animated), body:not(:animated)").animate({
            scrollTop: $(".section-" + e).offset().top
        }, 800);
        $(".nav_mobile").css({
            left: -140
        });
        N = 0
    });
    var C = 0;
    $(".mughal_more").click(function() {
        if (C == 0) {
            $(".extra_mughal").show();
            C = 1;
            $(".mughal_more").html("Show less");
            $(".mughal_more").css({
                "margin-top": 30
            });
            $(".info_lightbox").scrollTo($(".extra_mughal_first"), 800)
        } else {
            $(".extra_mughal").hide();
            C = 0;
            $(".mughal_more").html("There were more...");
            $(".mughal_more").css({
                "margin-top": 0
            });
            $(".info_lightbox").scrollTo($(".mughal_cover_pic"), 800)
        }
    })
})
