// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Aerial Drone Prototypes
function AerialDrone() {
	this.type = "Drone";
  	this.attackType = "Aerial";
}

function AlphaAerial() {
	this.baseDamage = Math.floor(Math.random() * 31) + 50;
}
AlphaDrone.prototype = new AerialDrone();

function BetaAerial() {
	this.baseDamage = Math.floor(Math.random() * 61) + 60;
}
BetaDrone.prototype = new AerialDrone();
// Ground Drone Prototypes
function GroundDrone() {
	this.type = "Bipedal";
	this.attackType = "Ground";
}

function AlphaGround() {
	this.baseDamage = Math.floor(Math.random() * 31) + 50;
}
AlphaGround.prototype = new GroundDrone();

function BetaGround() {
	this.baseDamage = Math.floor(Math.random() * 61) + 60;
}
BetaGround.prototype = new GroundDrone();
// Water  Drone Prototypes
function WaterDrone (){
	this.type = "ATV";
	this.attackType = "Water";
}
function AlphaWater() {
	this.baseDamage = Math.floor(Math.random() * 31) + 50;	
}
AlphaWater.prototype = new WaterDrone();

function BetaWater() {
	this.baseDamage = Math.floor(Math.random() * 61) + 60;
}
BetaWater.prototype = new WaterDrone();
// A base Robot function.
// Each type must have a unique property, for example, if it is aerial or ground based.
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. 
// To accomplish this, read about the Math.random() function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.
// Functional Requirements