class block
{
    constructor(x, y, width, height){
      isStatic:false
    }
    display(){
        if(this.body.speed < 3){
      super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 50,50);
          pop();
        }
    }
  };
  