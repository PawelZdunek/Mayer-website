function scrollfade()
{
	var textfade = document.querySelector('.portfolio_border_text1');
	var textposition = textfade.getBoundingClientRect().top;
	var screenPosition = window.innerHeight;
	
	if(textposition < screenPosition)
	{
		textfade.classList.add('index_fade');
	}
}

	window.addEventListener('load' ,scrollfade);

	