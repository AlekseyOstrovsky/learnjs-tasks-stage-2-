"use strict";

let slider = document.getElementById('slider');
let imglist = slider.querySelectorAll('li');
let j = 1;

for (let li of imglist) {
	li.hidden = true;
}

imglist[j-1].hidden=false;
imglist[j].hidden=false;
imglist[j+1].hidden=false;

document.getElementById('leftbutton').addEventListener('click', moveLeft);
document.getElementById('rightbutton').addEventListener('click', moveRight);

function moveLeft() {
	if (j > 1) {
		j--;		
		imglist[j-1].hidden=false;
		imglist[j].hidden=false;
		imglist[j+1].hidden=false;
		imglist[j+2].hidden=true;
	};
}

function moveRight() {
	if (j < imglist.length-2) {
		j++;
		imglist[j-2].hidden=true;
		imglist[j-1].hidden=false;
		imglist[j].hidden=false;
		imglist[j+1].hidden=false;
	};
}