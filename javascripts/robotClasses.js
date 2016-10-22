"use strict";
var RobotBattle = RobotBattle || {};
RobotBattle.Fighters = {};

// A base Robot function.
RobotBattle.Fighters.PlayerClass = function() {
  this.name = "BaseRobot";
  this.baseDamage = Math.floor(Math.random() * 10);
  this.toString = function() {
    return this.name;
  };
};

// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Each type must have a unique property, for example, if it is aerial or ground based.
// Aerial Drone Prototypes
RobotBattle.Fighters.AerialDrone = function() {
	this.type = "Drone";
  	this.attackType = "Aerial";
};
RobotBattle.Fighters.AerialDrone.prototype = new RobotBattle.Fighters.PlayerClass();


// Define at least 2 specific robot model functions for each type.
RobotBattle.Fighters.AlphaAerial = function() {
	this.name = "Alpha Aerial";
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. 
// To accomplish this, read about the Math.random() function in JavaScript.
	this.healthRange = Math.floor(Math.random() * 31) + 50;
// Give each robot model a different range of damage they do using the same technique.
	this.baseDamage += 50;
};
RobotBattle.Fighters.AlphaAerial.prototype = new RobotBattle.Fighters.AerialDrone();

RobotBattle.Fighters.BetaAerial = function() {
	this.name = "Beta Aerial";
	this.healthRange = Math.floor(Math.random() * 61) + 60;
	this.baseDamage += 45;
};
RobotBattle.Fighters.BetaAerial.prototype = new RobotBattle.Fighters.AerialDrone();
// Ground Drone Prototypes
RobotBattle.Fighters.GroundDrone = function() {
	this.type = "Bipedal";
	this.attackType = "Ground";
};
RobotBattle.Fighters.GroundDrone.prototype = new RobotBattle.Fighters.PlayerClass();

RobotBattle.Fighters.AlphaGround = function() {
	this.name = "Alpha Ground";
	this.healthRange = Math.floor(Math.random() * 31) + 50;
	this.baseDamage += 42;
};
RobotBattle.Fighters.AlphaGround.prototype = new RobotBattle.Fighters.GroundDrone();

RobotBattle.Fighters.BetaGround = function() {
	this.name = "Beta Ground";
	this.healthRange = Math.floor(Math.random() * 61) + 60;
	this.baseDamage += 33;
};
RobotBattle.Fighters.BetaGround.prototype = new RobotBattle.Fighters.GroundDrone();

// Water  Drone Prototypes
RobotBattle.Fighters.WaterDrone = function (){
	this.type = "ATV";
	this.attackType = "Water";
};
RobotBattle.Fighters.WaterDrone.prototype = new RobotBattle.Fighters.PlayerClass();

RobotBattle.Fighters.AlphaWater = function() {
	this.name = "Alpha Water";
	this.healthRange = Math.floor(Math.random() * 31) + 50;	
	this.baseDamage += 46;
};
RobotBattle.Fighters.AlphaWater.prototype = new RobotBattle.Fighters.WaterDrone();

RobotBattle.Fighters.BetaWater = function() {
	this.name = "Beta Water";
	this.healthRange = Math.floor(Math.random() * 61) + 60;
	this.baseDamage += 41;
};
RobotBattle.Fighters.BetaWater.prototype = new RobotBattle.Fighters.WaterDrone();






// Functional Requirements