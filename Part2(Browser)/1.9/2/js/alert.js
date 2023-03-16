"use strict";

scrollWidth();

function scrollWidth() {
	let div = document.createElement('div');
	div.style.overflowY = 'scroll';
	div.style.height = '3000px';
	document.body.prepend(div);
	let scrwid = div.offsetWidth - div.clientWidth;	
	alert(scrwid);	
}
