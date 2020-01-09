interface BoundingCicle {
    x: number,
    y: number,
    rad: number,
    ydirection: number,
    xdirection: number
}


class Ball {

    /* Variable */
    private ballRadius: number;
    public ballYpos: number;
    public ballXpos: number;
    private ballYSpeed: number;
    private ballXSpeed: number;
    public ballXDirection: number;
    public ballYDirection: number;
    private distance: number;

    constructor() {
        this.ballRadius = 36;
        this.ballXSpeed = 7;
        this.ballYSpeed = 4.2;
        this.ballXDirection = 1;
        this.ballYDirection = 1;
        this.ballXpos = width / 2;
        this.ballYpos = height / 4;
        this.distance = 0;
    }

    public getBoundingCicle(): BoundingCicle {
        return {
            x: this.ballXpos,
            y: this.ballYpos,
            rad: this.ballRadius,
            ydirection: this.ballYDirection,
            xdirection: this.ballXDirection
        }
    }

    public createDistance() {
        this.distance = dist(mouseX, mouseY, this.updateBallY(), this.updateBallX());

    }

    public flipDirectionY() {
        this.ballYDirection *= -1;
    }

    public flipDirectionX() {
        this.ballXDirection *= -1;
    }

    public updateBallX(): number {
        return this.ballXpos;
    }

    public updateBallY(): number {
        return this.ballYpos;
    }

    public draw(): void {
        this.createDistance();
        ellipseMode(RADIUS);
        fill('gold');
        ellipse(this.ballXpos, this.ballYpos, this.ballRadius, this.ballRadius);

        this.ballXpos = this.ballXpos + this.ballXSpeed * this.ballXDirection;
        this.ballYpos = this.ballYpos + this.ballYSpeed * this.ballYDirection;


        if (this.ballYDirection == 1) {
            if (this.distance < 1) {
                this.ballYDirection *= -1;

            } else {

            }
        }
        if (this.ballXpos >= width - this.ballRadius || this.ballXpos < this.ballRadius) {
            this.ballXDirection *= -1;
            bounce.play();
        } if (this.ballYpos < this.ballRadius) {
            this.ballYDirection *= -1;
            bounce.play();
        }
        if (this.ballYpos >= height - this.ballRadius)
        {
            gameMenu.gameOver = true;
        }
    }




}
