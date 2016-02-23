var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle= "#FF0000";

var drawC = function() {

    var radius = 0;
    var growing = true;
    
    if (growing) {
	radius +=1;
    }
    else {
	radius -=1;
    }

    if (radius == c.width/2) {
	growing = false;
    }

    var animCode = function() {
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(250,250,radius, 0, 2*Math.PI);
	ctx.fill();
	radius += 1;
	window.requestAnimationFrame(animCode);
    };

    animCode();
};

var b = document.getElementById("b");
b.addEventListener("click",drawC);