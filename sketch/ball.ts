interface BoundingCicle {
    x: number,
    y: number,
    rad: number
    ydirection: number,
    xdirection: number
}


class Ball {

    /* Variable */
    private brad: number;
    public bypos: number;
    public bxpos: number;
    private byspeed: number;
    private bxspeed: number;
    public bxdirection: number;
    public bydirection: number;
    private distance: number;
    private paddle: Paddle;

    constructor() {
        this.brad = 36;
        this.bxspeed = 5;
        this.byspeed = 2.2;
        this.bxdirection = 1;
        this.bydirection = 1;
        this.bxpos = width / 2;
        this.bypos = height / 4;
        this.paddle = new Paddle();
        this.distance = 0;
    }

    public getBoundingCicle(): BoundingCicle {
        return {
            x: this.bxpos,
            y: this.bypos,
            rad: this.brad,
            ydirection: this.bydirection,
            xdirection: this.bxdirection
        }
    }

    public creteDistance() {
        this.distance = dist(mouseX, mouseY, this.updateBallY(), this.updateBallX());

    }

    public flipDirectionY() {
        this.bydirection *= -1;
    }

    public flipDirectionX() {
        this.bxdirection *= -1;
    }

    public updateBallX(): number {
        return this.bxpos;
    }

    public updateBallY(): number {
        return this.bypos;
    }

    public draw(): void {
        this.creteDistance();
        ellipseMode(RADIUS);
        fill('gold');
        ellipse(this.bxpos, this.bypos, this.brad, this.brad);

        this.bxpos = this.bxpos + this.bxspeed * this.bxdirection;
        this.bypos = this.bypos + this.byspeed * this.bydirection;


        if (this.bydirection == 1) {
            if (this.distance < 1) {
                this.bydirection *= -1;
                // console.log("hit in Y");
            } else {
                // console.log('false')
            }
        }
        if (this.bxpos >= width - this.brad || this.bxpos < this.brad) {
            this.bxdirection *= -1;
        } if (this.bypos >= height - this.brad || this.bypos < this.brad) {
            this.bydirection *= -1;
        }
    }
}