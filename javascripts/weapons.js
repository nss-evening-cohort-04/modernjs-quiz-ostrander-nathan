"use strict";
var Weapon = function() {
  this.name = "base weapon";
  this.damage = 1;

  this.toString = function() {
    return this.name;
  };
};

var robotWeapn = {};

robotWeapn.Lazer = function() {
  this.name = "Lazer";
  this.damage = Math.floor(Math.random() * 2) + 10;
};
robotWeapn.Lazer.prototype = new Weapon();

robotWeapn.Gun = function() {
  this.name = "Gun";
  this.damage = 14;
};
robotWeapn.Gun.prototype = new Weapon();

robotWeapn.DeathRay = function() {
  this.name = "Death Ray";
  this.damage = 18;
};
robotWeapn.DeathRay.prototype = new Weapon();

