class Player {

    /* Variable */
    public name: string;
    private score: number;
    private life: number;

    constructor() {
        this.name = "Örjan";
        this.score = 100;
        this.life = 3;
    }

    public setName(): string {
        return this.name;
    }

    public setScore(): number {
        return this.score;
    }

    public setLife(): number {
        return this.life;
    }

    /* Method */
    // private updateScore(): number;
    // private updateLife(): number;
}

