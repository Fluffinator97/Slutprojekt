class Entity {

    /* Variable */
    protected height: number;
    protected width: number;
    public ypos: number;
    protected xpos: number;
    //protected color: number;
    protected collision: boolean;
    // protected collisionSound: p5.SoundFile;

    constructor(collision: boolean, width: number, height: number, ypos: number, xpos: number) { //, color: number
        this.collision = collision;
        this.width = width;
        this.height = height;
        this.ypos = ypos;
        this.xpos = xpos;
        // this.color = color;
        // this.collisionSound = new p5.SoundFile; //new p5.SoundFile();
    }

    /* Method */
    

}
