var message= ["16% of all low income students attend college","Around 59 million childern are denied an education"];
var counter = 0;
var button = $(".button");
var container = $(".container");

button.on("click", addText);


function addText(){
  container.append(message[counter]);
  counter++
}
