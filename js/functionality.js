$(document).ready(function() {



$(".navButton").click(function(){
    $(".menu").animate({right: "0"}, 400, 'easeOutCubic');
	$('body').addClass('noscroll');
    return false;
  });


$(".close a").click(function(){
    $(".menu").animate({right: "-330px"}, 400, 'easeInCubic');
	$('body').removeClass('noscroll');
    return false;
  });



$(".moreNewsButton").click(function(){
	$(this).hide().next().slideDown();
    return false;
  });



$(".lessNewsButton").click(function(){
	$(this).parent().slideUp().prev().fadeIn();
    return false;
  });



$("ul.projectBlocks li a").hover(function(){
    $(this).children().next().fadeToggle(350);
    return false;
  });


$(".scrollTop").click(function(){
	$('html, body').animate({scrollTop : 0},400);
	return false;
});
	




$("#loadPeople1 a").click(function(){
	$(this).fadeOut().parent().addClass('loadingPromo');
	$("#morePeople1").load("http://www.iln.co.uk/new/people2.html").hide().delay(3000).fadeIn(1000);
	$('#loadPeople1').delay(3050).fadeOut();
	$('#loadPeople2').delay(3100).fadeIn();
    return false;
});


$("#loadPeople2 a").click(function(){
	$(this).fadeOut().parent().addClass('loadingPromo');
	$("#morePeople2").load("http://www.iln.co.uk/new/people3.html").hide().delay(3000).fadeIn(1000);
	$('#loadPeople2').delay(3050).fadeOut();
	$('#loadPeople3').delay(3100).fadeIn();
    return false;
});

$("#loadPeople3 a").click(function(){
	$(this).fadeOut().parent().addClass('loadingPromo');
	$("#morePeople3").load("http://www.iln.co.uk/new/people4.html").hide().delay(3000).fadeIn(1000);
	$('#loadPeople3').delay(3050).fadeOut();
    return false;
});




$("#buttonStrategy").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy").slideToggle(600, 'easeOutCubic');
	$("#blockDigital").hide();
	$("#blockPublishing").hide();
	$("#blockCreative").hide();
	$("#blockBrand").hide();
	$("#buttonDigital").parent().removeClass('activeService');
	$("#buttonPublishing").parent().removeClass('activeService');
	$("#buttonCreative").parent().removeClass('activeService');
	$("#buttonBrand").parent().removeClass('activeService');
    return false;
});


$("#buttonDigital").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy").hide();
	$("#blockDigital").slideToggle(600, 'easeOutCubic');
	$("#blockPublishing").hide();
	$("#blockCreative").hide();
	$("#blockBrand").hide();
	$("#buttonStrategy").parent().removeClass('activeService');
	$("#buttonPublishing").parent().removeClass('activeService');
	$("#buttonCreative").parent().removeClass('activeService');
	$("#buttonBrand").parent().removeClass('activeService');
    return false;
});


$("#buttonPublishing").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy").hide();
	$("#blockDigital").hide();
	$("#blockPublishing").slideToggle(600, 'easeOutCubic');
	$("#blockCreative").hide();
	$("#blockBrand").hide();
	$("#buttonStrategy").parent().removeClass('activeService');
	$("#buttonDigital").parent().removeClass('activeService');
	$("#buttonCreative").parent().removeClass('activeService');
	$("#buttonBrand").parent().removeClass('activeService');
    return false;
});


$("#buttonCreative").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy").hide();
	$("#blockDigital").hide();
	$("#blockPublishing").hide();
	$("#blockCreative").slideToggle(600, 'easeOutCubic');
	$("#blockBrand").hide();
	$("#buttonStrategy").parent().removeClass('activeService');
	$("#buttonDigital").parent().removeClass('activeService');
	$("#buttonPublishing").parent().removeClass('activeService');
	$("#buttonBrand").parent().removeClass('activeService');
    return false;
});


$("#buttonBrand").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy").hide();
	$("#blockDigital").hide();
	$("#blockPublishing").hide();
	$("#blockCreative").hide();
	$("#blockBrand").slideToggle(600, 'easeOutCubic');
	$("#buttonStrategy").parent().removeClass('activeService');
	$("#buttonDigital").parent().removeClass('activeService');
	$("#buttonPublishing").parent().removeClass('activeService');
	$("#buttonCreative").parent().removeClass('activeService');
    return false;
});




$("#buttonStrategy2").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy2").slideToggle(600, 'easeOutCubic');
	$("#blockDigital2").hide();
	$("#blockPublishing2").hide();
	$("#blockCreative2").hide();
	$("#blockBrand2").hide();
	$("#buttonDigital2").parent().removeClass('activeService');
	$("#buttonPublishing2").parent().removeClass('activeService');
	$("#buttonCreative2").parent().removeClass('activeService');
	$("#buttonBrand2").parent().removeClass('activeService');
    return false;
});


