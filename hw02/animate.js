var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle= "#FF0000";
var frameid;

var drawC = function() {

    var radius = 0;
    var growing = true;
    
    var animCode = function() {

        ctx.clearRect(0,0,c.width,c.height);
	
	if (growing) {
	    radius +=1;
	}
	else {
	    radius -=1;
	}
	if (radius == 250) {
	    growing = false;
	}
	if (radius == 0) {
	    growing = true;
	}
	ctx.beginPath();
	ctx.arc(250,250,radius, 0, 2*Math.PI);
	ctx.fill();
	frameid = window.requestAnimationFrame(animCode);
    };

    animCode();
};

var stopIt = function() {
    window.cancelAnimationFrame(frameid)
};

var s = document.getElementById("s");
s.addEventListener("click", stopIt);

var b = document.getElementById("b");
b.addEventListener("click",drawC);
