"use strict";

for (let elem of document.querySelectorAll('a')) {
	let link = elem.getAttribute('href');
	if (link) {
		if (!link.startsWith('http://internal.com') && link.includes('://') ) {
		elem.style.color = 'orange';
		}
	}		
}

