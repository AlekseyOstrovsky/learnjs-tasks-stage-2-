
let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)




function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	};
  
	counter.set = (x) => count=x;
	counter.decrease = () => count--;
  
	return counter;	
}
	