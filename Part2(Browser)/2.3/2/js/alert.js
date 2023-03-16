"use strict";
let tree = document.getElementById('tree');

tree.addEventListener('click', function(event) {
	if (event.target.className != "tree__title") return;
	let ul = event.target.parentNode.querySelector('ul');
	if (!ul) return;
	ul.hidden = !ul.hidden;
 });

