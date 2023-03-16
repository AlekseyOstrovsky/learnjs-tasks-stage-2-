"use strict";

let text = document.getElementById("text");
let txtarea = document.createElement('textarea');
txtarea.className = "edit";

text.onclick = function () {	
	txtarea.value = this.innerHTML;
	text.replaceWith(txtarea);

}

txtarea.onblur = function () {
	text.innerHTML = txtarea.value;
	txtarea.replaceWith(text);
}

txtarea.onkeydown = function(event) {
	if (event.key === 'Enter') {
		txtarea.blur();
	}
}