class Entity {

    /* Variable */
    private colission: boolean;
    private speed: number;
    private size: number; 
    private soundFX: url;
    private color: string;
    public ball: Ball;
    public dynamite: Dynamite;

    /* Method */ 
    // private updateSpeed(): number;
    // private playSound(): void;
    // private getDifficulty(): number;
    // public draw(): void;

    constructor() {
        this.ball = new Ball();
        this.dynamite = new Dynamite();

    }

    public draw() {
        
    }
}
