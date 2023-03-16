"use strict";

let contents = document.getElementById('contents');
contents.addEventListener('click', function(event) {
	if (event.defaultPrevented) return;
	let link = event.target.closest('a');
	if (contents.contains(link)) {
		let answer = confirm(`Leave for ${link.getAttribute('href')}?`);
		if (!answer) {
			event.preventDefault();
		}	
	}
 });

