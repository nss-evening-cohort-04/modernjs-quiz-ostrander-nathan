"use strict";
var RobotBattle = RobotBattle || {};
$(document).ready(function(){
let robots = [];
let robots2 = [];
let robot1 = "";
let robot2 = "";
let robot3 = "";
let robot4 = "";
let robot5 = "";
let robot6 = "";
let outputBattle = $("div#outputBattle");
let robotDisplay = $("#robotModels1");
let robotDisplay2 = $("#robotModels2");
let blueInput = $("#txt_nameBlue");
let redInput =  $("#txt_nameRed");
let attackBtn = $("#attackButton");
let inputNameRed = "";
let inputNameBlue = "";
let robotDisplayValue = $("#robotModels1 option:selected");
let robotDisplayValue2 = $("#robotModels2 option:selected");
let teamNic = "";
let teamJessica = "";

// get prototypes store in robot
robot1 = new RobotBattle.Fighters.AlphaAerial();
robot2 = new RobotBattle.Fighters.BetaAerial();
robot3 = new RobotBattle.Fighters.AlphaGround();
robot4 = new RobotBattle.Fighters.BetaGround();
robot5 = new RobotBattle.Fighters.AlphaWater(); 
robot6 = new RobotBattle.Fighters.BetaWater(); 

// display robots in select area
robotDisplay.html(`<option>Team Jessica</option>`);
robotDisplay.append(`<option>${robot1.name}</option>`);
robotDisplay.append(`<option>${robot2.name}</option>`);
robotDisplay.append(`<option>${robot3.name}</option>`);
robotDisplay.append(`<option>${robot4.name}</option>`);
robotDisplay.append(`<option>${robot5.name}</option>`);
robotDisplay.append(`<option>${robot6.name}</option>`);

robotDisplay2.html(`<option>Team Nic</option>`);
robotDisplay2.append(`<option>${robot1.name}</option>`);
robotDisplay2.append(`<option>${robot2.name}</option>`);
robotDisplay2.append(`<option>${robot3.name}</option>`);
robotDisplay2.append(`<option>${robot4.name}</option>`);
robotDisplay2.append(`<option>${robot5.name}</option>`);
robotDisplay2.append(`<option>${robot6.name}</option>`);

 // place robots into array 
robots[0] = robot1;
robots[1] = robot2;
robots[2] = robot3;
robots[3] = robot4;
robots[4] = robot5;
robots[5] = robot6;

//Event listeners for robots and attack 
  robotDisplay.change(function(e){
    let $target = $(this).val();
    teamNic = robots.filter(function (robot) {
    	return robot.name === $target;
    })[0];
    console.log("$target",teamNic);
    $(this).css("color", "red");
  	// alert( "Handler for Red Robots");
    let btnTextRed = $(this).find(redInput).text().toLowerCase();
  	e.stopPropagation();
  });

    robotDisplay2.change(function(e){
    let $target2 = $(this).val();
    teamJessica = robots.filter(function(robot){
    	return robot.name ===$target2;
    })[0];
    console.log("$target2",teamJessica );
    $(this).css("color", "blue");
    let btnTextBlue = $(this).find(blueInput).text().toLowerCase();
  	// alert( "Handler for Blue Robots");
  	e.stopPropagation();
  });

// get text name value Blue Team
  blueInput.keyup(function(){
	inputNameBlue = blueInput.val();
  	// console.log("blue input value",this.value);
    // alert(this.value);
  });

// get text name value Red Team
  redInput.keyup(function(){
	inputNameRed = redInput.val();
    // alert(this.value);
  console.log("inputNameRed",inputNameRed);
});

  $(attackBtn).click(function(){
	fight();
    $(this).css("background-color", "green");
  });

	// FIGHT FUNCTION 
    function fight(){
    teamJessica.healthRange -= teamNic.baseDamage;
    $(outputBattle).html(`${inputNameRed} attacked ${inputNameBlue}<br>caused ${teamNic.baseDamage} damage`);
    setTimeout(function(){
      if(teamNic.healthRange <= 0){
        $(outputBattle).html(`<div class="outputBattle">${inputNameRed} Wins Bigly via small hands smack</div>`);
        endGame();
        return;
      }

      setTimeout(function(){
        teamNic.healthRange -= teamJessica.baseDamage;
        $(outputBattle).html(`${inputNameBlue} attacked ${inputNameRed}<br>caused ${teamJessica.baseDamage} damage`);
        if (teamJessica.healthRange <= 0){
          $(outputBattle).html(`<div class="outputBattle">${inputNameBlue} WINS via Restless Leg Syndrome!</div>`);
          endGame();
          return;
        }
      }, 1000);
    }, 1100);
    console.log("teamNic.healthRange",teamNic.healthRange );
    console.log("teamJessica.healthRange", teamJessica.healthRange);
}
 function endGame(){
    $(attackBtn).css("background-color", "blue").text("Battle is Over");
  }

});