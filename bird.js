class bird{

    constructor(x,y,h){
        var options={
            restituion:1
        }
        this.body=Bodies.rectangle(x,y,20,h, options);
        this.w=20;
        this.h=h;
        World.add(world,this.body)
    
    }

display(){
    fill("red")
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    rect(this.body.position.x,this.body.position.y,this.w,this.h)
}
    
}