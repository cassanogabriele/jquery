$(document).ready(function(){
	$("button").click(function(event){
		$("#details_1").text("Quisque non urna nibh. Interdum et malesuada fames.");
		$("#details_2").text("Nunc ac blandit neque, semper maximus risus. ");
		$("#details_3").text("Nunc metus enim, sagittis in placerat vitae.");
		$("#details_4").text("Vivamus nec diam vitae ex sodales.");
	});
		
	$(".details").mouseleave(function(){
		$(this).slideUp(1300);
	});	

	$("h5").mouseenter(function(){
		$("h5").addClass('animated bounceInRight');
		$("h5").addClass('services-titles');
	});
});
			