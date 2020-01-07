interface BoundingCiclePaddle {
    x: number,
    y: number,
    rad: number
}

class Paddle {

    /* Variable */
    public ypos: number;
    public xpos: number;  
    private rwidth: number;
    private rheight: number;
    private erad: number;
    private xc: any;
    private leftWall: number;
    private rightWall: number;


    //private gameControll: GameControl;
    // public theBall: Object;
    
    /* Method */

    constructor() {
        //this.gameControll = new GameControl();
        // this.ball = new Ball();
        // this.theBall = this.ball.getBall();
        this.ypos = mouseY;
        this.xpos = mouseX;
        this.rwidth = width * .3;
        this.rheight = 15;
        this.erad = width * .075;
        this.leftWall = 60;
        this.rightWall = width - 60;
    }

    public getBoundingCicle(): BoundingCiclePaddle {
        return {
            x: this.xpos,
            y: this.ypos,
            rad: this.erad
        }
    }


    public draw(): void {
        this.ypos = mouseY;
        this.xpos = mouseX;
        ellipseMode(RADIUS);
        rectMode(CENTER);
        fill('lightblue');
        // xm is just the mouseX, while
        // xc is the mouseX, but constrained
        // between the leftWall and rightWall!
        ellipse(this.xc, this.ypos, this.erad, this.erad);
        fill('purple');
        rect(this.xc, this.ypos, this.rwidth, this.rheight, 10);
        this.xc = constrain(this.xpos, this.leftWall, this.rightWall);
    }

}
