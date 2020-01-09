class Collision {

    /* Method */

    public ballCollision(ball: Ball, paddle: Paddle): void {
        const { x, y, rad } = paddle.getBoundingCicle()

        const distance = dist(x, y, ball.getBoundingCicle().x, ball.getBoundingCicle().y);
        // console.log(distance)
        const combinedRadius = paddle.getBoundingCicle().rad + ball.getBoundingCicle().rad;
        // if ( paddle.getBoundingCicle().x + 30 >= ball.getBoundingCicle().x - 18  || paddle.getBoundingCicle().x - 30 >= ball.getBoundingCicle().x + 18 ||
        //     paddle.getBoundingCicle().y + 30 >= ball.getBoundingCicle().y - 18  || paddle.getBoundingCicle().y - 30 >= ball.getBoundingCicle().y + 18) {
        //     ball.flipDirectionY();
        //     console.log("hit");
        // }
        if (ball.ballYDirection == 1) {
            if (distance <= combinedRadius) {
                ball.flipDirectionY();
                console.log("hit paddle...");
                bounceI.play();

                // this.collisionBall = true;
            }
        }
    }

    public dynamiteHit(dynamites: Dynamite[], ball: Ball): void {
        for (let i = 0; i < dynamites.length; i++) {
            if (dynamites[i].dynamiteXPos + 22 > ball.getBoundingCicle().x - 18 && dynamites[i].dynamiteXPos - 22 < ball.getBoundingCicle().x + 18
                && dynamites[i].dynamiteYPos + 45 > ball.getBoundingCicle().y - 18 && dynamites[i].dynamiteYPos - 45 < ball.getBoundingCicle().y + 18
            ) {
                dynamites[i].hit = true;
                dynamites[i].explode();
                console.log("Hit");


            }

        }

    }

    public paddleHit(dynamites: Dynamite[], paddle: Paddle): void {
        for (let i = 0; i < dynamites.length; i++) {
            if (dynamites[i].dynamiteXPos + 22 > paddle.paddleXPos - 18 && dynamites[i].dynamiteXPos - 22 < paddle.paddleXPos + 18
                && dynamites[i].dynamiteYPos + 45 > paddle.paddleYPos - 18 && dynamites[i].dynamiteYPos - 45 < paddle.paddleYPos + 18
            ) {
                gameMenu.gameOver = true;
            }

        }

    }

}