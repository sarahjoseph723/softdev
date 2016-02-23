var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var clicks = 0;
var m = [0,0];
var quad = 0;
var circ = 1;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var circle = function(e) {
    ctx.fillStyle ="rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+")";
    var rect = c.getBoundingClientRect();
    //draw circle
    if (circ == 1) { 
	ctx.beginPath();
	ctx.arc(e.clientX-rect.left, e.clientY-rect.top,15,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
    }
    //draw rectangle
    else {
	ctx.fillRect(e.clientX-rect.left, e.clientY-rect.top,20,20);
	ctx.strokeStyle = "black";
	ctx.strokeRect(e.clientX-rect.left, e.clientY-rect.top,20,20);
    }
    console.log(clicks);
    //keep track of first one
    if (clicks == 0) {
	clicks ++;
	m = [e.clientX-rect.left, e.clientY-rect.top];
    }
    else {
	ctx.beginPath();
	//position starting line at center of rectangle
	if (circ == 0) {
	    m[0] += 10;
	    m[1] += 10;
	}
	ctx.moveTo(m[0],m[1]);
	if (quad == 1) {
	    if (circ == 1) { //circle 
		ctx.quadraticCurveTo(250,250,e.clientX-rect.left, e.clientY-rect.top);
	    }
	    else { //position rectangle lines at center of rectangle
		ctx.quadraticCurveTo(250,250,e.clientX-rect.left+10, e.clientY-rect.top+10);
	    }
	}
	else {
	    if (circ == 1) {
		ctx.lineTo(e.clientX-rect.left, e.clientY-rect.top);
	    }
	    else { //position rectangle lines at center of rectangle
		ctx.lineTo(e.clientX-rect.left+10, e.clientY-rect.top+10);
	    }
	}
	ctx.stroke();
	m = [e.clientX-rect.left, e.clientY-rect.top];
    }
};

var rectangle = function(e) {
    var rect = c.getBoundingClientRect();
    ctx.fillStyle = "rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+")";
    ctx.fillRect(e.clientX-rect.left, e.clientY-rect.top,20,20);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
};



c.addEventListener('click', circle);
//c.addEventListener('click', rectangle);

var quadCallBack = function(e) {
    if (quad == 0) {
	quad = 1;
    }
    else {
	quad = 0;
    }
};

var setQuad = document.getElementById("q");
q.addEventListener('click', quadCallBack);

var clearButtonCallBack = function(e) {
    ctx.clearRect(0,0,500,500);
    clicks = 0;
    circ = 1;
    quad = 0;
};

var button = document.getElementById("b");
b.addEventListener('click', clearButtonCallBack);   

var setShapeCallBack = function(e) {
    if (circ == 1) {
	circ = 0;
    }
    else {
	circ = 1;
    }
};

var setShape = document.getElementById("s");
s.addEventListener('click', setShapeCallBack);