var commands = ["Look up some cat gifs!","Read a poem.","Read css docs for 10 minutes!","Have a snack :)",
"Study html tags.","Drink some water :)","Go over some JavaScript!","Procrastinate! >:)","Get some fresh air","Look up AI",
"Donate to charity","Stay still for 10 seconds.","Practice Bootstrap"];






function getRandomNumber(){
  return Math.round(Math.random()*(0+commands.length)+0);

}

function getRandomCommand(){
  var command = commands[getRandomNumber()];
  document.getElementById("command").innerHTML =  command ;
  console.log(getRandomNumber());

}
