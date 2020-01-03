class Particle {
    public particleX: number;
    public particleY: number;
    private particleVX: number;
    private particleVY: number;
    private alpha: number;


    constructor(x: number, y: number) {
        this.particleX = x;
        this.particleY = y;
        this.particleVX = 0;
        this.particleVY = 0;
        this.alpha = 255;

    }


    private update() {
        this.particleVX = random(-3, 3);
        this.particleVY = random(-5, -1);
        this.alpha-= 25;
    }

    public show() {
        this.update();
        fill(255, 233, 152  , this.alpha)
        ellipse(this.particleX += this.particleVX, this.particleY += this.particleVY, 5);
    }
}