class Collision {

    /* Method */
    public ballCollision(ball: Ball, paddle: Paddle): void {
        const distance = dist(paddle.getBoundingCicle().x, paddle.getBoundingCicle().y, ball.getBoundingCicle().x, ball.getBoundingCicle().y);
        const combinedRadius = paddle.getBoundingCicle().rad + ball.getBoundingCicle().rad;
        if (distance < combinedRadius) {
            ball.flipDirectionY();
            console.log("hit");
            // this.collisionBall = true;
        }
    }

    public dynamiteHit(dynamites: Dynamite[], ball: Ball): void {
        // let test = [];
        for (let i = 0; i < dynamites.length; i++) {
            // console.log(dynamites[i].dxpos);
            if (dynamites[i].dxpos + 22 > ball.getBoundingCicle().x - 18 && dynamites[i].dxpos - 22 < ball.getBoundingCicle().x + 18
            && dynamites[i].dypos + 45 > ball.getBoundingCicle().y - 18 && dynamites[i].dypos - 45 < ball.getBoundingCicle().y + 18
            ) {
                dynamites[i].hit = true;
                dynamites[i].explode();
                console.log("Hit");
            }
            // test.push(dynamites[i]);
        }
        // return console.log(test);
    }


    // public getCollisionBall(): boolean {
    //     return this.collisionBall;
    // }
}