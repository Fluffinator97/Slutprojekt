class Collision {
    
    /* Method */
    public ballCollision(ball: Ball, paddle: Paddle): void {
        const distance = dist(paddle.getBoundingCicle().x, paddle.getBoundingCicle().y, ball.getBoundingCicle().x, ball.getBoundingCicle().y);
        const combinedRadius = paddle.getBoundingCicle().rad + ball.getBoundingCicle().rad
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
            if(dynamites[i].dxpos > ball.getBoundingCicle().x && dynamites[i].dypos > ball.getBoundingCicle().y) {
                dynamites[i].hit = true;
                dynamites[i].explode();
                console.log("Remove");
            }
            // test.push(dynamites[i]);
        }
        // return console.log(test);
    }


    // public getCollisionBall(): boolean {
    //     return this.collisionBall;
    // }
}