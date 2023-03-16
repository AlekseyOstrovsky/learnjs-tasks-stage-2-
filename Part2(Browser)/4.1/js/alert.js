"use strict";

let selectedList = document.getElementById("genres");

function addOption() {
	let newOption = new Option("Классика","classic", true, true);	
	selectedList.append(newOption);
}

function showSelected() {
	let selected = Array.from(selectedList.options)
		.filter(option => option.selected)
   	.map(option => `${option.text}: ${option.value}`).join("; ");
	alert(selected);
}

