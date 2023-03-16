let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

printList(list);




function printList(list) {
	if ( list.next != null ) printList(list.next);
	alert(`value: ${list.value}`);
}


/* function printList(list) {	
	let link = list;
	let reversedList = null;	

	while (link) {
		reversedList = {value : link.value, next : reversedList};
		link = link.next;		
	}

	while (reversedList) {		
		alert(`value: ${reversedList.value}`);
		reversedList = reversedList.next;
	}
} */


