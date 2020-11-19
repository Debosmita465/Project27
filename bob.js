class bob{
    constructor(x,y,radius){
        var options = {
            'isStatic':false, 'restitution':1, 'friction':0,
             'density':1.2
     }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER); 
         fill(217,47,200);
        ellipse(0,0,this.radius*2);
        pop();   
    }
    
    }