class log{

    constructor(x,y,h,angle){
        var options={
            restituion:1
        }
        this.body=Bodies.rectangle(x,y,20,h, options);
        this.w=20;
        this.h=h;
        this.angle=angle
        World.add(world,this.body)
    
    }

display(){
var angle=this.body.angle
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}
    
}