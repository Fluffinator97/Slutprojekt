class Button {

    /* Variable */

    private y: number;
    private x: number;
    private height: number;
    private width: number;
    public dialog: string;
    public color: string;
    private buttonPressed: boolean;

    constructor(dialog: string, y: number, x: number, height: number, width: number, color: string) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.buttonPressed = false;
    }

    /* Method */

    public getButtonPressed(): boolean {
            if (!mouseIsPressed && this.buttonPressed) {
                return true;
            }
            this.buttonPressed = mouseIsPressed;
            return false;
    }
    
    public update(getButtonPressed:any): void {
        gameMenu.isGameRunning = getButtonPressed;
    }
    
    public draw(): void {
        // const {dialog, x, y, width, height} = this;
        push();
        rectMode('corner')
        fill(this.color)
        rect(this.x, this.y, this.height, this.width);
        fill('white')
        text(this.dialog, this.x, this.y, this.x + this.width, this.y + this.height)
        pop();
    }

}