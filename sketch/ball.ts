class Ball {

    /* Variable */
    private brad: number;
    public bypos: number;
    public bxpos: number;
    private byspeed: number;
    private bxspeed: number; 
    private bxdirection: number;
    private bydirection: number;
    // public theBall: any;
    
    constructor() {
        this.brad = 36;
        this.bxspeed = 5;
        this.byspeed = 2.2;
        this.bxdirection = 1;
        this.bydirection = 1;
        this.bxpos = width / 2;
        this.bypos = height / 4;
        // this.theBall = {
        //     brad: this.brad,
        //     bypos: this.bypos,
        //     bxpos: this.bxpos,
        //     byspeed: this.byspeed,
        //     bxspeed: this.bxspeed,
        //     bydirection: this.bydirection,
        //     bxdirection: this.bxdirection
        // }
    }
    
    public flipDirection() {
        console.log("hit");
    }
    public updateBallX(): number {
        return this.bxpos;
    }

    public updateBallY(): number {
        return this.bypos;
    }
    
    public draw(): void {
        ellipseMode(RADIUS);
        fill('gold');
        
        this.bxpos = this.bxpos + this.bxspeed * this.bxdirection;
        this.bypos = this.bypos + this.byspeed * this.bydirection;
        
        if (this.bxpos > width - this.brad || this.bxpos < this.brad) {
            this.bxdirection *= -1;
        }
        if (this.bypos > height - this.brad || this.bypos < this.brad) {
            this.bydirection *= -1;
        }
        
        ellipse(this.bxpos, this.bypos, this.brad, this.brad);
    }
    
}