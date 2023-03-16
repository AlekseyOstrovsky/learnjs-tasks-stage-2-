"use strict";

let timer;
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

function go() {
	clock();
	if (!timer) timer = setInterval(clock, 1000);
}

function stop() {
	clearInterval(timer);
	timer = null;
}

function clock() {
	let date = new Date();
	hh.textContent = (date.getHours() < 10) ? '0'+date.getHours() : date.getHours();
	mm.textContent = (date.getMinutes() < 10) ? '0'+date.getMinutes() : date.getMinutes();
	ss.textContent = (date.getSeconds() < 10) ? '0'+date.getSeconds() : date.getSeconds();	
}

