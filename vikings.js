var Vikings = function(name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
			
	
};


function fight(fighter1, fighter2) {
	var turn = 0
	while ((turn < 5) && (fighter1.health > 20) && (fighter2.health >20)) {
	if (fighter1.strength > fighter2.strength) {
		fighter2.health = fighter2.health - fighter1.strength
		return console.log("The Honor is for Viking 1, his health is " + fighter1.health + "Viking 2 has a health of " + fighter2.health)
		}
	else {fighter1.health = fighter1.health - fighter2.strength 

		return console.log("The Honor is for Viking 2, his health is " + fighter2.health + "Viking 1 has a health of " + fighter1.health)
		}
		turn += 1

	}
};


var viking1 = new Vikings("Viking1",90, 30);
var viking2 = new Vikings("Viking2",75, 35);

fight(viking1, viking2)