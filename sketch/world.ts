class World {

    /* Variable */
    // private entities: Entity[];
    public ball: Ball;
    public dynamite: Dynamite;

    constructor() {
        this.ball = new Ball();
        this.dynamite = new Dynamite();
    }

    /* Method */
    // private randomizeBackground(): number;
    // private spawnNew(): object;
    // private collision(): object;
   public draw(): void {
        this.ball.draw();
        this.dynamite.draw();
    }

}
