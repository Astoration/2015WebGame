var imgBackground = new Image();
imgBackground.src="bg.jpg";
var x=0, y=0;
function drawScreen(){
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	//Context.fillStyle="#fff";
	//Context.fillRect(0,0,1000,700);
Context.drawImage(imgBackground,0,0);
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
Context.arc(500*0.3+x,400*0.3+y,150*0.3,0,2*Math.PI,true);
Context.fillStyle="#ffdc9c";
Context.fill();
Context.beginPath();
Context.arc(500*0.3+x,300*0.3+y,200*0.3,0,2*Math.PI,true);
Context.fillStyle="#ffdc9c";
Context.fill();
Context.beginPath();
Context.arc(500*0.3+x,200*0.3+y,200*0.3,1*Math.PI,2*Math.PI,false);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(400*0.3+x,300*0.3+y,30*0.3,0,2*Math.PI,true);
Context.fillStyle="#fff";
Context.fill();
Context.beginPath();
Context.arc(600*0.3+x,300*0.3+y,30*0.3,0,2*Math.PI,true);
Context.fillStyle="#fff";
Context.fill();
Context.beginPath();
Context.arc(400*0.3+x,300*0.3+y,20*0.3,0,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(600*0.3+x,300*0.3+y,20*0.3,0,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(500*0.3+x,400*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#f00";
Context.fill();
Context.beginPath();
Context.lineWidth=2;
Context.strokeStyle="#000";
Context.strokeRect(350*0.3+x,260*0.3+y,100*0.3,80*0.3);
Context.strokeRect(550*0.3+x,260*0.3+y,100*0.3,80*0.3);
Context.beginPath();
Context.moveTo(370*0.3+x,270*0.3+y);
Context.lineTo(430*0.3+x,270*0.3+y);
Context.strokeStyle="#000";
Context.stroke();
Context.beginPath();
Context.moveTo(570*0.3+x,270*0.3+y);
Context.lineTo(630*0.3+x,270*0.3+y);
Context.strokeStyle="#000";
Context.stroke();
Context.beginPath();
Context.arc(350*0.3+x,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(450*0.3+x,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(550*0.3+x,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.arc(650*0.3+x,200*0.3+y,50*0.3,1*Math.PI,2*Math.PI,true);
Context.fillStyle="#000";
Context.fill();
Context.beginPath();
Context.moveTo(500*0.3+x,300*0.3+y);
Context.lineTo(470*0.3+x,370*0.3+y);
Context.stroke();
}
imgBackground.addEventListener("load",drawScreen,false);
function onkeypress(e){
	var code;
	if(e.keyCode){
		code=e.keyCode;
		//document.write(""+e.keyCode);
	}
	switch(code){
	case 119:
	y-=15;
	break;
	case 115:
	y+=15;
	break;
	case 97:
	x-=15;
	break;
	case 100:
	x+=15;
	break;
	}
	drawScreen();
}
window.addEventListener("keypress",onkeypress,false);