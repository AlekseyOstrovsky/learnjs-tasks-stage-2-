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

/* function printList(list) {
	alert(`value: ${list.value}`);
	if ( list.next != null ) printList(list.next);
} */

function printList(list) {
	let link = list;
	while (link) {
		alert(`value: ${link.value}`);
		link = link.next;
	}
}

