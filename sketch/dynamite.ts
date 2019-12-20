class Dynamite {

    /* Variable */
    private dheight: number;
    private dwidth: number;
    private dypos: number;
    private dxpos: number;
    // private dyspeed: number;
    // private dxspeed: number;
    // private dxdirection: number;
    // private dydirection: number;
    // private dopespeed: number;

    constructor() {
        // private randomizePos(): number;
        // private xDirection(): number;
        // private randomXPosition(): number;
        // private explode(): nice;
        this.dheight = 20;
        this.dwidth = 50;
        this.dypos = 1;
        this.dxpos = 0;
        // this.dxspeed = 10;
        // this.dyspeed = 10;
        // this.dxdirection = 1;
        // this.dydirection = 1;
        // this.dopespeed = 1;
    }

    /* Method */
    private counterYPos(): any {
        for (this.dypos < height + 19; this.dypos++;) {
            if (this.dypos > height + 19) {
                this.dypos = 0;
                this.dxpos = 0;
            } else {
                return this.dypos;
            }
        }
    }

    private randomXPos(): any {
        if (this.dxpos == 0) {
            this.dxpos = random(10, width - 10);
        }
        return this.dxpos;
    }

    public draw() {
        rectMode(CENTER);
        fill('red');
        rect(this.randomXPos(), this.counterYPos(), this.dwidth, this.dheight, 5, 5, 5, 5);

        // if (this.dypos > height) {
        //     rect(this.dxpos, this.dypos,this.dwidth, this.dheight, 5, 5, 5, 5);
        // }
    }

}

//     public draw() {
//     push();
//     rectMode(CENTER);
//     fill('red');
//     y = y - 1;
//     // this.dxpos = this.dxpos + this.dxspeed * this.dxdirection;
//     // this.dypos = this.dypos + this.dyspeed * this.dydirection;
//     rect(x, y, 40, 20);
//     // rect(this.dxpos, this.dypos, this.dwidth, this.dheight)
//     pop();
// }


// private dynamiteSpawn() {

// }











//     // Where is the dynamite
// let x, y;

// public setup() {
//     // Starts in the middle
//     x = width / 2;
//     y = height;
// }
// // Moving down at a constant speed
// y = y + 1;

// // Reset to the top
// if (y < 0) {
//     y = height;
// }
