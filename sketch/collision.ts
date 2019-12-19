class Collision {

    /* Variable */
    private ball: Ball;
    private theBall: Object;
    private paddle: Paddle;
    private dynamite: Dynamite;
    private theDynamite: object;

    constructor() {
        this.ball = new Ball();
        this.theBall = this.ball.getBall();   
        this.dynamite = new Dynamite();
        this.theDynamite = this.dynamite.getDynamite();
        this.paddle = new Paddle();
    }

    /* Method */

    


}