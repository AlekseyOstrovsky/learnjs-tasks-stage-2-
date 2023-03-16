"use strict";

let thumbs = document.getElementById('thumbs');
let largeImg = document.getElementById('largeImg');
thumbs.addEventListener('click', function(event) {
	if (event.defaultPrevented) return;
	if (event.target.closest('a')){
		largeImg.src = event.target.closest('a').getAttribute('href');
		largeImg.alt = event.target.closest('a').title;
		event.preventDefault();
	}
 });