$("#buttonDigital2").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy2").hide();
	$("#blockDigital2").slideToggle(600, 'easeOutCubic');
	$("#blockPublishing2").hide();
	$("#blockCreative2").hide();
	$("#blockBrand2").hide();
	$("#buttonStrategy2").parent().removeClass('activeService');
	$("#buttonPublishing2").parent().removeClass('activeService');
	$("#buttonCreative2").parent().removeClass('activeService');
	$("#buttonBrand2").parent().removeClass('activeService');
    return false;
});


$("#buttonPublishing2").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy2").hide();
	$("#blockDigital2").hide();
	$("#blockPublishing2").slideToggle(600, 'easeOutCubic');
	$("#blockCreative2").hide();
	$("#blockBrand2").hide();
	$("#buttonStrategy2").parent().removeClass('activeService');
	$("#buttonDigital2").parent().removeClass('activeService');
	$("#buttonCreative2").parent().removeClass('activeService');
	$("#buttonBrand2").parent().removeClass('activeService');
    return false;
});


$("#buttonCreative2").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy2").hide();
	$("#blockDigital2").hide();
	$("#blockPublishing2").hide();
	$("#blockCreative2").slideToggle(600, 'easeOutCubic');
	$("#blockBrand2").hide();
	$("#buttonStrategy2").parent().removeClass('activeService');
	$("#buttonDigital2").parent().removeClass('activeService');
	$("#buttonPublishing2").parent().removeClass('activeService');
	$("#buttonBrand2").parent().removeClass('activeService');
    return false;
});


$("#buttonBrand2").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy2").hide();
	$("#blockDigital2").hide();
	$("#blockPublishing2").hide();
	$("#blockCreative2").hide();
	$("#blockBrand2").slideToggle(600, 'easeOutCubic');
	$("#buttonStrategy2").parent().removeClass('activeService');
	$("#buttonDigital2").parent().removeClass('activeService');
	$("#buttonPublishing2").parent().removeClass('activeService');
	$("#buttonCreative2").parent().removeClass('activeService');
    return false;
});





$("#buttonStrategy3").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy3").slideToggle(600, 'easeOutCubic');
	$("#blockDigital3").hide();
	$("#blockPublishing3").hide();
	$("#blockCreative3").hide();
	$("#blockBrand3").hide();
	$("#buttonDigital3").parent().removeClass('activeService');
	$("#buttonPublishing3").parent().removeClass('activeService');
	$("#buttonCreative3").parent().removeClass('activeService');
	$("#buttonBrand3").parent().removeClass('activeService');
    return false;
});


$("#buttonDigital3").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy3").hide();
	$("#blockDigital3").slideToggle(600, 'easeOutCubic');
	$("#blockPublishing3").hide();
	$("#blockCreative3").hide();
	$("#blockBrand3").hide();
	$("#buttonStrategy3").parent().removeClass('activeService');
	$("#buttonPublishing3").parent().removeClass('activeService');
	$("#buttonCreative3").parent().removeClass('activeService');
	$("#buttonBrand3").parent().removeClass('activeService');
    return false;
});


$("#buttonPublishing3").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy3").hide();
	$("#blockDigital3").hide();
	$("#blockPublishing3").slideToggle(600, 'easeOutCubic');
	$("#blockCreative3").hide();
	$("#blockBrand3").hide();
	$("#buttonStrategy3").parent().removeClass('activeService');
	$("#buttonDigital3").parent().removeClass('activeService');
	$("#buttonCreative3").parent().removeClass('activeService');
	$("#buttonBrand3").parent().removeClass('activeService');
    return false;
});


$("#buttonCreative3").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy3").hide();
	$("#blockDigital3").hide();
	$("#blockPublishing3").hide();
	$("#blockCreative3").slideToggle(600, 'easeOutCubic');
	$("#blockBrand3").hide();
	$("#buttonStrategy3").parent().removeClass('activeService');
	$("#buttonDigital3").parent().removeClass('activeService');
	$("#buttonPublishing3").parent().removeClass('activeService');
	$("#buttonBrand3").parent().removeClass('activeService');
    return false;
});


$("#buttonBrand3").click(function(){
	$(this).parent().toggleClass('activeService')
	$("#blockStrategy3").hide();
	$("#blockDigital3").hide();
	$("#blockPublishing3").hide();
	$("#blockCreative3").hide();
	$("#blockBrand3").slideToggle(600, 'easeOutCubic');
	$("#buttonStrategy3").parent().removeClass('activeService');
	$("#buttonDigital3").parent().removeClass('activeService');
	$("#buttonPublishing3").parent().removeClass('activeService');
	$("#buttonCreative3").parent().removeClass('activeService');
    return false;
});






$(".serviceDetails a.close").click(function(){
    $(this).parent().slideUp(600, 'easeOutCubic');
	$('.activeService').removeClass('activeService');
    return false;
});









});