$(function() {
	// fullpage 配置
    $('#dowebok').fullpage({
        sectionsColor: ['#0B3042', '#356869', '#75AC8F', '#A1CFA1', "#B7CF91", "#F4F4F6"],
        navigation: true,
        navigationTooltips: ['首页', '关于我', '专业技能', '我的经历', '我的作品', '联系我'],
        loopBottom: true,
        resize: true,
        afterLoad: function (anchorLink, index) {
        	// 第三屏 圆形进度条
        	if (index == 3) {
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
        	}
        }
    });
});
