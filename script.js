// constructor
/*var Person = function(name, yearOfBirth, job){
	this.name = name,
	this.yearOfBirth = yearOfBirth,
	this.job = job
}

var john = new Person("John", 1988, "Teacher" )

Person.prototype.calculateAge = function(){
	console.log(2019 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith';
console.log(john.lastName)*/


// object.create
/*var personProto = {
	calculateAge: function(){
		console.log(2019 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'john'
john.yearOfBirth = 1987;
john.job = 'teacher'

var jane = Object.create(personProto, {
	name:{value: 'jane'},
	yearOfBirth:{value: 1969},
	job:{value: 'teacher'}
})*/

// primitives vs. objects
/*var a = 23;
var b = a;
a = 46
// a new copy b is created from a
console.log(a,b)

var obj1 = {
	name: 'john',
	age : 26
}

var obj2 = obj1;

obj1.age = 30;
// no copy is created as a var doest not hold the object, it just 
// holds the address to the memory or points the memory
console.log(obj1, obj2)*/

//functions

/*var age = 26;
var obj1 = {
	name: 'Amar',
	city: 'bangalore'
}

function mutate(a,b){
	// age which is outside will not change, new copy is made
	a = 32;
	// the object that is outside changes
	
	b.city = 'mysore'
}

mutate(age, obj1)

console.log(age, obj1.city)*/

