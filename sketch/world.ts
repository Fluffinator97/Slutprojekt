class World {

    /* Variable */
    //private entity: Entity;
    private ball: Ball;
    private dynamites: Dynamite[];
    private interval: number;
    private time: number;
    private paddle: Paddle;
    private collision: Collision;
    public loaded: boolean;


    constructor() {
        this.ball = new Ball();
        this.paddle = new Paddle();
        this.collision = new Collision();
        this.dynamites = [];
        //this.entity = new Entity(collision, width, height, ypos, xpos,); //color
        this.interval = 3000;
        this.time = 0;
        this.loaded = false;
    }
    public getBall() {
        return this.ball;
    }

    public getDynamites() {
        return this.dynamites;
    }

    public update(): void {
        this.spawnDynamite();

        this.time += deltaTime;
        this.interval -= 0.001;
    }

    private spawnDynamite(): void {
        if (this.time > this.interval) {

            this.dynamites.push(new Dynamite());
            this.time = 0;
        }
    }

    private checkDynamites() {
        this.collision.dynamiteHit(this.dynamites, this.ball);
    }
    
    private removeDynamite(): void {
        for (let index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].ypos > height + 37 || this.dynamites[index].hit == true) {
                this.dynamites.splice(index, 1);
            }
        }
    }

    private checkBall(){
        this.collision.ballCollision(this.ball, this.paddle);
    }

    private gradient(): void {
        noFill();
        for (let i = 0; i < height; i++) {
            let inter = map(i, 0, height, 0, 1);
            let c = lerpColor(color(25), color(65), inter);
            stroke(c);
            line(0, i, width, i);

        }
    }


    //     if (this.dynamites[] > height){
    //         this.time = 0;
    //     }
    //     }
    // }

    /* Method */
    // private randomizeBackground(): number;
    // private spawnNew(): object;
    // private collision(): object;

    public draw(theRandomStars:any): void {
        this.gradient();
        theRandomStars.draw();
        this.ball.draw();
        this.paddle.draw();
        for (const dynamite of this.dynamites) {
            dynamite.draw();
        }
        this.removeDynamite();
        this.checkDynamites();
        this.checkBall();
        // console.log("BallX ", this.ball.updateBallX());
        // console.log("BallY ", this.ball.updateBallY());
    }

    // hits(paddle) {

    //     // check if the circle is intersecting with the brick, still need to test if the ball is inside the brick

    //     if(this.x + this.r >  brick.x &&
    //         this.x - this.r < (brick.x + brick.w) &&
    //         this.y + this.r >  brick.y &&
    //         this.y - this.r < (brick.y + brick.h)) 
    //      {  
    //        return true; 
    //      }

    // }

}
