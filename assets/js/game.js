var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enenmyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to fight or skip this battle: enter FIGHT OR SKIP.");
    if( promptFight === "FIGHT" || promptFight === "fight"){
             console.log(playerName +" "+ "attacks" +" "+enemyName);
             enemyHealth = enemyHealth - playerAttack;
                if (enemyHealth <= 0){
                         window.alert(enemyName+" has died!");
                                    }
                else{
                        window.alert(enemyName +" "+ "survives");
                                    }
                playerHealth = playerHealth -enenmyAttack;
                console.log(playerName +" "+"counter attacks!");


            if (playerHealth <=0){
                window.alert(playerName + "has died!");
            }
            else{
                window.alert(playerName+" "+ "is still in the game.");
            }
    }
    else if(promptFight === "SKIP" || promptFight ==="skip"){  
        var confirmSkip = window.confirm("Are you sure you want to SKIP?");
            if(confirmSkip){
                window.alert(playerName+" "+"has choosen to skip the fight.");
                playerMoney = playerMoney - 2;
                        }
            else {
                fight();
            }
         window.alert(playerName + " " +" has chosen to skip the fight");
        } 

    else{
        window.alert("Try again.");
        }

            };

fight();