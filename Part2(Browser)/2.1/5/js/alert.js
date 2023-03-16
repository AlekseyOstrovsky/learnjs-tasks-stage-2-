"use strict";

let list = document.getElementsByClassName('pane');
for (let pane of list) {
	pane.insertAdjacentHTML('afterbegin','<button class="remove-button">[x]</button>');
	pane.firstChild.addEventListener('click', () => pane.remove());
}
