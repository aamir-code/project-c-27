class Bob{
    constructor(x,y,r) {
        var Bob_options = {
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:1
        }
        this.body = Bodies.circle(x,y,r,Bob_options)
        this.r = r;
        this.x = x;
        this.y = y;

        World.add(world,this.body)

    }
    display() {
        
       push();
       ellipseMode(RADIUS);
       fill("lightBlue");
       circle(this.body.position.x,this.body.position.y,this.r);
    }
}