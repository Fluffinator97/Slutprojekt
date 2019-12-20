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
    public theDynamite: Object;

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
        return this.theDynamite;
    }

    private dynamiteSpawn() {

    }

    public draw() {
        push();
        rectMode(CENTER);
        fill('red');
        y = y - 1;
        // this.dxpos = this.dxpos + this.dxspeed * this.dxdirection;
        // this.dypos = this.dypos + this.dyspeed * this.dydirection;
        rect(x, y, 40, 20);
        // rect(this.dxpos, this.dypos, this.dwidth, this.dheight)
        pop();
    }


    // Where is the circle
let x, y;

public setup() {
  // Starts in the middle
  x = width / 2;
  y = height;
}

public draw() {
  background(200);
  
  // Draw a circle
  stroke(50);
  fill(100);
  rect(x, y, 40, 20);

  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

}
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
