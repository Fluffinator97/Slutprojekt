class Player {

    /* Variable */
    public name: string;
    private score: number;
    public highScoreFLS: number;
    private highScore: number;

    constructor() {
        this.score = 0;
        this.highScoreFLS = 0;
    }

    /* Method */
    public removeLife(): void {
        this.life - 1;
    }

    public setLife(): number {
        return this.life;
    }

    private updateScore(): number {
        if (deltaTime) {
            this.score++;
        }
        return Math.round(this.score);
    }

    private showScore(): number {
        this.score = this.updateScore();
        push();
        fill('white')
        text("score " + this.score, 170, 160, 300, 300);
        pop();
        return this.score;
    }

    public saveScore(): number {
        if (this.score > this.getHighScoreLS()) {
            localStorage.setItem(this.name, JSON.stringify(this.score))
        }
        return this.score;
    }

    public setHighScoreLS(): number {
        this.highScore;
        this.highScore = localStorage.getItem(this.name);
        this.highScoreFLS = JSON.parse(this.highScore);
    }

    public getHighScoreLS(): number {
        this.setHighScoreLS();
        return this.highScoreFLS;
    }
    
    public draw(): void {
        this.setHighScoreLS();
        this.updateScore();
        this.showScore();
        this.saveScore();
    }
}
