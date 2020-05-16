
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  for(var i=65;i<91;i++) 
{ 
  var object= String.fromCharCode(i); 
  rain1= new Rain(object); 
  rain1.display(); 
}
}