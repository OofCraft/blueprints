//defines the class
class Box {
    //constructs the basics for the class to display with
    constructor(x,y,width,height) {

        var options = {
            restitution: 1,
            friction: 0.5,
            density: 0.3
        }
        //make the x, y, width, hieght, and body options with passed values
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //adds the body to the world
        World.add(world,this.body);

    }
    //display settings, put in draw function so shape placement is always live
    display() {
        //make the variables for the position and angle
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); //captures the new settings
        translate(pos.x,pos.y); //change the 0 of the axis to the given x and y position
        rotate(angle); //rotates the shapes according to what the physics engine says it should
        rectMode(CENTER); //rectMode
        fill(255); //changes the fill color (white in this case)
        rect(0,0,this.width,this.height); //the actual rect function for the shape.
        pop(); //revert to the old setting

    }




}