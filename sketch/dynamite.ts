class Dynamite {

    /* Variable */
    private dwidth: number;
    private dheight: number;
    private dypos: number;
    private dxpos: number;
    // private dopespeed: number;


    constructor() {
        this.dwidth = 20;
        this.dheight = 45;
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



    public draw() {
        rectMode(CENTER);
        fill('red');
        rect(this.randomXPos(), this.counterYPos(), this.dwidth, this.dheight, 5, 5, 5, 5);

        // if (this.dypos > height) {
        //     rect(this.dxpos, this.dypos,this.dwidth, this.dheight, 5, 5, 5, 5);
        // }
    }

    // private randomizePos(): number;
    // private explode(): nice;
    // private xDirection(): number;
    // private XPosition(): number;

}