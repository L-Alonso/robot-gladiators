var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
//GAME STARTS-----------------
//"WIN" PLAYER ROBOT HAS DEFEATED ALL ENEMY-ROBOTS
// *FIGHT ALL ENEMY-ROBOTS
// *DEFEAT EACH ENEMY-ROBOT
//"LOSE" PLAYER ROBOT'S HEALTH IS ZERO OR LESS


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1)+ min);
    return value;
};

var fight = function(enemyName){
 while(enemyHealth > 0 && enemyHealth > 0){
    var promptFight = window.prompt("Would you like to fight or skip this battle: enter FIGHT OR SKIP.");

    if(promptFight === "SKIP" || promptFight ==="skip"){  
        var confirmSkip = window.confirm("Are you sure you want to SKIP?");
            if(confirmSkip){
                window.alert(playerName+" "+"has choosen to skip the fight.");
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
                             }
                                                        }
            var damage = randomNumber(playerAttack - 3, playerAttack);
             enemyHealth = Math.max(0, enemyHealth - damage);
               console.log(playerName +" "+ "attacks" +" "+enemyName+"." +" "+ enemyName+ " has "+enemyHealth+ " left.");
                if (enemyHealth <= 0){
                         window.alert(enemyName+" has been destroyed!");
                        playerMoney = playerMoney + 20;
                        break;
                                    }
                else{
                        window.alert(enemyName +" "+ "survives("+enemyHealth+")");
                                    }
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
                playerHealth = Math.max(0, playerHealth -enemyAttack);
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
            enemyHealth= randomNumber(40, 60);
  
       fight(pickedEnemyName);
            if(playerHealth > 0 && i< enemyNames.length -1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm){
                shop();
                }
            }
         }
      else {
          window.alert("You have lost your robot in battle! Game Over!");
            break;
           }
         }
         endGame();
      };

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
         
        var shop = function(){
           var shopOptionPrompt = window.prompt(
               "Would you like to Refill your health, upgrade your attack, or leaave the store? Please enter one: 'R', 'U', 'L' to make a choice.");
           

           switch (shopOptionPrompt){
               case "R":
                case"r":
                   if (playerMoney >= 7){
                   window.alert("Refilling player's health by 20 for $7.");
                   //increasing player's health and decreasing money
                   playerHealth = playerHealth + 20;
                   playerMoney = playerMoney - 7;
                    }
                    else{
                        window.alert("You don't have enough money!");
                    }
                    break;

                case "U":
                case "u":
                    if(playerMoney >=7){
                    window.alert("Upgrading player's attack by 6 for $7.");
                    //increase attack and decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                    }
                    else{
                        window.alert("You don't have enough money!");
                    }
                    break;

                case "L":
                case "l":
                    window.alert("Leaving the store");
                    // do nothing, so function will end
                    break;
                    
                default:
                    window.alert("you did not pick a valid option. Try again.");
                    //calling the shop function again
                    shop();
                    break;
                    
           }
        };

        startGame();