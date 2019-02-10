var name = "Player";
var hp = 100;
var treasures = ["Gold","Diamonds","a Spirit Orb","a Ruby","an Hourglass","a Goblet","Nothing"];
var enemies = ["Goblin","Undead Mammoth","Skeleton","Warlock","Troll","Cyclops","Wolf"];

var currEnemy = "";
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




function roomOneLookAround(){
  document.getElementById("roomOneDesc").innerHTML = "You found " + getRandomTreasure();
  document.getElementById("roomOneDesc").innerHTML += "<p> You were attacked by a </p> " +getRandomEnemy();
  document.getElementById("commandKill").style.visibility= "visible";
}

function roomOneAttack(){
  document.getElementById("roomOneDesc").innerHTML = "You hit and killed the " +currEnemy;
  document.getElementById("roomOneDesc").innerHTML += "<p>You pick up </p> " + currTreasure;
  document.getElementById("commandKill").style.visibility = "hidden";
  document.getElementById("commandLookAround").style.visibility = "hidden";
}
