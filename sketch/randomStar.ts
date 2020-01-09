// Randomstar class makes random stars with x and y

class randomStar {

    /* Variable */
    private x0: number;
    private x1: number;
    private x2: number;
    private x3: number;
    private x4: number;
    private x5: number;
    private x6: number;
    private x7: number;
    private x8: number;
    private x9: number;
    private x10: number;
    private x11: number;
    private x12: number;

    private y0: number;
    private y1: number;
    private y2: number;
    private y3: number;
    private y4: number;
    private y5: number;
    private y6: number;
    private y7: number;
    private y8: number;
    private y9: number;
    private y10: number;
    private y11: number;
    private y12: number;

    constructor() {
        this.x0 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x1 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x2 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x3 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x4 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x5 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x6 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x7 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x8 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x9 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x10 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x11 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle
        this.x12 = Math.floor(Math.random() * (windowWidth/3-30 - 105 + 1) + 105);  // returns a random X angle

        this.y0 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y1 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y2 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y3 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y4 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y5 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y6 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y7 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y8 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y9 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y10 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y11 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle
        this.y12 = Math.floor(Math.random() * (windowHeight-30 - 35 + 1) + 35);  // returns a random Y angle

    }

    /* Method */
    public draw(): void {

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x0,this.y0);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x1,this.y1);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x2,this.y2);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x3,this.y3);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x4,this.y4);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x5,this.y5);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x6,this.y6);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x7,this.y7);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x8,this.y8);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x9,this.y9);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x10,this.y10);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x11,this.y11);
        noStroke();
        pop();

        push();
        fill("white");
        stroke(246,250,207);
        strokeWeight(random(3,6))
        point(this.x12,this.y12);
        noStroke();
        pop();          
    }
}
