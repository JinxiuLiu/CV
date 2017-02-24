$(function() {
    // fullpage 配置
    $('#dowebok').fullpage({
        sectionsColor: ['#0B3042', '#356869', '#75AC8F', '#A1CFA1', "#B7CF91", "#F4F4F6"],
        navigation: true,
        navigationTooltips: ['首页', '关于我', '专业技能', '我的作品', '联系我'],
        loopBottom: true,
        resize: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        // 页面生成后的回调函数
        afterRender: function() {
            $('#home_one').addClass('animated bounceInRight').next().addClass('animated bounceInLeft');
            $('.home_portrait').addClass('animated zoomIn');
            $(".home_info").animate({ width: "600px", marginTop: "0", marginBottom: "0" }, 700, 'easeOutElastic', function() {
                $(".home_info1").eq(0).animate({ bottom: "0" }, 700, function() {
                    $(".home_info1").eq(1).animate({ bottom: "0" }, 700)
                });
            });

        },
        // 滚动到某一屏后的回调函数
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                $(".about_name").html("<h3>关 于 我</h3>")
                    .animate({ width: "300px", height: '80px' }, 600, function() {
                        $('.about_info_part1').animate({ opacity: '1' }, 400, function() {
                            $('.about_info_part4').animate({ opacity: '1' }, 400, function() {
                                $('.about_info_part2').animate({ opacity: '1' }, 400, function() {
                                    $('.about_info_part5').animate({ opacity: '1' }, 400, function() {
                                        $('.about_info_part3').animate({ opacity: '1' }, 400, function() {
                                            $('.about_info_part6').animate({ opacity: '1' }, 400);
                                        })
                                    })
                                })
                            })
                        })
                    });
            }
            // 第三屏 圆形进度条
            if (index == 3) {
                $('.skiil_name').animate({ width: "300px", height: '80px' }, 800, function() {
                    $(this).html('<h3>十八般武艺,熟能生巧</h3>');
                    $('.skiil_name h3').animate({ top: "0px" }, 500, function() {
                        $(".skiil_introduce p").eq(0).animate({ opacity: "1" }, 700, function() {
                            $(".skiil_introduce p").eq(1).animate({ opacity: "1" }, 700, function() {
                                $('.skiil_info').animate({ bottom: "0" }, 500, function() {
                                    $('.skiil_info_html').circleProgress({
                                        size: 120,
                                        value: 0.9,
                                        startAngle: -Math.PI / 2 * 1,
                                        lineCap: 'round',
                                        fill: { gradient: ['#02B3E5', '#0579E5'] }
                                    }).on('circle-animation-progress', function(event, progress) {
                                        $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
                                    });
                                    $('.skiil_info_css').circleProgress({
                                        size: 120,
                                        value: 0.8,
                                        startAngle: -Math.PI / 4 * 3,
                                        lineCap: 'round',
                                        fill: { gradient: ['#FDF356', '#D8F71A'] }
                                    }).on('circle-animation-progress', function(event, progress) {
                                        $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
                                    });
                                    $('.skiil_info_js').circleProgress({
                                        size: 120,
                                        value: 0.6,
                                        startAngle: -Math.PI,
                                        lineCap: 'round',
                                        fill: { gradient: ['#ffa500', '#FFD600'] }
                                    }).on('circle-animation-progress', function(event, progress) {
                                        $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
                                    });
                                    $('.skiil_info_bs').circleProgress({
                                        size: 120,
                                        value: 0.6,
                                        startAngle: -Math.PI / 3 * 2,
                                        lineCap: 'round',
                                        fill: { gradient: ['#FC00FE', '#FF00AF'] }
                                    }).on('circle-animation-progress', function(event, progress) {
                                        $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
                                    });
                                    $('.skiil_info_ag').circleProgress({
                                        size: 120,
                                        value: 0.5,
                                        startAngle: Math.PI,
                                        lineCap: 'round',
                                        fill: { gradient: ['#27963A', '#1AE864'] }
                                    }).on('circle-animation-progress', function(event, progress) {
                                        $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
                                    });
                                });
                            });
                        });
                    });

                });

            }
            if (index == 4) {
                $('.works_title h3').animate({ width: "300px", height: '80px' }, 700 ,function () {
                    $(this).html('我 的 作 品');
                    $('.works_title a').animate({opacity: '1'}, 700).addClass('animated bounceInDown');
                });
                setTimeout(function() {
                    $('#box1').css('display', 'none').removeClass('hideing');
                    $("#box2").addClass('hideing').css('display', 'block');
                }, 10);
                setTimeout(function() {
                    $('#box2').addClass('showing');
                }, 80);
                setTimeout(function() {
                    $('#box2').removeClass('hideing').removeClass('showing');
                }, 1400);
            }
        }
    });

    // 底部小箭头单击事件
    $('.arrow').on('click', function() {
        $.fn.fullpage.moveSectionDown();
    });

    // 第四屏 换一换 动画
    $(".works_title a").on('click', function() {
        if ($('#box1').css('display') === 'block') {
            $("#box1").addClass('hideing');
            setTimeout(function() {
                $('#box1').css('display', 'none').removeClass('hideing');
                $("#box2").addClass('hideing').css('display', 'block');
            }, 500);
            setTimeout(function() {
                $('#box2').addClass('showing');
            }, 540);
            setTimeout(function() {
                $('#box2').removeClass('hideing').removeClass('showing');
            }, 1400);
        } else {
            $("#box2").addClass('hideing');
            setTimeout(function() {
                $('#box2').css('display', 'none').removeClass('hideing');
                $("#box1").addClass('hideing').css('display', 'block');
            }, 500);
            setTimeout(function() {
                $('#box1').addClass('showing');
            }, 540);
            setTimeout(function() {
                $('#box1').removeClass('hideing').removeClass('showing');
            }, 1400);
        }
    });
});
