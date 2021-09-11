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
                console.log(enemyName+" "+"counter attacks! "+ playerName+ " has : " + playerHealth);


            if (playerHealth <= 0){
                window.alert(playerName + "has died!");
                break;
            }
            else{
                window.alert(playerName+" "+ "is still in the game.");
            }
      }
    }

    var startGame= function() {
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++){
        if (playerHealth >0){
            window.alert("Welcome to Robot Gladiators! " + (i + 1));
        var pickedEnemyName = enemyNames[i];
       enemyHealth= 50;
  
       fight(pickedEnemyName);
         }
      else {
          window.alert("You have lost your robot in battle! Game Over!");
            break;
           }
         }
         endGame();
      };
startGame();
         var endGame = function(){
             if (playerHealth > 0) {
                 window.alert("Great job, you've survived the game! You have a score of " +playerMoney +".");
             }
                 else {
                     window.alert("you've lost your robot in battle.");
                 }

            var playAgainConfirm = window.confirm("Would you like to play agian?");
                 if(playAgainConfirm){
                     startGame();
                 }
                 else{
                     window.alert("Thank you for playing Robot Gladiators!");
                 }

             };
         