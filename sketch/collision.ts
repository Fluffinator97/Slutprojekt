interface BoundingRect {
    x: number,
    y: number,
    width: number,
    height: number
}

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
        }
        // return collosionBall = true;
    }

}