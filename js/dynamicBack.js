'use strict';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var allBall = [];
window.onload = function(){
	var _w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var _h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	canvas.width = _w - 5;
	canvas.height = _h - 5;

	//绘制20个小球存放在allBall中
	for(var i=0; i<20;i++){
		var radius = getRandom(2,10);
		var x = getRandom(radius,canvas.width-radius);
		var y = getRandom(radius,canvas.height-radius);
		var speed = Math.random();
		var speedX = getRandom(0,5) > 2 ? speed : -speed;
		var speedY = getRandom(0,5) > 2 ? speed : -speed;

		var gb = new Globe(context,radius,x,y,speedX,speedY);
		gb.draw();
		gb.move();
		allBall.push(gb);
	}
	// console.log(allBall);
	window.requestAnimationFrame(allMove);
}

//获取两个数值的随机数
function getRandom(min,max){
	return parseInt(Math.random()*(max-min)+min+1);
}

function Globe(ctx,radius,x,y,speedX,speedY){
	this.ctx = ctx;
	this.r = radius;
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY = speedY;
	this.color = '#dddddd';
}

//绘制圆
Globe.prototype.draw = function(){
	this.ctx.fillStyle = this.color;
	this.ctx.beginPath();
	this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
	this.ctx.closePath();
	this.ctx.fill();
}

//圆移动
Globe.prototype.move = function(){
	this.x += this.speedX;

	if(this.x <= this.r || this.x >= (canvas.width-this.r)){
		this.speedX = -this.speedX;
	}

	this.y += this.speedY;
	if(this.y <= this.r || this.y >= (canvas.height-this.r)){
		this.speedY = -this.speedY;
	}
};

//
function allMove(){
	context.clearRect(0,0,canvas.width,canvas.height);
	var point = [];
	for(var i=0;i<allBall.length;i++){
		allBall[i].draw();
		allBall[i].move();
		point.push({
			x: allBall[i].x,
			y: allBall[i].y
		});


		for(var j=0;j<i;j++){
			context.strokeStyle = 'rgba(0,0,0,0.01)';
			context.beginPath();
			context.moveTo(point[i-1].x,point[i-1].y);
			context.lineTo(point[j].x,point[j].y);
			context.closePath();
			context.stroke();
		}
	}
	

	window.requestAnimationFrame(allMove);
}

//两点之间的距离
function distance(x1,y1,x2,y2){
	return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

//每点和任意的5个点连接
function connect(point,i){
	for(var j=0;j<5;j++){
		context.strokeStyle = 'rgba(0,0,0,0.01)';
		context.beginPath();
		context.moveTo(point[i].x,point[y].i);
		context.lineTo(point[j].x,point[j].y);
		context.closePath();
		context.stroke();
	}
}