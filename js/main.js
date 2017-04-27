'use strict';

//鼠标滑过效果
$('.jingjing').on('click',function(){
	var curWidth = parseFloat($('#navigator').css('width'));
	console.log(curWidth);

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
