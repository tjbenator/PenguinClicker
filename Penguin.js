function Penguin() {
    this.fishCaught = 0;
    this.age = 0;
    this.distanceFromHome = 0;
    this.milesTraveled = 0;
    this.deathDay = Math.floor((Math.random()*25550)+1);
}

Penguin.prototype.caughtFish = function(caught) {
	this.fishCaught = this.fishCaught + caught;
}

Penguin.prototype.health = function() {
	//this.chance = (this.age) * 1.16;
	
	
	//num = Math.floor((Math.random()*25550)+1);
	if (this.deathDay <= this.age) {
		return false;
	}
	
	return true;
}

