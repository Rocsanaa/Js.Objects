function Cube(length, mass) {
	this.length = length;
	this.mass = mass;
	this.volume = Math.pow(length, 3);
	this.density = this.mass / this.volume;
	this.surfaceArea = Math.pow((length * 6), 2);
}

function Person(firstName, lastName, birthDate) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthDate = new Date(birthDate);

	this.sayHi = function () {
			var d = new Date();
			var hour = d.getHours();
			var day = d.getDay();
			if (hour < 10) {
				if (day == 0 || day == 6) {
					return "Go back tp sleep, it's the weekend!";
				} else if (day == 1) {
					return "Ugh, it's Monday monring!";
				} else {
					return "Good morning!";
				}
			}
			if (hour > 10 && hour < 16) {
				if (day == 0 || day == 6) {
					return "Hope you are having a great weekend!";
				} else {
					return "Good day!";
				}
			}
			if (hour > 16) {
				if (day == 0) {
					return "Enjoy your evening...tomorrow is Monday!";
				} else {
					m
					return "Good evening!";
				}
			}
		},
		this.age = function () {
			age = Math.floor((new Date() - this.birthDate) / 1000 / 60 / 60 / 24 / 365);
			return age;
		},
		this.getSign = function () {
			var sign = new Date(birthDate);
			if ((sign.getMonth() === 0 && sign.getDate() > 19) || (sign.getMonth === 1 && sign.getDate > 19)) {
				return "aquarius";
			} else if ((month == 1 && day > 19) || (month == 2 && day >= 20)) {
				return "pisces";
			} else if ((month == 2 && day > 21) || (month == 3 && day >= 19)) {
				return "aries";
			} else if ((month == 3 && day > 20) || (month == 4 && day >= 20)) {
				return "taurus";
			} else if ((month == 4 && day > 21) || (month == 5 && day >= 20)) {
				return "gemini";
			} else if ((month == 5 && day > 21) || (month == 6 && day >= 22)) {
				return "cancer";
			} else if ((month == 6 && day > 23) || (month == 7 && day >= 22)) {
				return "leo";
			} else if ((month == 7 && day <= 23) || (month == 8 && day >= 22)) {
				return "virgo";
			} else if ((month == 8 && day <= 23) || (month == 9 && day >= 22)) {
				return "libra";
			} else if ((month == 9 && day <= 23) || (month == 10 && day >= 22)) {
				return "scorpio";
			} else if ((month == 10 && day <= 22) || (month == 11 && day >= 21)) {
				return "sagittarius";
			} else if ((sign.getMonth() === 11 && sign.getDate() > 21) || (sign.getMonth === 0 && sign.getDate < 20)) {
				return "capricorn";
			}
		}

	var human = new Person("Sponge", "Bob", "7/14/2001");

	function Pet(Name, species, sleepy, hunger, awake) {

		this.Name = Name;
		this.Species = Species;
		this.Sleepy = sleepy;
		this.hunger = hunger;
		this.awake = awake;


	}
