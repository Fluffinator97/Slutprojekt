// Paddle class creates the paddle and uses the x and y from gamecontrol

interface BoundingCiclePaddle {
    x: number,
    y: number,
    rad: number
}

class Paddle {

    /* Variable */
    public paddleYPos: number;
    public paddleXPos: number;
    private rectangleWidth: number;
    private rectangleHeight: number;
    private bubbleRadius: number;
    private xConstraint: any;
    private leftWall: number;
    private rightWall: number;

    private alfredsPaddle: p5.Image;


    /* Method */
    constructor() {
        this.paddleYPos = mouseY;
        this.paddleXPos = mouseX;
        this.rectangleWidth = width * .3;
        this.rectangleHeight = 15;
        this.bubbleRadius = width * .075;
        this.leftWall = 60;
        this.rightWall = width - 60;

        this.alfredsPaddle = alfred;

    }

    public getBoundingCicle(): BoundingCiclePaddle {
        return {
            x: this.paddleXPos,
            y: this.paddleYPos,
            rad: this.bubbleRadius
        }
    }

    public draw(): void {
        this.paddleYPos = constrain(mouseY, windowHeight / 1.4, windowHeight); // constrain
        this.paddleXPos = mouseX;
        ellipseMode(RADIUS);
        rectMode(CENTER);
        noFill()
        ellipse(this.xConstraint, this.paddleYPos, this.bubbleRadius, this.bubbleRadius);
        rect(this.xConstraint, this.paddleYPos, this.rectangleWidth, this.rectangleHeight, 10);
        this.xConstraint = constrain(this.paddleXPos, this.leftWall, this.rightWall);

        imageMode(CENTER);
        image(this.alfredsPaddle, this.xConstraint, this.paddleYPos + 25, width * .3, height * .20);
    }
}
