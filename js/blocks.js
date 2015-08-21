
$(document).ready(function() {



    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 671) {
            console.log("screen width is less than 672");

	$("#buttonStrategy").click(function(){
    	$("#blockStrategy").insertAfter("#wrapStrategy").slideDown(600, 'easeOutCubic');
		return false;
	});


	$("#buttonDigital").click(function(){
    	$("#blockDigital").insertAfter("#wrapDigital").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonPublishing").click(function(){
		$("#blockPublishing").insertAfter("#wrapPublishing").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonCreative").click(function(){
    	$("#blockCreative").insertAfter("#wrapCreative").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonBrand").click(function(){
    	$("#blockBrand").insertAfter("#wrapBrand").slideDown(600, 'easeOutCubic');
		return false;
	});




        }
        else if (windowSize <= 1023) {
            console.log("screen width is less than 1024 but greater than or equal to 672");
	$("#buttonStrategy").click(function(){
    	$("#blockStrategy").insertAfter("#wrapDigital").slideDown(600, 'easeOutCubic');
		return false;
	});


	$("#buttonDigital").click(function(){
    	$("#blockDigital").insertAfter("#wrapDigital").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonPublishing").click(function(){
		$("#blockPublishing").insertAfter("#wrapHeritage").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonCreative").click(function(){
    	$("#blockCreative").insertAfter("#wrapBrand").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonBrand").click(function(){
    	$("#blockBrand").insertAfter("#wrapBrand").slideDown(600, 'easeOutCubic');
		return false;
	});


        }
        else if (windowSize >= 1024) {
            console.log("screen width is greater than or equal to 1024");


 	$("#buttonStrategy").click(function(){
    	$("#blockStrategy").insertAfter("#wrapPublishing").slideDown(600, 'easeOutCubic');
		return false;
	});


	$("#buttonDigital").click(function(){
    	$("#blockDigital").insertAfter("#wrapPublishing").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonPublishing").click(function(){
		$("#blockPublishing").insertAfter("#wrapPublishing").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonCreative").click(function(){
    	$("#blockCreative").insertAfter("#wrapBrand").slideDown(600, 'easeOutCubic');
		return false;
	});

	$("#buttonBrand").click(function(){
    	$("#blockBrand").insertAfter("#wrapBrand").slideDown(600, 'easeOutCubic');
		return false;
	});



        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


 


});