class Collision {

    /* Variable */
    private ball: Ball;
    // private theBall: Object;
    private paddle: Paddle;
    // private collisionBall: boolean;

    constructor() {
        this.ball = new Ball();
        this.paddle = new Paddle();
        // this.collisionBall = false;
    }

    /* Method */
    public ballCollision(): any{
        if(mouseX == this.ball.bxpos) {
            this.ball.setDirection(); 
        }
        // return collosionBall = true;
    }
    public seeBall(): void {
        console.log("paddleY", this.ball.bypos);
        console.log("ballX", this.ball.bxpos);
    }

    

}
