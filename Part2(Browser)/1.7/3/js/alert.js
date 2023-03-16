"use strict";

let data = {
	"Рыбы": {
	  "форель": {},
	  "лосось": {}
	},
 
	"Деревья": {
	  "Огромные": {
		 "секвойя": {},
		 "дуб": {}
	  },

	  "Цветковые": {
		 "яблоня": {},
		 "магнолия": {}
	  }
	}
};


let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере

let konteiner = document.getElementById('konteiner');
createTreeString(konteiner, data); // создаёт дерево в контейнере


//с помощью элементов
function createTree(container, data) {
	if (Object.keys(data).length > 0) {
		let ul = document.createElement('ul');
		container.append(ul);
		getKeys(data, ul);
	}

	function getKeys(obj, destination) {

		for (let key in obj) {
			let li = document.createElement('li');
			li.textContent = key;
			destination.append(li);		

			if ( (typeof(obj[key]) === 'object') && (Object.keys(obj[key]).length!=0) ) {
				let ul = document.createElement('ul');
				li.append(ul);
				getKeys( obj[key] , ul );
			} 							
		}
		
	}
}



// с помощью строки
function createTreeString(container, data) {
		if (Object.keys(data).length > 0) {		;		
		container.innerHTML = '<ul>'+getKeysString(data)+'</ul>';		
	}

	function getKeysString(obj) {
		let output='';					
		for (let key in obj) {			
			output += '<li>'+key+'</li>';
			if ( (typeof(obj[key]) === 'object') && (Object.keys(obj[key]).length!=0) ) {
				let pos = output.lastIndexOf('</');
				output = [output.slice(0,pos),'<ul>',getKeysString( obj[key] ),'</ul>',output.slice(pos)].join('');
				getKeysString( obj[key] );				
			} 							
		}
		
		return output;
	}
	
}
