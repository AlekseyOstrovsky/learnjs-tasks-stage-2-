"use strict";

showCoordinates(field);


function showCoordinates(elem) {	
	let coords = elem.getBoundingClientRect();
	let div = document.createElement('div');
	let elemStyle = getComputedStyle(elem);
	let html = `<p>
	1: ${coords.left}, ${coords.top} <br>
	2: ${coords.right}, ${coords.bottom} <br>
	3: ${coords.left+parseInt(elemStyle.borderLeftWidth)},
	${coords.top+parseInt(elemStyle.borderTopWidth)} <br>
	4:	${coords.right-parseInt(elemStyle.borderRightWidth)},
	${coords.bottom-parseInt(elemStyle.borderBottomWidth)}</p>`;	
	div.innerHTML = html;
	div.style.position = 'fixed';
	div.style.top = coords.bottom + 20 + "px";
	div.style.left = coords.left + "px";
	document.body.append(div);
}

