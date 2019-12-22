"use strict";
var Ball = (function () {
    function Ball() {
        this.brad = 36;
        this.bxspeed = 5;
        this.byspeed = 2.2;
        this.bxdirection = 1;
        this.bydirection = 1;
        this.bxpos = width / 2;
        this.bypos = height / 4;
    }
    Ball.prototype.getBoundingCicle = function () {
        return {
            x: this.dxpos,
            y: this.dypos,
            r: this.brad
        };
    };
    Ball.prototype.flipDirection = function () {
        console.log("hit");
    };
    Ball.prototype.updateBallX = function () {
        return this.bxpos;
    };
    Ball.prototype.updateBallY = function () {
        return this.bypos;
    };
    Ball.prototype.draw = function () {
        ellipseMode(RADIUS);
        fill('gold');
        this.bxpos = this.bxpos + this.bxspeed * this.bxdirection;
        this.bypos = this.bypos + this.byspeed * this.bydirection;
        if (this.bxpos > width - this.brad || this.bxpos < this.brad) {
            this.bxdirection *= -1;
        }
        if (this.bypos > height - this.brad || this.bypos < this.brad) {
            this.bydirection *= -1;
        }
        ellipse(this.bxpos, this.bypos, this.brad, this.brad);
    };
    return Ball;
}());
var Button = (function () {
    function Button(dialog, y, x, height, width, color) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.buttonPressed = false;
    }
    Button.prototype.getButtonPressed = function () {
        if (!mouseIsPressed && this.buttonPressed) {
            return true;
        }
        this.buttonPressed = mouseIsPressed;
        return false;
    };
    Button.prototype.update = function (getButtonPressed) {
        gameMenu.isGameRunning = getButtonPressed;
    };
    Button.prototype.draw = function () {
        push();
        rectMode('corner');
        fill(this.color);
        rect(this.x, this.y, this.height, this.width);
        fill('white');
        text(this.dialog, this.x, this.y, this.x + this.width, this.y + this.height);
        pop();
    };
    return Button;
}());
var Collision = (function () {
    function Collision() {
        this.ball = new Ball();
        this.paddle = new Paddle();
    }
    Collision.prototype.ballCollision = function () {
        if (mouseX == this.ball.bxpos) {
        }
    };
    return Collision;
}());
var Dynamite = (function () {
    function Dynamite() {
        this.dwidth = 40;
        this.dheight = 74;
        this.dypos = 1;
        this.dxpos = 0;
    }
    Dynamite.prototype.counterYPos = function () {
        for (this.dypos < height + 37; this.dypos++;) {
            return this.dypos;
        }
    };
    Dynamite.prototype.randomXPos = function () {
        if (this.dxpos == 0) {
            this.dxpos = random(10, width - 10);
        }
        return this.dxpos;
    };
    Dynamite.prototype.getBoundingRectangle = function () {
        return {
            x: this.dxpos,
            y: this.dypos,
            width: this.dwidth,
            height: this.dheight
        };
    };
    Dynamite.prototype.draw = function () {
        rectMode(CENTER);
        fill('red');
        rect(this.randomXPos(), this.counterYPos(), this.dwidth, this.dheight, 5, 5, 5, 5);
    };
    return Dynamite;
}());
var Entity = (function () {
    function Entity() {
    }
    return Entity;
}());
var GameControl = (function () {
    function GameControl() {
        this.mouseInputX = mouseX,
            this.mouseInputY = mouseY;
    }
    GameControl.prototype.updateYpos = function () {
        return this.mouseInputY;
    };
    GameControl.prototype.updateXpos = function () {
        return this.mouseInputX;
    };
    return GameControl;
}());
var GameManager = (function () {
    function GameManager() {
        this.time = 0;
        this.difficulty = 0;
        this.score = 0;
        this.life = 0;
        this.collision = new Collision();
        this.startGame = false;
        this.player = new Player();
    }
    GameManager.prototype.gameStart = function (startGame) {
        this.startGame = startGame;
        push();
        fill('white');
        text("startGame " + this.startGame, 200, 360, 300, 300);
        pop();
    };
    GameManager.prototype.setTime = function () {
        if (this.startGame == true) {
            console.log(deltaTime);
        }
    };
    GameManager.prototype.getTime = function () {
        this.setTime();
        push();
        fill('white');
        text("time " + this.time, 200, 300, 300, 300);
        pop();
        return this.time;
    };
    GameManager.prototype.updateDifficulty = function () {
        push();
        fill('white');
        text("difficulty " + this.difficulty, 200, 320, 300, 300);
        pop();
    };
    GameManager.prototype.updateScore = function () {
        this.score = this.player.setScore();
        push();
        fill('white');
        text("score " + this.score, 200, 340, 300, 300);
        pop();
        return this.score;
    };
    GameManager.prototype.updateLife = function () {
        this.life = this.player.setLife();
        push();
        fill('white');
        text("life " + this.life, 200, 400, 300, 300);
        pop();
        return this.life;
    };
    GameManager.prototype.getPlayerName = function () {
        push();
        fill('white');
        text("player " + this.player.setName(), 200, 380, 300, 300);
        pop();
    };
    GameManager.prototype.draw = function () {
    };
    return GameManager;
}());
var GameMenu = (function () {
    function GameMenu() {
        this.startGameButton = new Button("Start Game", 100, 100, 200, 100, "brown");
        this.pauseGameButton = new Button("Pause Game", 200, 100, 200, 100, "blue");
        this.isGameRunning = false;
        this.gameManager = new GameManager();
        this.world = new World();
        this.paddle = new Paddle();
    }
    GameMenu.prototype.update = function () {
        this.isGameRunning = this.startGameButton.getButtonPressed();
    };
    GameMenu.prototype.draw = function () {
        if (!this.isGameRunning) {
            this.world.update();
            this.gameManager.draw();
            this.world.draw();
            this.paddle.draw();
        }
    };
    return GameMenu;
}());
var Paddle = (function () {
    function Paddle() {
        this.gameControll = new GameControl();
        this.ball = new Ball();
        this.ypos = this.gameControll.updateYpos();
        this.xpos = this.gameControll.updateXpos();
        this.rwidth = width * .3;
        this.rheight = 15;
        this.erad = width * .075;
        this.leftWall = 60;
        this.rightWall = width - 60;
    }
    Paddle.prototype.draw = function () {
        ellipseMode(RADIUS);
        rectMode(CENTER);
        fill('lightblue');
        ellipse(this.xc, mouseY, this.erad, this.erad);
        fill('purple');
        rect(this.xc, mouseY, this.rwidth, this.rheight, 10);
        this.xc = constrain(mouseX, this.leftWall, this.rightWall);
    };
    return Paddle;
}());
var Player = (function () {
    function Player() {
        this.name = "Örjan";
        this.score = 100;
        this.life = 3;
    }
    Player.prototype.setName = function () {
        return this.name;
    };
    Player.prototype.setScore = function () {
        return this.score;
    };
    Player.prototype.setLife = function () {
        return this.life;
    };
    return Player;
}());
var gameMenu;
var gameRunning;
function preload() {
}
function setup() {
    createCanvas(windowWidth / 3, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
}
function draw() {
    background(55);
    gameMenu.update();
    gameMenu.draw();
    noCursor();
}
function windowResized() {
    resizeCanvas(windowWidth / 3, windowHeight);
}
var Sound = (function () {
    function Sound() {
    }
    return Sound;
}());
var World = (function () {
    function World() {
        this.ball = new Ball();
        this.dynamites = [];
        this.interval = 3000;
        this.time = 0;
    }
    World.prototype.getBall = function () {
        return this.ball;
    };
    World.prototype.getDynamites = function () {
        return this.dynamites;
    };
    World.prototype.update = function () {
        this.spawnDynamite();
        this.time += deltaTime;
        this.interval -= 0.001;
    };
    World.prototype.spawnDynamite = function () {
        if (this.time > this.interval) {
            this.dynamites.push(new Dynamite());
            this.time = 0;
        }
    };
    World.prototype.removeDynamite = function () {
        for (var index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].dypos > height / 2) {
                this.dynamites.splice(index, 1);
            }
        }
    };
    World.prototype.draw = function () {
        this.ball.draw();
        for (var _i = 0, _a = this.dynamites; _i < _a.length; _i++) {
            var dynamite = _a[_i];
            dynamite.draw();
        }
        this.removeDynamite();
    };
    return World;
}());
//# sourceMappingURL=bundle.js.map