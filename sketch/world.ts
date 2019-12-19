class World {

    /* Variable */
    // private entities: Entity[];
    public ball: Ball

    constructor() {
        this.ball = new Ball();
    }

    /* Method */
    // private randomizeBackground(): number;
    // private spawnNew(): object;
    // private collision(): object;
   public draw(): void {
        this.ball.draw();
    }

}