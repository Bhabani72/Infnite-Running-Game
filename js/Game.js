class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Cycle1 = createSprite(100,200);
    Cycle1.addImage(Cycle1img);
    Cycle1.scale=0.2;
    Cycle2 = createSprite(300,200);
    Cycle2.addImage(Cycle2img);
    Cycle2.scale=0.2;
    Cycle3 = createSprite(500,200);
    Cycle3.addImage(Cycle3img);
    Cycle3.scale=0.2;
    Cycle4 = createSprite(700,200);
    Cycle4.addImage(Cycle4img);
    Cycle4.scale=0.2;
    Cycles = [Cycle1, Cycle2, Cycle3, Cycle4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
    background("cyan");
    image(trackimg,0,-displayHeight*5,displayWidth,displayHeight*6)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        Cycles[index-1].x = x;
        Cycles[index-1].y = y;

        if (index === player.index){
          Cycles[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = Cycles[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance>4500){
      gameState = 2
    }

    drawSprites();
  }

  
}
