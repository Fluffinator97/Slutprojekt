class World {

    /* Variable */
    // private entities: Entity[];
    private ball: Ball
    private dynamites: Dynamite[]
    private interval: number 
    private time: number 

    constructor() {
        this.ball = new Ball();
        this.dynamites = [];
        this.interval = 1000;
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

    private spawnDynamite() {
        if (this.time > this.interval) {
            this.dynamites.push(new Dynamite());
            this.time = 0;
        }
    }

    /* Method */
    // private randomizeBackground(): number;
    // private spawnNew(): object;
    // private collision(): object;

   public draw(): void {
        this.ball.draw();
        for (const dynamite of this.dynamites) {
            dynamite.draw();
        }
        console.log("BallX ", this.ball.updateBallX());
        console.log("BallY ", this.ball.updateBallY());
    }

}