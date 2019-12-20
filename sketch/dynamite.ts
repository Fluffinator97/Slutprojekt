class Dynamite {

    /* Variable */
    private dwidth: number;
    private dheight: number;
    private dypos: number;
    private dxpos: number;
    // private dopespeed: number;


    constructor() {
        this.dwidth = 40;
        this.dheight = 74;
        this.dypos = 1;
        this.dxpos = 0;
        // this.dopespeed = 1;
    }

    /* Method */
    private counterYPos(): any {
        for (this.dypos < height + 19; this.dypos++;) {
            if(this.dypos > height + 19) {
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

    public getBoundingRectangle(): BoundingRect {
        return {
            x: this.dxpos,
            y: this.dypos,
            width: this.dwidth,
            height: this.dheight
        }
    }

    public draw() {
        rectMode(CENTER);
        fill('red');
        rect(this.randomXPos(), this.counterYPos(), this.dwidth, this.dheight, 5, 5, 5, 5);
    }
    
    // private explode(): nice;
    // private xDirection(): number;
    // private XPosition(): number;

}