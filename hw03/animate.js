//dvd animation

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

ctx.fillStyle= "#FF0000";
var frameid;

var drawR = function() {

    var dx = 2;
    var dy = 2;
    var x = 250;
    var y = 250;
    
    var img = new Image();
    img.src = 'dvd.png'
    
    var animCode = function() {
	//console.log(x);
	//console.log(y);
        ctx.clearRect(0,0,c.width,c.height);
	
	if (x + dx > c.width-100 || x + dx < 0) {
	    dx = -dx;
	}
	if (y + dy > c.height-51 || y + dy < 0) {
	    dy = -dy;
	}	
	//ctx.fillRect(x,y,100,51);
	ctx.drawImage(img,x,y);
	x += dx;
	y += dy;
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
b.addEventListener("click",drawR);
