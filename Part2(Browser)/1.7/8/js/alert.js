"use strict";

tableSortFirst();

function tableSortFirst() {
	let trows = document.querySelector('tbody').rows;
	for (let i=0; i<trows.length; i++) {
		for (let j=0; j<trows.length-1; j++) {			
			if (trows[j+1].querySelector('td').textContent < trows[j].querySelector('td').textContent) {
				let text = trows[j].innerHTML;
				trows[j].innerHTML = trows[j+1].innerHTML;
				trows[j+1].innerHTML = text;
			}
		}
	}
}
