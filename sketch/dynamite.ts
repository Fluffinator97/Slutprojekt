interface BoundingRect {
    x: number,
    y: number,
    width: number,
    height: number,
    hit: boolean
}

class Dynamite {

    /* Variable */

    private dwidth: number;
    private dheight: number;
    public dypos: number;
    public dxpos: number;
    public hit: boolean;
    public particles: Particle[];

    constructor() {
        this.dwidth = 40;
        this.dheight = 74;
        this.dypos = 1;
        this.dxpos = 0;
        this.hit = false;
        this.particles = [];
    }

    /* Method */

    private counterYPos(): any {
        for (this.dypos < height + 37; this.dypos++;) {
            this.dypos = this.dypos + 0.01;
            return this.dypos;
        }
    }

    private randomXPos(): any {
        if (this.dxpos == 0) {
            this.dxpos = random(15, width - 15);
        }
        return this.dxpos;
    }

    public getBoundingRectangle(): BoundingRect {
        return {
            x: this.dxpos,
            y: this.dypos,
            width: this.dwidth,
            height: this.dheight,
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
        rect(this.randomXPos(), this.counterYPos(), this.dwidth, this.dheight, 5, 5, 5, 5);
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