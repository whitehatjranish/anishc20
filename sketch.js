var sqre,resc

function setup() {
  createCanvas(800,400);
 sqre= createSprite(400, 200, 50, 50);
 resc= createSprite(400, 200, 80, 50);

sqre.shapeColor="violet";
resc.shapeColor="violet";

}

function draw() {
  background(0);  
sqre.x=mouseX;
sqre.y=mouseY;
if(sqre.x-resc.x<sqre.width/2+resc.width/2&&resc.x-sqre.x<sqre.width/2+resc.width/2){
  sqre.shapeColor="blue";
resc.shapeColor="blue";
}else{
  sqre.shapeColor="violet";
resc.shapeColor="violet";

}



  drawSprites();



}