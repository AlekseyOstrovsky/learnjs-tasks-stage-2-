"use strict";
let container = document.getElementById('container');

container.addEventListener('click', function(event) {
	if (event.target.className != "remove-button") return;
	let elem = event.target.closest('div');
	if (elem.className == "pane") elem.remove();	
 });

