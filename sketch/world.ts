// World class greate the in game world with gradient, spawn the dynamite with a for loop and remove with a for loop

class World {

    /* Variable */
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
        this.interval = 3000;
        this.time = 0;
        this.loaded = false;
    }
    
    /* Method */
    public getBall() {
        return this.ball;
    }

    public getDynamites() {
        return this.dynamites;
    }

    public update(): void {
        this.spawnDynamite();

        this.time += deltaTime;
        this.interval -= 0.1;
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
    private checkDead() {
        this.collision.paddleHit(this.dynamites, this.paddle);
    }

    private removeDynamite(): void {
        for (let index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].dynamiteYPos > height + 37 || this.dynamites[index].hit == true) {
                this.dynamites.splice(index, 1);
            }
        }
    }

    private checkBall() {
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

    public constrainLine() {
        push();
        strokeWeight(2);
        stroke("grey");
        line(windowWidth - windowWidth, windowHeight / 1.4, windowWidth, windowHeight / 1.4);
        pop();
    }

    public draw(theRandomStars: any): void {
        this.gradient();
        theRandomStars.draw();
        this.constrainLine()
        this.ball.draw();
        for (const dynamite of this.dynamites) {
            dynamite.draw();
        }
        this.paddle.draw();
        this.removeDynamite();
        this.checkDynamites();
        this.checkBall();
        this.checkDead();
    }
}
