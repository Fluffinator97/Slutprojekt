class Collision {

    /* Variable */
    private ball: Ball;
    public collisionBall: boolean;
    // private theBall: Object;
    private paddle: Paddle;
    // private collisionBall: boolean;
    private distance: number

    constructor() {
        this.ball = new Ball();
        this.paddle = new Paddle();
        this.collisionBall = false;
        // this.collisionBall = false;
        this.distance = dist(this.paddle.getBoundingCicle().x, this.paddle.getBoundingCicle().y, this.ball.getBoundingCicle().x, this.ball.getBoundingCicle().y);
    }

    /* Method */
    public ballCollision(): any {

        if (this.distance < this.paddle.getBoundingCicle().rad - 40 + this.ball.getBoundingCicle().rad - 40) {
            this.ball.flipDirectionY();
            console.log("hit");
            // this.collisionBall = true;
        }
}
    // public getCollisionBall(): boolean {
    //     return this.collisionBall;
    // }
    
    public draw() {
        // this.ballCollision();
        // if (this.distance < this.paddle.getBoundingCicle().rad + this.ball.getBoundingCicle().rad) {
        //     this.ball.flipDirectionY();
        //     console.log("hit");
        // }
    }
}