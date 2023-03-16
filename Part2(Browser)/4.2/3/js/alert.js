"use strict";

let mouse = document.getElementById("mouse");


mouse.onclick = function () {
	if (getComputedStyle(mouse).position !== 'absolute') {
		mouse.style.left = mouse.offsetLeft + 'px';
		mouse.style.top = mouse.offsetTop + 'px';
		mouse.style.position = 'absolute';
		mouse.tabIndex = -1;	
	}
	mouse.focus();
};

mouse.onkeydown = function(event) {
	switch (event.key) {
		case "ArrowLeft":
			mouse.style.left = parseInt(mouse.style.left) - mouse.offsetWidth + 'px';
		break;
		case "ArrowRight":
			mouse.style.left = parseInt(mouse.style.left) + mouse.offsetWidth + 'px';
		break;
		case "ArrowUp":
			mouse.style.top = parseInt(mouse.style.top) - mouse.offsetHeight + 'px';
		break;
		case "ArrowDown":
			mouse.style.top = parseInt(mouse.style.top) + mouse.offsetHeight + 'px';
		break;
	}
}


