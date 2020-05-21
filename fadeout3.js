function scrollfade()
{
	var textfade = document.querySelector('.portfolio_border_text3');
	var textposition = textfade.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.6;
	
	if(textposition < screenPosition)
	{
		textfade.classList.add('index_fade');
	}
}

	window.addEventListener('scroll' ,scrollfade);
	
	