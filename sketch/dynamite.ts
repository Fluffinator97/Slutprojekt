interface BoundingRect {
    x: number,
    y: number,
    width: number,
    height: number
}

class Dynamite extends Entity {

    /* Variable */
        public hit: boolean;
        public particles: Particle[];

    constructor() {
        super(false, 40, 74, 1, 0); //, color(255,0,0)
        this.hit = false; 
        this.particles = [];
    }

    /* Method */
    private counterYPos(): any {
        for (this.ypos < height + 37; this.ypos++;) {
            return this.ypos;
        }
    }

    private randomXPos(): any {
        if (this.xpos == 0) {
            this.xpos = random(10, width - 10);
        }
        return this.xpos;
    }

    public getBoundingRectangle(): BoundingRect {
        return {
            x: this.xpos,
            y: this.ypos,
            width: this.width,
            height: this.height,
            // hit: this.hit
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
        rect(this.randomXPos(), this.counterYPos(), this.width, this.height, 5, 5, 5, 5);
        fill('white');

        this.particles.push(new Particle(this.randomXPos(), this.counterYPos() - 40));
        for (const particle of this.particles) {
            particle.fire();
        }

        if(this.hit === true) {
            this.explode();
            explosion.play();
        }
        noStroke();
    }

}

