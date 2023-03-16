"use strict";


/**
* Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
*
* @param {Node} anchor     элемент, около которого позиционируется другой элемент
* @param {string} position одно из: top/right/bottom
* @param {Node} elem       элемент, который позиционируется
*
* Оба элемента elem и anchor должны присутствовать в документе
*/


function positionAt(anchor, position='right-out', elem) {
	let coords = anchor.getBoundingClientRect();
	switch(position) {
		case 'top-out':
			elem.style.left = coords.left + window.pageXOffset + 'px';
			elem.style.top = coords.top + window.pageYOffset - elem.offsetHeight + 'px';
			break;
		case 'right-out':
			elem.style.left = coords.right + window.pageXOffset + 'px';
			elem.style.top = coords.top + window.pageYOffset + 'px';
			break;
		case 'bottom-out':
			elem.style.left = coords.left + window.pageXOffset + 'px';
			elem.style.top = coords.bottom + window.pageYOffset + 'px';
			break;
		case 'top-in':
			elem.style.left = coords.left + window.pageXOffset + 'px';
			elem.style.top = coords.top + window.pageYOffset + 'px';
			break;
		case 'right-in':
			elem.style.left = coords.right + window.pageXOffset - elem.offsetWidth + 'px';
			elem.style.top = coords.top + window.pageYOffset + 'px';
			break;
		case 'bottom-in':
			elem.style.left = coords.left + window.pageXOffset + 'px';
			elem.style.top = coords.bottom + window.pageYOffset - elem.offsetHeight + 'px';
			break;
	}
}

/**
* Показывает заметку с заданным содержимым на заданной позиции
* относительно элемента anchor.
*/

function showNote(anchor, position, html) {
	let note = document.createElement('div');
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);
	positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note right-in");
showNote(blockquote, "bottom-in", "note bottom-in");