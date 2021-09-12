//GAME STARTS-----------------
//"WIN" PLAYER ROBOT HAS DEFEATED ALL ENEMY-ROBOTS
// *FIGHT ALL ENEMY-ROBOTS
// *DEFEAT EACH ENEMY-ROBOT
//"LOSE" PLAYER ROBOT'S HEALTH IS ZERO OR LESS


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1)+ min);
    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        if (promptFight === "" || promptFight === null){
            window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
        }
        promptFight = promptFight.toLowerCase();

        if (promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
             window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
         playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);
         return true;
        }
    }
        return false;
    };

  var fight = function(enemy){
    while(playerInfo.health > 0 && enemy.health > 0){
     //function to generate a random numeric value 
     if(fightOrSkip()){
         break;
     }
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
               console.log(playerInfo.name +" "+ "attacks" +" "+enemy.name+"." +" "+ enemy.name+ " has "+enemy.health+ " left.");
                if (enemy.health <= 0){
                         window.alert(enemy.name+" has been destroyed!");
                        playerInfo.money = playerInfo.money + 20;
                        break;
                                    }
                else{
                        window.alert(enemy.name +" "+ "survives("+enemy.health+")");
                                    }
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
                playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
                console.log(enemy.name+" "+"counter attacks! "+ playerInfo.name+ " has : " + playerInfo.health);


            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else{
                window.alert(playerInfo.name+" "+ "is still in the game.");
            }
      }
    };

    var startGame= function() {
        //calls upon this and resets player's stats
        playerInfo.reset();
        
    for (var i = 0; i < enemyInfo.length; i++){
        console.log(playerInfo);
        if (playerInfo.health >0){
            window.alert("Welcome to Robot Gladiators! " + (i + 1));
            
        
        var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health= randomNumber(40, 60);
            console.log(pickedEnemyObj);
  
       fight(pickedEnemyObj);
            if(playerInfo.health > 0 && i< enemyInfo.length -1){
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
             if (playerInfo.health > 0) {
                 window.alert("Great job, you've survived the game! You have a score of " +playerInfo.money +".");
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
                  playerInfo.refillHealth();
                    break;

                case "U":
                case "u":
                    playerInfo.upgradeAttack();
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

        var getPlayerName = function(){
            var name = "";
            while (name ==="" || name === null){
                name = prompt("What is your robot's name?");
            }
            console.log("Your robot's name is " +name);
            return name;
        };

        var playerInfo = {
            name: getPlayerName(),
            health: 100,
            attack: 10,
            money: 10,
            reset: function(){
                this.health =100;
                this.money = 10;
                this.attack =10;
            },
            refillHealth: function() {
                if (this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
            }
                else {
                    window.alert("You don't have enough money!");
                }
            },
            upgradeAttack: function() {
                if (this.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -=7;
            }
            else {
                window.alert("You don't have enough money!");
            }
        }
        };
        
        var enemyInfo = [
            {
                name: "Roborto",
                attack: randomNumber(10,14)
            },
            {
                name: "Amy Android",
                attack: randomNumber(10,14)
            },
            {
                name: "Robo Trumble",
                attack: randomNumber(10,14)
            }
        ];
        

        startGame();