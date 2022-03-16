

function setup(){
  database = firebase.database();//namespaced
  
  createCanvas(500,500);

 Ball = createSprite(250,250,10,10);
 Ball.shapeColor = "red";


  var BallPosition = database.ref('ball/position');//pathway

  BallPosition.on("value", readPosition);
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){

  database.ref('ball/position').set({
    
    'x': position.x + x , 
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();//the changed value
 Ball.x = position.x; 
 Ball.y = position.y;
}

