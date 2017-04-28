'use strict';

//鼠标滑过效果
$('.jingjing').on('mouseover',function(){
	$(this).css({'right' : '20px'});
	var timer = setTimeout(function(){
		$('.jingjing').html('点下<br/>有<br/>惊喜');
		clearTimeout(timer);
	},1000);
});

$('.jingjing').on('mouseout',function(){
	$(this).css({'right' : '-50px'});
	$(this).html('静静<br/>地<br/>离开');
	var timer = setTimeout(function(){
		$('.jingjing').html('静静<br/>地<br/>看着');
		clearTimeout(timer);
	},1000);
});

//点击事件
var isCome = true;
$('.jingjing').on('click',function(){
	if(isCome){
		isCome = false;
		$('.awaken').css({'animation': 'awaking 5s linear 2s forwards'});
		$('.alternate').css({'animation': 'change 5s linear 2s forwards'});
		var timer = setTimeout(function(){
			$('.awaken').css({
				'top' : '200px',
				'right' : '0px'
			});
			$('.alternate').css({
				'bottom' : '200px',
				'right' : '0px'
			});
			clearTimeout(timer);
		},5000);
	}else{
		isCome = true;
		$('.awaken').css({'animation': 'reawaking 5s linear 2s forwards'});
		$('.alternate').css({'animation': 'rechange 5s linear 2s forwards'});
		var timer = setTimeout(function(){
			$('.awaken').css({
				'top' : '-85px',
				'right' : '800px'
			});
			$('.alternate').css({
				'bottom' : '-85px',
				'right' : '800px'
			});
			clearTimeout(timer);
		},5000);
	}
	
});

$('.awaken').on('click',function(){
	var curWidth = parseFloat($('#navigator').css('width'));

	if(curWidth == 0){
		$('#navigator').css({
			'width' : '500px',
			'height' : '250px',
			'opacity' : '0.6',
			'transform' : 'rotate(360deg)',
			'-webkit-transform' : 'rotate(360deg)'
		});
	}else{
		$('#navigator').css({
			'width' : '0px',
			'height' : '0px',
			'opacity' : '0',
			'transform' : 'rotate(-360deg)',
			'-webkit-transform' : 'rotate(-360deg)'
		});
	}
});
