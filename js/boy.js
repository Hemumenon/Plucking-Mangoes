class Boy {
    constructor(x,y) {
      var options = {
          friction : 1.5,
          density : 1,
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 310;
      this.height = 390;
      this.image = loadImage("boy.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("green");
      fill("blue");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }