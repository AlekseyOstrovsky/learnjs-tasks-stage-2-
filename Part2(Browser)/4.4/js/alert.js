"use strict";

document.getElementById('start').onclick = function() {
	showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
		alert(value);
	 });
}

function showPrompt(html, callback) {
	let container = document.getElementById('prompt-form-container');
	let form = document.getElementById('prompt-form');
	container.style.visibility='visible';
	document.getElementById('prompt-message').innerHTML = html;
	form.text.value='';
	form.text.focus();

	let inputs = form.getElementsByTagName('input');
	let focuslock = document.createElement('span');
	focuslock.innerHTML = '<span tabindex="0" aria-hidden="true" id="focuslock"></span>';
	container.before(focuslock);

	focuslock.addEventListener('keydown', function(event){
		if (event.key == 'Tab' && event.shiftKey) { 
			event.preventDefault();
			inputs[inputs.length-1].focus();		
		}
	});

	inputs[0].addEventListener('keydown', function(event){
		if (event.key == 'Tab' && event.shiftKey) { 
			event.preventDefault();
			inputs[inputs.length-1].focus();		
		}
	});

	inputs[inputs.length-1].addEventListener('keydown', function(event){
		if (event.key == 'Tab' && !event.shiftKey) { 
			event.preventDefault();
			inputs[0].focus();			
		}
	});

	form.onsubmit = function() {		
		if (form.text.value == '') return false;	
		container.style.visibility='hidden';
		callback(form.text.value);	
		focuslock.remove();	
		return false;	
	};

	document.onkeydown = function(event){
		if (event.key == 'Escape') { 			
			closeForm();
		}
	};

	form.cancel.onclick = function(){		
		closeForm();
	};

	function closeForm() {
		container.style.visibility='hidden';
		callback(null);
		focuslock.remove();	
	};
}