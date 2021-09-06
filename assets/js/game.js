var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enenmyAttack = 12;
//GAME STARTS-----------------
//"WIN" PLAYER ROBOT HAS DEFEATED ALL ENEMY-ROBOTS
// *FIGHT ALL ENEMY-ROBOTS
// *DEFEAT EACH ENEMY-ROBOT
//"LOSE" PLAYER ROBOT'S HEALTH IS ZERO OR LESS


var fight = function(enemyName){
 while(enemyHealth > 0 && enemyHealth > 0){
    var promptFight = window.prompt("Would you like to fight or skip this battle: enter FIGHT OR SKIP.");

    if(promptFight === "SKIP" || promptFight ==="skip"){  
        var confirmSkip = window.confirm("Are you sure you want to SKIP?");
            if(confirmSkip){
                window.alert(playerName+" "+"has choosen to skip the fight.");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
                             }
                                                        }

             enemyHealth = enemyHealth - playerAttack;
               console.log(playerName +" "+ "attacks" +" "+enemyName+"." +" "+ enemyName+ " has "+enemyHealth+ " left.");
                if (enemyHealth <= 0){
                         window.alert(enemyName+" has been destroyed!");
                        playerMoney = playerMoney + 20;
                        break;
                                    }
                else{
                        window.alert(enemyName +" "+ "survives("+enemyHealth+")");
                                    }
                playerHealth = playerHealth -enenmyAttack;
                console.log(enemyName+" "+"counter attacks! "+ playerHealth);


            if (playerHealth <= 0){
                window.alert(playerName + "has died!");
                break;
            }
            else{
                window.alert(playerName+" "+ "is still in the game.");
            }
      }
    }


for (var i = 0; i < enemyNames.length; i++){
  var pickedEnemyName = enemyNames[i];
 enemyHealth= 50;
 fight(pickedEnemyName);
            }
//fight();