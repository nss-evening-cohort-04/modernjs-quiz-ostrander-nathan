"use strict";
$(document).ready(function(){

let robot1 = "";
let robot2 = "";
let robot1Life;
let robot2Life;
let outputBattle = $("div#outputBattle");
let robotDisplay = $("#robotModels1");
let robotDisplay2 = $("#robotModels2");
let blueInput = $("#txt_nameBlue");
let redInput =  $("#txt_nameRed");
let inputName = "";

let attackBtn = $("#attackButton");
robot1 = new RobotBattle.Fighters.PlayerClass(inputName);
robot2 = new RobotBattle.Fighters.WaterDrone(); 
robotDisplay.html(robot1.toString()).append(`<option>This is the base Robot${RobotBattle.Fighters.PlayerClass}</option>`);
console.log("robot1",robot1.healthBonus);
console.log("robot1",robot1.baseDamage);

robotDisplay.append(`<option>This is the base Robot${RobotBattle.Fighters.PlayerClass}</option>`);
robotDisplay.append(`<option>This is the base WaterRobot${RobotBattle.Fighters.WaterDrone}</option>`);
robotDisplay.append("<option>Alpha Ground</option>");
robotDisplay.append("<option>Beta Ground</option>");
robotDisplay.append("<option>Alpha Water</option>");
robotDisplay.append("<option>Beta Water</option>");

robotDisplay2.append("<option>Alpha Aerial</option>");
robotDisplay2.append("<option>Beta Aerial</option>");
robotDisplay2.append("<option>Alpha Ground</option>");
robotDisplay2.append("<option>Beta Ground</option>");
robotDisplay2.append("<option>Alpha Water</option>");
robotDisplay2.append("<option>Beta Water</option>");
// get text name value Blue Team
  blueInput.keyup(function(){
  	// console.log("blue input value",this.value )
    // alert(this.value);
  });

// get text name value Red Team
  redInput.keyup(function(){
    // alert(this.value);
  // });
});

//Event listeners for robots and attack 
  robotDisplay.change(function(e){
    let $target = $(this);
    console.log("$target",$target );
    $(this).css("color", "red");
  	alert( "Handler for Red Robots");
  	e.stopPropagation();
    var nextInput = $(this).attr("next");
    var moveAlong = false;

    switch (nextInput) {
      case "card--class":
        inputName = $("#txt_nameRed").val();
        moveAlong = (inputName !== "");
        break;
    }
  });
    robotDisplay2.change(function(e){
    let $target = $(this);
    console.log("$target",$target );
    $(this).css("color", "blue");
  	alert( "Handler for Blue Robots");
  });

  // attack button listener
  // attack button action (hero vs villain)
  $(attackBtn).click(function(){
	alert("attack button clicked");
    let btnText = $(this).find("#txt_nameBlue").text().toLowerCase();
    if(btnText === "Attack".toLowerCase()){
      fight();
    } else if(btnText === "play again".toLowerCase()){
      // playAgain();
    }
    $(this).css("background-color", "green");
  });

$(outputBattle).click(function(){

    function fight(){
    robot1.attack(robot2);
    $(outputBattle).html(`robot1 attacked robot2<br>caused ${robot1.baseDamage} damage`);
    setTimeout(function(){
      if(robot2.health <= 0){
        $(outputBattle).html(`<div class="outputBattle">robot1 Wins!</div>`);
        // endGame();
        return;
      }

      setTimeout(function(){
        robot2.attack(robot1);
        $(outputBattle).html(`robot2 attacked robot1<br>caused ${robot2.baseDamage} damage`);
        if (robot1.health <= 0){
          $(outputBattle).html(`<div class="outputBattle">robot1 lost!</div>`);
          // endGame();
          return;
        }
      }, 1000);
    }, 1100);
}
});
$( "div#outputBattle" )
  .html( "<p>All new content. <em>You bet!</em></p>");

// $(".card__link").click(function(e) {
//     e.stopPropagation();
//     var nextCard = $(this).attr("next");
//     var moveAlong = false;

//     switch (nextCard) {
//       case "card--class":
//         playerName = $("#player-name").val()
//         moveAlong = (playerName !== "");
//         break;
//       case "card--weapon":
//         moveAlong = (playerType !== "");
//         break;
//       case "card--battleground":
//         moveAlong = (weaponName !== "");
//         break;
// }
});
// 1) need to get value of text input and place in var 
// 2) need to get value of robot select and connect it to robot2 select and to text input
// 3) need to get value of robot2 select and connect it to robot select and to text input
// 4) display text input and result of robot vs robot2 fight



// You'll be building robots to battle each other.
// When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
// You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
// Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
// Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
// The Viper Drone defeated the Behemoth ATV with its flamethrower.
