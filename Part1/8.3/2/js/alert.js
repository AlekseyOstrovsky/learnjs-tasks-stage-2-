Function.prototype.defer = function(ms) {
	let that = this;
	return function(...args) {
		setTimeout( function() { that.apply(this, args) }, ms );
	}
}




function f(a, b) {
	alert( a + b );
}
 
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.