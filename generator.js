$(document).ready(function() {
	var bordersShown = true;
	document.oncontextmenu = function() {return false;};
	var mouseDown = false;
	$('.faq').hide();
	$('.dropDownContent').hide();
	var dropDownStatus = false;

// repeating the squares 

	var squaresArray = new Array();
	for(var i=0; i<3000; i++) {
		squaresArray.push('<div class = "square"></div>');
		$('.squareContainer').append(squaresArray[i]);
	}

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
	});

	$(document).mouseup(function() {
		clicking = false;
	})
		// mouse click + moving logic here:
	$('.square').mousemove(function() {
		if(clicking == false) return;
		var newColor = "#" + myColor.value;
		$(this).css('background-color', (newColor));

	});

// setting the background

	$('.backgroundButton').click(function() {
		$('.pic').attr("src", userInput.value);
	});

// toggling the background

	$('.toggleBackgroundButton').click(function() {
		$('.pic').toggle();
	})

// right click function

	$('.square').mousedown(function(e) {
		if(e.button == 2) {
			$(this).css('background-color', 'transparent')
			return false;
		}
		return true;
	});
	
// toggle borders 

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

// small grid

	$('.small').click(function() {
		$('.square').css('height', '10px');
		$('.square').css('width', '10px');

	});

// medium grid

	$('.medium').click(function() {
		$('.square').css('height', '20px');
		$('.square').css('width', '20px');
	});

// large grid

	$('.large').click(function() {
		$('.square').css('height', '35px');
		$('.square').css('width', '35px');
	});

// FAQ

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
			$this.css('margin-top', '-30px');
			$this.css('margin-left', '310px');
	
		}
	});


// grid resize

	$('.dropDown').click(function() {
		if(dropDownStatus == false) {
			$('.dropDownContent').slideDown();
			dropDownStatus = true;
			return true;
		}
		else {
			$('.dropDownContent').slideUp();
			dropDownStatus = false;
		};
	});

// picture placement

	$('.placement').click(function() {
		if(dropDownStatus == false) {
			$('.placementContent').slideDown();
			dropDownStatus = true;
			return true;
		}
		else {
			$('.placementContent').slideUp();
			dropDownStatus = false;
		};
	});

// reset

	$('.resetButton').click(function() {
		
		$('.square').css('background-color', 'transparent');
	})

});

