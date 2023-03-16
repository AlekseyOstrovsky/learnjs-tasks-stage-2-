"use strict";

let calendar=document.getElementById('calendar');
createCalendar(calendar, 2023, 3);

function createCalendar(elem, year, month) {
	let days=['пн','вт','ср','чт','пт','сб','вс'];
	let table = document.createElement('table');
	elem.append(table);	
	let tr=document.createElement('tr');	
	for (let i=0; i<days.length; i++) {
		let td = document.createElement('th');
		let text = document.createTextNode(days[i]);
		td.append(text);
		tr.append(td);
	}
	table.append(tr);


	let date=new Date(year,month-1,1,0,0,0,0);
	let currentmonth=date.getMonth();

	while (date.getMonth() == currentmonth) {
		let tr=document.createElement('tr');
		let tdcounter=1;		
		if (date.getDate()==1 && date.getDay() !=1) {
			let day = ( date.getDay()==0 ) ? 7 : date.getDay();
			for (let i=1; i<day; i++) {
				let td = document.createElement('td');
				tdcounter++;
				tr.append(td);
			}
		}
		while (tdcounter<8) {	
			let td = document.createElement('td');
			if (date.getMonth() == currentmonth) {
				let text = document.createTextNode(date.getDate());
				td.append(text);	
			}
			tr.append(td);			
			tdcounter++;
			date.setDate(date.getDate()+1);			
		}
		table.append(tr);
	}

}

