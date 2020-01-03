class World {

    /* Variable */
    // private entities: Entity[];
    private ball: Ball;
    private dynamites: Dynamite[];
    private interval: number;
    private time: number;
    // private paddle: Paddle;
    private collision: Collision;
    public loaded: boolean;


    constructor() {
        this.ball = new Ball();
        this.collision = new Collision();
        this.dynamites = [];
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
        this.collision.dynamiteHit(this.dynamites);
    }
    
    private removeDynamite(): void {
        for (let index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].dypos > height + 37 || this.dynamites[index].hit == true) {
                this.dynamites.splice(index, 1);
            }
        }
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

    private dots(): void {
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        // for (let i = 0; i < 10; i++) {
        //     point(random(width / 100, width), random(height / 100, height));
        // }
        point(width / 2.5,height / 4);
        point(width / 2, height / 2);
        point(width / 1.5 ,height / 2.9);
        point(width / 5.5 ,height / 2.5);
        point(width / 1.5 ,height / 1.1);
        point(width / 5.5 ,height / 1.2);
        point(width / 1.5 ,height / 1.9);
        noStroke();

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
        this.gradient();
        this.dots();
        this.ball.draw();
        for (const dynamite of this.dynamites) {
            dynamite.draw();
        }
        this.removeDynamite();
        this.collision.draw();
        this.checkDynamites();
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