$(document).ready(function(){

	/* Windows Scroll*/
	$(window).on("scroll", function(){
		if($(window).scrollTop()> 500){
			$('.header-top').addClass("nav-bg")
		}else{
			$('.header-top').removeClass("nav-bg")
		}
	});

	$('.fa.fa-angle-down').click(function(){
		$(this).css("display","none");
		$('.fa.fa-angle-up').css("display","block");
		$('.toggle-sub-menu').css("display","block");
	});
	$('.fa.fa-angle-up').click(function(){
		$(this).css("display","none");
		$('.fa.fa-angle-down').css("display","block");
		$('.toggle-sub-menu').css("display","none");
	})
	$('.bars .fa.fa-bars').click(function(){
		$('.sidebar').css("display", "block");
		$('.bars').css("display","none");
		$('.background-overlay').css("display","block");
	});
	$('.fa.fa-times').click(function(){
		$('.sidebar').css("display", "none");
		$('.bars').css("display","block");
		$('.background-overlay').css("display","none");
	});

});