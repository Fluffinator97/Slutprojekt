class GameControl {

    /* Variable */
    // private player: player;
    // private input: boolean;
    private mouseInputX: number;
    private mouseInputY: number;
    // private paddle: object;
    constructor() {
        this.mouseInputX = mouseX,
        this.mouseInputY = mouseY;
    }



    /* Method */

    
    
    public updateYpos(): number {
        return this.mouseInputY
    }
    
    public updateXpos(): number {
        return this.mouseInputX  
    }
}