interface BoundingCicle {
    x: number,
    y: number,
    rad: number
    ydirection: number,
    xdirection: number
}

class Ball extends Entity {

    /* Variable */
    private rad: number;
    private yspeed: number;
    private xspeed: number;
    public xdirection: number;
    public ydirection: number;
    private distance: number;

    constructor() {
        super(false, width, height, width / 2, height / 4); //color(255,223,0)
        this.rad = 36;
        this.xspeed = 5;
        this.yspeed = 2.2;
        this.xdirection = 1;
        this.ydirection = 1;
        this.distance = 0;
    }

    public getBoundingCicle(): BoundingCicle {
        return {
            x: this.xpos,
            y: this.ypos,
            rad: this.rad,
            ydirection: this.ydirection,
            xdirection: this.xdirection
        }
    }

    public creteDistance() {
        this.distance = dist(mouseX, mouseY, this.updateBallY(), this.updateBallX());

    }

    public flipDirectionY() {
        this.ydirection *= -1;
    }

    public flipDirectionX() {
        this.xdirection *= -1;
    }

    public updateBallX(): number {
        return this.xpos;
    }

    public updateBallY(): number {
        return this.ypos;
    }

    public draw(): void {
        this.creteDistance();
        ellipseMode(RADIUS);
        fill('gold');
        ellipse(this.xpos, this.ypos, this.rad, this.rad);

        this.xpos = this.xpos + this.xspeed * this.xdirection;
        this.ypos = this.ypos + this.yspeed * this.ydirection;


        if (this.ydirection == 1) {
        if (this.distance < 48) { 
            this.ydirection *= -1;
            console.log("hit in Y");
        } else {
            console.log('false')
        }}
        if (this.xpos >= width - this.rad || this.xpos < this.rad) {
            this.xdirection *= -1;
        } if (this.ypos >= height - this.rad || this.ypos < this.rad) {
            this.ydirection *= -1;
        }


        // console.log("this.distance ", this.distance);
    }

}