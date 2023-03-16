"use strict";

let title = document.getElementById('title');
let list = document.getElementById('list');

title.onclick = function() {
	title.classList.toggle('open');
	list.classList.toggle('open');
}