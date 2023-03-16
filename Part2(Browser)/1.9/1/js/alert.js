"use strict";


function scrollBottom(elem) {	
	let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
	return scrollBottom;
}

