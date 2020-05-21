jQuery(function($)
		{
			//zresetuj scroll
			$.scrollTo(0);
			
			//scrollowanie menu
			$('.link1').click(function() { $.scrollTo($('.bok'), 500); });			
		//	$('.link2').click(function() { $.scrollTo($('.napisy'), 500); });			
			$('.link3').click(function() { $.scrollTo($(' '), 500); });			
			$('.link4').click(function() { $.scrollTo($('.kontakt_container'), 500); });			
			$('.link5').click(function() { $.scrollTo($('#section5'), 500); });			
			
			//przycisk scroll
			$('.scrollup').click(function() { $.scrollTo($('body'), 1000); });				
		}	
		);