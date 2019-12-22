class World {

    /* Variable */
    // private entities: Entity[];
    private ball: Ball
    private dynamites: Dynamite[]
    private interval: number 
    private time: number 
    private paddle: Paddle

    constructor() {
        this.ball = new Ball();
        this.dynamites = [];
        this.interval = 3000;
        this.time = 0;
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

    private removeDynamite(): void {
        for (let index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].dypos > height / 2) {
                // console.log(index + "over height", this.dynamites[index]);
                this.dynamites.splice(index, 1);
                // splice(this.dynamites, index, index);
            }
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

   public draw(): void {
        this.ball.draw();
        for (const dynamite of this.dynamites) {
            dynamite.draw();
        }
        this.removeDynamite();
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