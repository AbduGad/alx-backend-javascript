interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
};

const student1: Student = {
	firstName: 'Ahmed',
	lastName: 'Ali',
	age: 33,
	location: 'South Africa',
};

const student2: Student = {
	firstName: 'Isac',
	lastName: 'Jhon',
	age: 31,
	location: 'Mauritania',
};

let studentsList : Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", function() {
	const table_students = document.createElement('table');
	const tbody_students = document.createElement('tbody');

	studentsList.forEach((EachStudent) => {
	const tableRow = document.createElement('tr');
  
  	const tableName = document.createElement('td');
  	const tableLocation = document.createElement('td');
	
	 // Set the text content for the table cells
	tableName.textContent = EachStudent.firstName;
	tableLocation.textContent = EachStudent.location;

	// Append the cells to the row
	tableRow.appendChild(tableName);
	tableRow.appendChild(tableLocation);

	// Append the row to the table body
	tbody_students.appendChild(tableRow); 
	});
	// Append the table body to the table
	table_students.appendChild(tbody_students);

	// Append the table to the document body
	document.body.appendChild(table_students);
});
