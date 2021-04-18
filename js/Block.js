class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }

     score(){
       if (this.visibilitly<0 && this.visibilitly>-105 ) {
         score++;
         
       }
       blocks1.score();
       blocks2.score();
       blocks3.score();
       blocks4.score();
       blocks5.score();
       blocks6.score();
       blocks7.score();
       blocks8.score();
       blocks9.score();

     } 
    
}