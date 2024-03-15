$(document).ready(function(){		
	$("p").mouseenter(function(){
		$(".color-p-slider").css("color", "#FFFF00");
		$(this).addClass("animated bounceIn");
        		
	});	
	
	$("p").mouseleave(function(){
		$(".color-p-slider").css("color", "#FFFFFF");
	});	
	
	$(".banner").mouseleave(function(){
		$(this).slideUp(2500);
	});
});
			