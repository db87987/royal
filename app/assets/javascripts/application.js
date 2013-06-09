// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//

//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require rails.validations
//= require fotorama
//= require_self



$(document).ready(
	
    function(){	
	$(".dynamic_bullshit").on("change", function() {
	 $('#cart_edit').submit();
	});
		
	$("#city_select").change(function () {
		var target = $('#city_select option:selected').val();
		if(target == "moscow") {
		    $('#saint').hide();
		    $('#moscow').show();
		} else {
		    $('#moscow').hide();
			$('#saint').show();
		}
	});
	
	$('#show_photo').on("click", function() {
	  $('#video-gallery').hide();	
      $('#photo-gallery').show();
    });

	$('#show_video').on("click", function() {
	  $('#photo-gallery').hide();
	  $('#video-gallery').show();	
    });


	
	
	  $('.open').on("click", function() {
		
		height = $(this).parent().next().height();
		self = $(this).parent().height();
		
		$(this).parent().css('height', self + height + 'px');
		$(this).parent().next().show();
		
	
			return false
	  });

	  $('.close').on("click", function() {
		  height = $(this).parent().height();
		  self = $(this).parent().prev().height();
		
		  
		
		  $(this).parent().prev().css('height', self - height + 'px');
	      $(this).parent().hide();
	
		return false
	  });
	
	
		$('#header_submit').on("click", function() {
			$('#header_search').submit();
		});
		
		$('#quick_submit').on("click", function() {
			$('#quick_search').submit();
		});
		
		
		$("#event_city_select").change(function () {		
			var target = $('#event_city_select option:selected').val();
			var pathname = window.location.pathname;
			window.location.assign(pathname + '?city_id=' + target)
			return false	
		});
		

		$(".calendar td").on('click', function () {		
			$(this).children().last().show();
		});
		
		$(".close").on('click', function () {		
			$(this).parent().hide();
		});		
		
		$(".catalog_product_link").hide();
		
		$(".product_image_wrap").mouseover(function () {
			$(this).children().show();
			
		});
		
		$(".product_image_wrap").mouseleave(function () {
			$(this).children().hide();
			
		});
		
		
		$("#pre-bubble").on('click', function () {	
			$(this).hide();
			
			$("#bronte-bubble-wrapper").mouseover(function () {
				$('#belter-bubble').hide();	
				$('#bronte-bubble').show();
			});

			$("#belter-bubble-wrapper").mouseover(function () {
				$('#bronte-bubble').hide();	
				$('#belter-bubble').show();
			});
			
		});
		
		$("#partners_link").on('click', function () {	
			$('.form').show();	
			$(".layer_bg").show();
			$(".header").show();
			$('#register_form').validate();
			
		});
		
		$(".layer_bg, .close").on('click', function () {
			$(".form").hide();	
			$(".layer_bg").hide();
		});
		
		$("#authorization_link").on('click', function () {		
			$("#register_frame").hide();
			$("#auth_frame").show();	
		});
		
		$("#registration_link").on('click', function () {		
			$("#auth_frame").hide();
			$("#register_frame").show();	
		});
		
		$(".destroy_event").on('click', function () {		
			$(this).parent().parent().remove();
		});

		
	
});



