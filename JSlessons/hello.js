
function helloFunction () {
 alert ('Hello Napier');
 }

 /* function addMessage()
 {
   for (var i = 0; i < 10; i++) {
     var counter =i;

       console.log("point added");
       document.getElementById("list").innerHTML +=
       "<li>Hi i'm javaScript</li>" + counter
   }
 }*/
var current = "red";

 function changeColor()
 {
   if (current === "red")
      current = "blue";

    else
      current = "red";

    document.getElementById("redPara").style.color = current;
    document.getElementById("redPara").innerHTML = "I am " + current ;


   //document.getElementById("redPara").style.fontSize = "25px";
 }
