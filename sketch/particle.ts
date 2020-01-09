class Particle {
    public particleX: number;
    public particleY: number;
    private particleVX: number;
    private particleVY: number;
    private alpha: number;
    private alphaE: number;
    private particleVXE: number;
    private particleVYE: number;


    constructor(x: number, y: number) {
        this.particleX = x;
        this.particleY = y;
        this.particleVX = 0;
        this.particleVY = 0;
        this.particleVXE = 0;
        this.particleVYE = 0;
        this.alpha = 255;
        this.alphaE = 255;

    }


    private update(): void {
        this.particleVX = random(-3, 3);
        this.particleVY = random(-5, -1);
        this.particleVXE = random(-60, 60);
        this.particleVYE = random(0, 10);
        this.alpha-= 25;
        this.alphaE -= 5;
    }

    public fire(): any {
        this.update();
        noStroke();
        fill(255, 233, 152  , this.alpha)
        ellipse(this.particleX += this.particleVX, this.particleY += this.particleVY, 5);
    }

    public explotion(): any {
        this.update()
        strokeWeight(1);
        stroke(255, 233, 52, this.alphaE);
        fill(255, 233, 152  , this.alphaE)
        ellipse(this.particleX += this.particleVXE, this.particleY += this.particleVYE, 8);
        noStroke();

    }
}
