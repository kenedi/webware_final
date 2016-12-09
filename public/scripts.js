
console.log("Welcome to assignment 6!");

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
var sixth = document.getElementById('sixth');


/* FIRST DIV - CLICK */
first.addEventListener(
	'click',
	function(e){
		first.innerHTML="<p>Good Job!</p>";
		second.innerHTML="<p>Now double click here!<p>";
	}
);

/* SECOND DIV - DOUBLE CLICK */
second.addEventListener(
	'dblclick',
	function(e){
		second.innerHTML="<p>There they are!</p>";
		third.style.display = "inline-block";
		fourth.style.display = "inline-block";
		fifth.style.display = "inline-block";
	}
);

/* THIRD DIV - CHANGE COLOR ON KEY PRESS*/
function newColor() {
	var letters = '0123456789ABCDEF';
	for (var i = 0; i < 6; i++ ) {
		'#"' += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};


third.addEventListener(
	'keypress',
	function(e){
		third.style.backgroundColor = newColor();
	}
);

/* FOURTH DIV - HOVER TO SHOW SIXTH, CLICK TO KEEP IT */
fourth.addEventListener(
	'mouseenter',
	function(e){
		fourth.innerHTML="<p>Or click to keep it</p>";
		sixth.style.display = "inline-block;";
	}
);

fourth.addEventListener(
	'mouseleave',
	function(e){
		fourth.innerHTML="<p>Hover to see the last box</p>";
		sixth.style.display = "none";
	}
);

/* FIFTH DIV - DRAG AND DROP ANYWHERE */
function startDrag(e) {
	// determine event object
	if (!e) {
		var e = window.event;
	}
	if(e.preventDefault) e.preventDefault();

	// IE uses srcElement, others use target
	targ = e.target ? e.target : e.srcElement;

	if (targ.className != 'drag') {return};
	// calculate event X, Y coordinates
	offsetX = e.clientX;
	offsetY = e.clientY;

	// assign default values for top and left properties
	if(!targ.style.left) { targ.style.left='0px'};
	if (!targ.style.top) { targ.style.top='0px'};

	// calculate integer values for top and left 
	// properties
	coordX = parseInt(targ.style.left);
	coordY = parseInt(targ.style.top);
	drag = true;

	// move div element
	document.onmousemove=dragDiv;
	return false;
	
};

function dragDiv(e) {
	if (!drag) {return};
	if (!e) { var e= window.event};
	// var targ=e.target?e.target:e.srcElement;
	// move div element
	targ.style.left=coordX+e.clientX-offsetX+'px';
	targ.style.top=coordY+e.clientY-offsetY+'px';
	return false;
};

function stopDrag() {
	drag=false;
};

window.onload = function() {
	document.onmousedown = startDrag;
	document.onmouseup = stopDrag;
};

/* SIXTH DIV - ALL DONE */
sixth.addEventListener(
	'mousedown',
	function(e){
		alerat("That's all there is!");
	}
);