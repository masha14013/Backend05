// Simple object example
let user = {
	name: 'Yauhen',
	age: 30,
};

// Object type using any
let user: any = {
	name: 'Yauhen',
	age: 30,
};

user = 'test'; // Now type of user is string

// Array Type
let list: Array<number> = [1, 2, 3];

// Define object type
let user: { name: string, age: number } = {
	name: 'Yauhen',
	age: 30,
};

// Try to change property
let user: { name: string, age: number } = {
	name: 'Yauhen',
	/*
	Error:
	The expected type comes from property 'age'
	which is declared here on type '{ name: string, age: number }'
	*/
	age: 'test',		// <--- Must be a number
};

// Try to change variable type
user = 'test';	// Type '"test"' is not assignable to type '{ name: string, age: number }'

// Additional property
let user: { name: string, age: number } = {
	name: 'Yauhen',
	age: 30,
	/*
	Error:
	Object literal may only specify known properties,
	and 'nickName' does not exist in type '{ name: string, age: number }'
	*/
	nickName: 'webDev',		// <--- Was not described in object types
};

// Updating object type
let user: { name: string, age: number, nickName: string } = {
	name: 'Yauhen',
	age: 30,
	nickName: 'webDev', // No error for described type
};

// Base object structure
let user: { name: string, age: number } = {
	name: 'Yauhen',
	age: 30,
};

// Dynamically try to add 'nickName' property for "User" object
/*
	Error:
	Property 'nickName' does not exist on type '{ name: string, age: number }'
*/

user.nickName = 'webDev';

// Updating object type
let user: { name: string, age: number, nickName: string } = {
	name: 'Yauhen',
	age: 30,
	nickName: 'webDev', // Now everything is correct
};

// New admin object
let admin: { name: string, age: number, nickName: string } = {
	name: 'Max',
	age: 20,
	nickName: 'Mad', 
};

// 2 objects with the same types
let user: { name: string, age: number, nickName: string } = {
	name: 'Yauhen',
	age: 30,
	nickName: 'webDev',
};

let admin: { name: string, age: number, nickName: string } = {
	name: 'Max',
	age: 20,
	nickName: 'Mad', 
};

// Using Type for object structure
type Person = { name: string, age: number, nickName: string };

// Apply Person type for objects with the same structure
let user: Person = {
	name: 'Yauhen',
	age: 30,
	nickName: 'webDev',
};

let admin: Person = {
	name: 'Max',
	age: 20,
	nickName: 'Mad', 
};

// 2 objects with almost the same structure
let user: Person = {
	name: 'Yauhen',
	age: 30,
	nickName: 'webDev',			// <--- property
};

let admin: Person = {
	name: 'Max',
	age: 20,
	getPass(): string {			// <--- new method
		return `${this.name}${this.age}`;
	}, 
};

// Updating type with optional properties
type Person = {
	name: string,
	age: number,
	nickName?: string,
	getPass?: () => string,
};



