
var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;

// Logging multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

// Creates function
var fight = function () {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiator!:");

//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

//Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + "has died");
        }
        
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
    //check player's health
        if(playerHealth <= 0){
            window.alert(playerName + " has died ");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }

//Subtract the value of 'enemyAttack' from the value of 'platerHealth' and use the result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

//Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
    );

};

// Executes function (function expression)
fight();


