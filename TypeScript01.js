let isBoolean: boolean = true;

isBoolean = false;

const getData = <T>(data: T): T => data;

getData('string').length;
// getData(10).length;

enum Directions {
	Up,
	Down,
	Right
}