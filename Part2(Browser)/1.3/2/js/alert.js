for (let i=0; i < document.body.children.length; i++) {
	if ( document.body.children[i] == '[object HTMLTableElement]' ) {	
		for (let j=0; j < document.body.children[i].rows.length; j++) {
			document.body.children[i].rows[j].cells[j].style.backgroundColor = 'red';
		}
	}
}