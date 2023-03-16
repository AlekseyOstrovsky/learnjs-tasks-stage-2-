"use strict";

function f(a) {
	alert(a);
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано


function throttle(f, ms) {

	let ready = true;
	let args;
	let that;

	function container() {	
		if ( !ready ) {
      args = arguments;
			that = this;
			return;
    }

    f.apply(this, arguments);
    ready = false;
    setTimeout( function() {
      ready = true;
      if (args) {
        container.apply(that, args);
        args = null;	
      }			
    }, ms );			

	};

	return container;
}


	