$(document).ready(function() {

// here is where the js will begin

$('.reset').hide();
$('.resizeContent').hide();
$('.placementContent').hide();
$('.faq').hide();
var bordersShown = true;
document.oncontextmenu = function() {return false;};
var mouseDown = false;
var resizeStatus = false;
var placementStatus = false;
var gridSize = '20';

// NAV BAR!! ----------------------------------------------------

// top half -------------------

// setting the background

$('.backgroundButton').click(function() {
	$('.pic').attr('src', userInput.value);
});

// THE SAVE BUTTON FUNCTION WILL GO HERE!!!!!!!!!!!!!!

// faq

$('.faqButton').click(function() {
	$('.gridBody').toggle();
	$('.faq').toggle();
	// toggle the button text
	var $this = $(this);
	$this.toggleClass('faqButton');
	if($this.hasClass('faqButton')) {
		$this.text('FAQ');
	}
	else {
		$this.text('Return');
	}
});

// reset

$('.resetButton').click(function() {
	$('.reset').show();
	$('.yesReset').click(function() {
		$('.reset').hide();
		$('.square').css('background-color', 'transparent');
	})
	$('.noReset').click(function() {
		$('.reset').hide();
	});
});

// bottom half -----------------

// resize

$('.resizeButton').click(function() {
	if(resizeStatus == false) {
		$('.resizeContent').slideDown();
		resizeStatus = true;
	}
	else {
		$('.resizeContent').slideUp();
		resizeStatus = false;
	};
});

// small grid

$('.small').click(function() {
	$('.square').css('height', '10px');
	$('.square').css('width', '10px');
	$('.resizeContent').slideUp();
	resizeStatus = false;
	var smallGrid = true;
});

// medium grid

$('.medium').click(function() {
	$('.square').css('height', '20px');
	$('.square').css('width', '20px');
		$('.resizeContent').slideUp();
		resizeStatus = false;
	var gridSize = '20';
});

// large grid

$('.large').click(function() {
	$('.square').css('height', '35px');
	$('.square').css('width', '35px');
		$('.resizeContent').slideUp();
		resizeStatus = false;
	var gridSize = '35';
});

// toggle background

$('.toggleBackgroundButton').click(function() {
	$('.pic').toggle();
})

// toggle grid 

$('.bordersButton').click(function() {
	if(bordersShown) {
		$('.square').css('border-color', 'transparent');
		bordersShown = false;
	}
	else {
		$('.square').css('border-color', 'black');
		bordersShown = true;
	};
});

// GRID BODY ---------------------------------------------------------------

// repeating the squares



// var width = $('.pic').width();
// console.log(width);
// var height = $('.pic').height();
// console.log(height);


// var repeatNumber = (width * height)/gridSize;
// console.log(repeatNumber);

var squaresArrayAuto = new Array();
for(var i=0; i<4000; i++) {
	squaresArrayAuto.push('<div class="square"></div>');
	$('.squareContainer').append(squaresArrayAuto[i]);
};

// coloring the squares

$('.square').click(function() {
	var newColor = "#" + myColor.value;
	$(this).css('background-color', (newColor));
});

// dragging color

var clicking = false;
$('.square').mousedown(function() {
	clicking = true;
	var newColor = "#" + myColor.value;
	$(this).css('background-color', (newColor));
})

$(document).mouseup(function() {
	clicking = false;
})
// MOUSE CLICK + MOVING LOGIC HERE: 
$('.square').mousemove(function() {
	if(clicking == false) return;
	var newColor = "#" + myColor.value;
	$(this).css('background-color', (newColor));
});

// right click

$('.square').mousedown(function(e) {
	if(e.button == 2) {
		$(this).css('background-color', 'transparent')
		return false;
	}
	return true;
});

// setting the background

$('.backgroundButton').click(function() {
	$('.pic').attr("src", userInput.value);
});

// adding more

$('.addSquaresButton').click(function() {
	var addSquaresValue = addSquares.value;
	console.log(addSquaresValue);
	var squaresArrayPlus = new Array();
	for(var i=0; i<addSquaresValue; i++) {
		squaresArrayPlus.push('<div class="square"></div>');
		$('.squareContainer').append(squaresArrayPlus[i]);
	};
	if(smallGrid) {
		console.log("small");
	}
	else if(gridSize == '10') {
		console.log(10);
	}
	else if(gridSize == '20') {
		console.log(20);
	}
	else {
		console.log(35);
	}
})











// here is where the js will end.
});
