"use strict";
let tooltipDiv;

document.addEventListener('mouseover', function(event) {
	let tooltipText = event.target.dataset.tooltip;
	if (!tooltipText) return;
	tooltipDiv=document.createElement('div');
	tooltipDiv.className = "tooltip";
	tooltipDiv.innerHTML = tooltipText;	
	document.body.append(tooltipDiv);

	let coords = event.target.getBoundingClientRect();
	let posX = coords.left+coords.width/2-tooltipDiv.offsetWidth/2;
	let posY = coords.top-tooltipDiv.offsetHeight-5;
	posX = (posX < 0) ? 0 : posX;
	posY = (posY < 0) ? coords.bottom+5 : posY;
	
	tooltipDiv.style.left = posX + "px";
	tooltipDiv.style.top = posY + "px";
});

document.addEventListener('mouseout', function() {
	if (tooltipDiv) {
		tooltipDiv.remove();	
		tooltipDiv = null;
	}
});

