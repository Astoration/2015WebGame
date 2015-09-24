var imgBackground = new Image();
imgBackground.src="bg.jpg";
var imgBall = new Image();
imgBall.src="ball.png";
function AtkBall(_x,_y){
	this.x=_x;
	this.y=_y;
}
AtkBall.prototype.Intersect = function(){
	var player_x=x;
	var player_y=y;
	if(
	this.x<=player_x+102
	&&
	this.x+50>=player_x
	&&
	this.y<=player_y+166
	&&
	this.y+50>=player_y
	)
	return true;
	else return false;
};
var ball = new Array();
var IntervalID;
var x=500, y=200;
var deg=0;
//142 x 186
var theCanvas=document.getElementById("GameCanvas");
var Context=theCanvas.getContext("2d");
var GameState=0;
var GameReady=0;
var GameStart=1;
var GameOver=2;
function drawScreen(){
Context.save();
	//Context.fillStyle="#fff";
	//Context.fillRect(0,0,1000,700);
Context.scale(1024.0/620.0,1024.0/620.0);
Context.drawImage(imgBackground,0,0);
Context.scale(620.0/1024.0,620.0/1024.0);
Context.rotate(deg);
//Context.beginPath();
//Context.moveTo(10,10);
//Context.lineTo(150,100);
//Context.strokeStyle="#000";
//Context.stroke();

//Context.beginPath();
//Context.arc(200,30,50,1*Math.PI,2*Math.PI,true);
//Context.fillStyle="#ff0";
//Context.fill();
Context.beginPath();
Context.arc(500*0.3+x-112,400*0.3+y,150*0.3,0,2*Math.PI,true);
Context.fillStyle="#ffdc9c";
Context.fill();
Context.beginPath();
Context.arc(500*0.3+x-112,300*0.3+y,200*0.3,0,2*Math.PI,true);
Context.fillStyle="#ffdc9c";
Context.fill();
Context.beginPath();
Context.arc(500*0.3+x-112,200*0.3+y,200*0.3,1*Math.PI,2*Math.PI,false);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(400*0.3+x-112,300*0.3+y,30*0.3,0,2*Math.PI,true);
Context.fillStyle="#fff";
Context.fill();
Context.beginPath();
Context.arc(600*0.3+x-112,300*0.3+y,30*0.3,0,2*Math.PI,true);
Context.fillStyle="#fff";
Context.fill();
Context.beginPath();
Context.arc(400*0.3+x-112,300*0.3+y,20*0.3,0,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(600*0.3+x-112,300*0.3+y,20*0.3,0,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(500*0.3+x-112,400*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#f00";
Context.fill();
Context.beginPath();
Context.lineWidth=2;
Context.strokeStyle="#000";
Context.strokeRect(350*0.3+x-112,260*0.3+y,100*0.3,80*0.3);
Context.strokeRect(550*0.3+x-112,260*0.3+y,100*0.3,80*0.3);
Context.beginPath();
Context.moveTo(370*0.3+x-112,270*0.3+y);
Context.lineTo(430*0.3+x-112,270*0.3+y);
Context.strokeStyle="#000";
Context.stroke();
Context.beginPath();
Context.moveTo(570*0.3+x-112,270*0.3+y);
Context.lineTo(630*0.3+x-112,270*0.3+y);
Context.strokeStyle="#000";
Context.stroke();
Context.beginPath();
Context.arc(350*0.3+x-112,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(450*0.3+x-112,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(550*0.3+x-112,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(650*0.3+x-112,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.moveTo(500*0.3+x-112,300*0.3+y);
Context.lineTo(470*0.3+x-112,370*0.3+y);
Context.stroke();
for(var i=0;i<ball.length;i++){
	Context.drawImage(imgBall,ball[i].x,ball[i].y);
}
Context.restore();
}
function onload(){
	drawScreen();
	//Context.scale(3);
	Context.font="30px Gullim";
	Context.fillStyle="#f00";
	Context.fillText("Ready?",500,500);
	Context.restore();
}
function newBalls(){
	for(var i=0; i<20;i++){
				ball.push(new AtkBall(Math.round(Math.random()*1024),Math.round(Math.random()*500)));
			}
}
function delBalls(){
	while(ball.length!=0){
			ball.pop();
		}
}
function CheckAll(){
	for(var i=0;i<ball.length; i++){
		var Sense= ball[i].Intersect();
		if(Sense)return true;
	}
	return false;
}
imgBackground.addEventListener("load",onload,false);
function onkeypress(e){
	var code;
	if(e.keyCode){
		code=e.keyCode;
		//document.write(""+e.keyCode);
	}
	if(GameState==GameReady){
		if(code==13){
			GameState=GameStart;
			drawScreen();
			var Checks=true;
			newBalls();
			Checks=CheckAll();
			while(Checks){
				delBalls();
				newBalls();
				Checks=CheckAll();
			}
			IntervalID= setInterval(CheckBall,1000.0/60.0);
		}
	}
	else if(GameState==GameStart){
		switch(code){
			case 119:
				y-=15;
				if(y<=-10)y+=15;
				break;
			case 115:
				y+=15;
				if(y>=420)y-=15;
				break;
			case 97:
				x-=15;
				if(x<=(-100+112))x+=15;
				break;
			case 100:
				x+=15;
				if(x>=(824+112))x-=15;
				break;
			}
		drawScreen();
	}
	else if(GameState==GameOver){
		if(code==13){
			GameState=GameReady;
			onload();
		}
	}
}
function CheckBall(){
	for(var i=0;i<ball.length;i++){
	var randomX=Math.round(10*Math.sin(Math.random()*100+1));
	var randomY=Math.round(10*Math.sin(Math.random()*100+1));
		if(ball[i].x+randomX<0||ball[i].x+randomX>1024)ball[i].x+=-1*randomX;
		else ball[i].x+=randomX;
		if(ball[i].y+randomY<0||ball[i].y+randomY>522)ball[i].y+=-1*randomY;
		else ball[i].y+=randomY;
		var Sense=ball[i].Intersect();
		if(Sense)GameState=GameOver;
	}
	drawScreen();
	if(GameState==GameOver){
		clearInterval(IntervalID);
		Context.font="30px Gullim";
		Context.fillStyle="#f00";
		Context.fillText("Game Over",500,500);
		Context.restore();
		
		delBalls();
	}
}

window.addEventListener("keypress",onkeypress,false);