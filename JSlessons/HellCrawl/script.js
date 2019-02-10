var name = "Player";
var hp = 100;
var str = 10;

var treasures = ["Gold","Diamonds","a Spirit Orb","a Ruby","an Hourglass","a Goblet","Nothing"];
var enemies = ["Goblin","Undead Mammoth","Skeleton","Warlock","Troll","Cyclops","Wolf"];

// Enemy stats
var currEnemy = "";
var enemyHp = 10;
var enemyStr = [2,3,4,5];


var currTreasure = "";


// Random treasure generator

function getRandomTreasure(){
  var num = Math.round(Math.random()*(0+treasures.length-1)+0);
  currTreasure = treasures[num];
  return treasures[num];
}

// Random enemy generator

function getRandomEnemy(){
  var num = Math.round(Math.random()*(0+enemies.length-1)+0);
  currEnemy = enemies[num];
  console.log(num);
  return enemies[num];
}

// Random Enemy damage

function getRandomEnemyDamage(){
  var num = Math.round(Math.random()*(0+enemyStr.length-1)+0);
  hp = hp - enemyStr[num];
  return enemyStr[num];
  hp = hp - enemyStr[num];
}




function roomOneLookAround(){
  document.getElementById("roomOneDesc").innerHTML = "You found " + getRandomTreasure();
  document.getElementById("roomOneDesc").innerHTML += "<p> You were attacked by a </p> " +getRandomEnemy() +" with 10 hp";
  document.getElementById("commandKill").style.visibility= "visible";
}

function roomOneAttack(){
  document.getElementById("roomOneDesc").innerHTML = "<p> The "+currEnemy +" hit you for  " +getRandomEnemyDamage() + " hp</p>"
  document.getElementById("roomOneDesc").innerHTML += "<p>You remaining hp = " + hp; "</p>"
  document.getElementById("roomOneDesc").innerHTML += "You hit the " +currEnemy + " for " + str + " hp";
  document.getElementById("roomOneDesc").innerHTML += "<p>You pick up " + currTreasure; + "</p>"
  document.getElementById("commandKill").style.visibility = "hidden";
  document.getElementById("commandLookAround").style.visibility = "hidden";
}
