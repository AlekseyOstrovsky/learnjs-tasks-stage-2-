"use strict";


let table = document.getElementById('bagua-table');

let txtarea = document.createElement('textarea');
txtarea.className = 'edit';

let okbutton = document.createElement('button');
okbutton.className = "edit__ok";
okbutton.innerHTML = "OK";

let cancelbutton = document.createElement('button');
cancelbutton.className = "edit__cancel";
cancelbutton.innerHTML = "CANCEL";

let edited = true;
let td;
let tdtemp;

table.onclick = function(event) {	
	if (!event.target.closest('td')) return;
	if (!table.contains(event.target.closest('td'))) return;
	if (edited) {
		td = event.target.closest('td');
		startEdit(td);
	}
}

function startEdit(event) {
	edited = false;
	txtarea.style.height = td.clientHeight + 'px';
	txtarea.style.width =td.clientWidth + 'px';
	tdtemp = td.innerHTML;
	txtarea.value = td.innerHTML;
	td.innerHTML = '';
	td.classList.add('edited');
	td.append(txtarea);
	txtarea.focus();
	okbutton.style.top = td.clientHeight + 'px';
	td.append(okbutton);
	okbutton.onclick = function() {endEdit();}
	cancelbutton.style.top = td.clientHeight + 'px';
	td.append(cancelbutton);
	cancelbutton.onclick = function() {cancelEdit();}
}

function endEdit() {
	td.innerHTML = txtarea.value;
	edited = true;
	td.classList.remove('edited');
}

function cancelEdit() {
	td.innerHTML = tdtemp;
	edited = true;
	td.classList.remove('edited');
}


