"use strict";
let table = document.getElementById('grid');

table.addEventListener('click', function(event) {
	if (event.target.tagName != "TH") return;
	let datatype = event.target.dataset.type;
	let rows = Array.from(table.tBodies[0].rows);
	let i = event.target.cellIndex;
	switch (datatype) {
		case 'number':
			rows.sort((a, b) => a.cells[i].textContent - b.cells[i].textContent);
		break;
		case 'string':
			rows.sort((a, b) => a.cells[i].textContent > b.cells[i].textContent ? 1 : -1);
		break;
	}
	table.tBodies[0].append(...rows);
 });

