interface BoundingRect {
    x: number,
    y: number,
    width: number,
    height: number,
    hit: boolean
}

class Dynamite {

    /* Variable */

    private dynamiteWidth: number;
    private dynamiteHeight: number;
    public dynamiteYPos: number;
    public dynamiteXPos: number;
    public hit: boolean;
    public particles: Particle[];

    constructor() {
        this.dynamiteWidth = 40;
        this.dynamiteHeight = 74;
        this.dynamiteYPos = 1;
        this.dynamiteXPos = 0;
        this.hit = false;
        this.particles = [];
    }

    /* Method */

    private counterYPos(): any {
        for (this.dynamiteYPos < height + 37; this.dynamiteYPos++;) {
            this.dynamiteYPos = this.dynamiteYPos + 0.01;
            return this.dynamiteYPos;
        }
    }

    private randomXPos(): any {
        if (this.dynamiteXPos == 0) {
            this.dynamiteXPos = random(15, width - 15);
        }
        return this.dynamiteXPos;
    }

    public getBoundingRectangle(): BoundingRect {
        return {
            x: this.dynamiteXPos,
            y: this.dynamiteYPos,
            width: this.dynamiteWidth,
            height: this.dynamiteHeight,
            hit: this.hit
        }
    }

    public explode() {
        this.particles.push(new Particle(this.randomXPos(), this.counterYPos()));
        for (const particle of this.particles) {
            particle.explotion();
        }
    }

    public draw() {
        rectMode(CENTER);
        fill('red');
        rect(this.randomXPos(), this.counterYPos(), this.dynamiteWidth, this.dynamiteHeight, 5, 5, 5, 5);
        fill('white');

        this.particles.push(new Particle(this.randomXPos(), this.counterYPos() - 40));
        for (const particle of this.particles) {
            particle.fire();
        }

        if (this.hit === true) {
            this.explode();
            explosion.play();
        }
        noStroke();
    }

}