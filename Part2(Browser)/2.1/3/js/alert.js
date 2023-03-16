"use strict";

let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.onclick = function(event) {
	let fcor = field.getBoundingClientRect();
	let lpos = event.clientX - fcor.left - field.clientLeft - ball.offsetWidth / 2;
	let tpos = event.clientY - fcor.top - field.clientTop - ball.offsetHeight / 2;
	lpos = (lpos < 0) ? 0 : (lpos > field.clientWidth-ball.offsetWidth) ? field.clientWidth-ball.offsetWidth : lpos;
	tpos = (tpos < 0) ? 0 : (tpos > field.clientHeight-ball.offsetHeight) ? field.clientHeight-ball.offsetHeight : tpos;
	ball.style.left = `${lpos}px`;
	ball.style.top = `${tpos}px`;
}

