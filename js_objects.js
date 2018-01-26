function Cube(length, mass) {
	this.length = length;
	this.mass = mass;
	this.volume = Math.pow(length,3);
	this.density = this.mass/this.volume;
	this.surfaceArea = Math.pow((length * 6),2);
	}

function Person(firstName, lastName, birthdate){
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthDate = new Date(birthdate);

	this.getSign =

	this.sayHi = function() {
		var newDate =

	}
	this.age = function() {
	 return Math.floor((new Date() - this.birthdate)/1000/60/60/24/365);
	}

	this.getSign = function() {


	}



}

var human = new Person("Sponge", "Bob", (7/14/1986) )

