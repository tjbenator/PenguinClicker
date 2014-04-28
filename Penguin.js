function Penguin() {
    this.fishCaught = 0;
    this.age = 0;
    this.distanceFromHome = 0;
    this.milesTraveled = 0;
}

Penguin.prototype.caughtFish = function(caught) {
	this.fishCaught = this.fishCaught + caught;
}

Penguin.prototype.health = function() {
	if (age / 365 > minAge) {
		chance = (percentageChanceOfDeath * 100) + ( ( (age / 365) / maxAge / 10) * 100);
		console.log(chance);
	} else {
		chance = (percentageChanceOfDeath * 100);
	}
	
	num = Math.floor(Math.random() * (100 - 0 + 1) + 0);
	if (num <= chance || chance > 100) {
		return false;
	}
	
	return true;
}

