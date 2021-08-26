class Canon{
    constructor(x, y, width, height,angle){
        this.x=x
        this.y=y
        this.width
        this.height=height 
        this.angle=angle }
        display(){
            push()
            translate(this.x,this.y)
            rotate(this.angle)
            rect(-10,-20,this.width,this.height)
            pop()
            arc(this.x-40,this.y+80,90,80,PI,TWO_PI)
        }
}
