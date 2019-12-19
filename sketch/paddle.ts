class Paddle {

    /* Variable */
    private ypos: number;
    private xpos: number;  
    private rwidth: number;
    private rheight: number;
    private erad: number;
    private xc: number;
    private leftWall: number;
    private rightWall: number;


    private gameControll: GameControl;
    private ball: Ball;
    private theBall: Object;
    
    /* Method */

    constructor() {
        this.gameControll = new GameControl();
        this.ball = new Ball();
        this.theBall = this.ball.getBall();
        this.ypos = this.gameControll.updateYpos();
        this.xpos = this.gameControll.updateXpos();
        this.rwidth = width * .3;
        this.rheight = 15;
        this.erad = 60;
        this.leftWall = 60;
        this.rightWall = width - 60;
    }
    
    
    public draw(): void {
        ellipseMode(RADIUS);
        rectMode(CENTER);
        fill('purple');
        // xm is just the mouseX, while
        // xc is the mouseX, but constrained
        // between the leftWall and rightWall!
        rect(this.xc, mouseY, this.rwidth, this.rheight, 10);
        ellipse(this.xc, mouseY, this.erad, this.erad);
       
        this.xc = constrain(mouseX, this.leftWall, this.rightWall);
    }
}
