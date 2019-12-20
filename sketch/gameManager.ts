class GameManager {

    /* Variable */
    private time: number;
    private difficulty: number;
    private score: number;
    private startGame: boolean;
    //private gameOver: boolean;
    private player: Player;
    private life: number;
    public collision: Collision;

    constructor() {
        this.time = 0;
        this.difficulty = 0;
        this.score = 0;
        this.life = 0;
        this.collision = new Collision();
        this.startGame = false;
        this.player = new Player();

    }

    /* Method */

    public gameStart(startGame: boolean): void {
        this.startGame = startGame;
        push();
        fill('white')
        text("startGame " + this.startGame, 200, 360, 300, 300);
        pop();
    }

    private setTime(): void {
        if(this.startGame == true) {
            console.log(deltaTime);
        }
    }

    private getTime(): number {
        this.setTime();
        push();
        fill('white')
        text("time " + this.time, 200, 300, 300, 300);
        pop();
        return this.time;
    }

    private updateDifficulty(): void {
        push();
        fill('white')
        text("difficulty " + this.difficulty, 200, 320, 300, 300);
        pop();
    }

    private updateScore(): number {
        this.score = this.player.setScore();
        push();
        fill('white')
        text("score " + this.score, 200, 340, 300, 300);
        pop();
        return this.score;
    }

    private updateLife(): number {
        this.life = this.player.setLife();
        push();
        fill('white')
        text("life " + this.life, 200, 400, 300, 300);
        pop();
        return this.life;
    }

    public getPlayerName(): void {
        push();
        fill('white')
        text("player " + this.player.setName(), 200, 380, 300, 300);
        pop();
    }


    //private gameOver(): void
    //private endGameDialog(): object
    //private getScore(): number
    //private saveScoreTLS(): number
    //private getDeltaTime(): object

    public draw(): void {
        // this.updateScore();
        // this.updateDifficulty();
        // this.getTime();
        // this.getPlayerName();
        // this.updateLife();
    }
}