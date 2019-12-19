class Dynamite {

    /* Variable */
    private dheight: number;
    private dwidth: number;
    private dypos: number;
    private dxpos: number;
    private dyspeed: number;
    private dxspeed: number;
    private dxdirection: number;
    private dydirection: number;
    //public theDynamite: Object;

    constructor(dheight: number, dwidth: number, dypos: number, dxpos: number, dyspeed: number, dxspeed: number, dxdirection: number, dydirection: number) {
        // private randomizePos(): number;
        // private xDirection(): number;
        // private randomXPosition(): number;
        // private explode(): nice;
        this.dheight = 100;
        this.dwidth = 50;
        this.dypos = 1;
        this.dxpos = width / 2;
        this.dxspeed = 10;
        this.dyspeed = 10;
        this.dxdirection = 1;
        this.dydirection = 1;
        //this.theDynamite = new Dynamite;
    }

    public getDynamite(): Object {
        return this.getDynamite;
    }

    private dynamiteSpawn() {

    }

    public draw() {
        push();
        rectMode(CENTER);
        fill('red');
        this.dxpos = this.dxpos + this.dxspeed * this.dxdirection;
        this.dypos = this.dypos + this.dyspeed * this.dydirection;
        //rect(81, 81, 63, 63);
        rect(this.dxpos, this.dypos, this.dwidth, this.dheight)
        pop();
    }

}
