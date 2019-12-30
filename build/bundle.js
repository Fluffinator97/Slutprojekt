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
        this.paddle = new Paddle();
        this.distance = 0;
    }
    Ball.prototype.getBoundingCicle = function () {
        return {
            x: this.bxpos,
            y: this.bypos,
            rad: this.brad,
            ydirection: this.bydirection,
            xdirection: this.bxdirection
        };
    };
    Ball.prototype.creteDistance = function () {
        this.distance = dist(mouseX, mouseY, this.updateBallY(), this.updateBallX());
    };
    Ball.prototype.flipDirectionY = function () {
        this.bydirection *= -1;
    };
    Ball.prototype.flipDirectionX = function () {
        this.bxdirection *= -1;
    };
    Ball.prototype.updateBallX = function () {
        return this.bxpos;
    };
    Ball.prototype.updateBallY = function () {
        return this.bypos;
    };
    Ball.prototype.draw = function () {
        this.creteDistance();
        ellipseMode(RADIUS);
        fill('gold');
        ellipse(this.bxpos, this.bypos, this.brad, this.brad);
        this.bxpos = this.bxpos + this.bxspeed * this.bxdirection;
        this.bypos = this.bypos + this.byspeed * this.bydirection;
        if (this.bydirection == 1) {
            if (this.distance < 1) {
                this.bydirection *= -1;
                console.log("hit in Y");
            }
            else {
                console.log('false');
            }
        }
        if (this.bxpos >= width - this.brad || this.bxpos < this.brad) {
            this.bxdirection *= -1;
        }
        if (this.bypos >= height - this.brad || this.bypos < this.brad) {
            this.bydirection *= -1;
        }
    };
    return Ball;
}());
var Button = (function () {
    function Button(dialog, x, y, width, height, color) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.isMouseDown = false;
    }
    Button.prototype.clicked = function (isGameRunning) {
        var left = this.x;
        var right = this.x + this.width;
        var top = this.y;
        var bottom = this.y + this.height;
        isGameRunning;
        var isMousePressed = false;
        if (this.isMouseDown && !mouseIsPressed) {
            if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
                this.color = "orange";
                isMousePressed = true;
                isGameRunning = true;
                return isGameRunning;
            }
        }
        this.isMouseDown = mouseIsPressed;
        return isMousePressed;
    };
    Button.prototype.draw = function () {
        push();
        rectMode('corner');
        fill(this.color);
        rect(this.x, this.y, this.width, this.height, 10);
        fill("#673aee");
        textSize(20);
        strokeWeight(1);
        textAlign(CENTER, CENTER);
        textFont("punkboy");
        text(this.dialog, this.x, this.y, this.width, this.height);
        pop();
    };
    return Button;
}());
var Collision = (function () {
    function Collision() {
        this.ball = new Ball();
        this.paddle = new Paddle();
        this.collisionBall = false;
        this.distance = dist(this.paddle.getBoundingCicle().x, this.paddle.getBoundingCicle().y, this.ball.getBoundingCicle().x, this.ball.getBoundingCicle().y);
    }
    Collision.prototype.ballCollision = function () {
        if (this.distance < this.paddle.getBoundingCicle().rad + this.ball.getBoundingCicle().rad) {
            this.ball.flipDirectionY();
            console.log("hit");
        }
    };
    Collision.prototype.dynamiteHit = function (dynamites) {
        for (var i = 0; i < dynamites.length; i++) {
            console.log(dynamites[i].dxpos);
            if (dynamites[i].dxpos > this.ball.getBoundingCicle().x && dynamites[i].dypos > this.ball.getBoundingCicle().y) {
                dynamites[i].hit = true;
                console.log("Remove");
            }
        }
    };
    Collision.prototype.draw = function () {
    };
    return Collision;
}());
var Dynamite = (function () {
    function Dynamite() {
        this.dwidth = 40;
        this.dheight = 74;
        this.dypos = 1;
        this.dxpos = 0;
        this.hit = false;
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
            height: this.dheight,
            hit: this.hit
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
        this.score = 0;
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
    GameManager.prototype.highScoreLocalStorage = function () {
        this.score = this.player.getHighScoreLS();
    };
    GameManager.prototype.getHighScoreLocalStorage = function () {
        return this.score;
    };
    GameManager.prototype.draw = function () {
        this.player.draw();
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
        this.highScoreLS = 0;
    }
    GameMenu.prototype.update = function () {
        this.isGameRunning = this.startGameButton.getButtonPressed();
    };
    GameMenu.prototype.setHighScore = function () {
        this.highScoreLS = this.gameManager.getHighScoreLocalStorage();
    };
    GameMenu.prototype.draw = function () {
        if (!this.isGameRunning) {
        }
        else {
            this.world.update();
            this.world.draw();
            this.gameManager.draw();
            this.paddle.draw();
        }
    };
    return GameMenu;
}());
var Paddle = (function () {
    function Paddle() {
        this.gameControll = new GameControl();
        this.ypos = this.gameControll.updateYpos();
        this.xpos = this.gameControll.updateXpos();
        this.rwidth = width * .3;
        this.rheight = 15;
        this.erad = width * .075;
        this.leftWall = 60;
        this.rightWall = width - 60;
    }
    Paddle.prototype.getBoundingCicle = function () {
        return {
            x: this.xpos,
            y: this.ypos,
            rad: this.erad
        };
    };
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
        this.score = 10;
        this.life = 3;
        this.highScoreFLS = 0;
    }
    Player.prototype.setName = function () {
        return this.name;
    };
    Player.prototype.removeLife = function () {
        this.life - 1;
    };
    Player.prototype.setLife = function () {
        return this.life;
    };
    Player.prototype.updateScore = function () {
        if (deltaTime) {
            this.score++;
        }
        return Math.round(this.score);
    };
    Player.prototype.showScore = function () {
        this.score = this.updateScore();
        push();
        fill('white');
        text("score " + this.score, 170, 160, 300, 300);
        pop();
        return this.score;
    };
    Player.prototype.saveScore = function () {
        if (this.score > this.getHighScoreLS()) {
            localStorage.setItem(this.name, JSON.stringify(this.score));
        }
    };
    Player.prototype.setHighScoreLS = function () {
        this.highScore;
        this.highScore = localStorage.getItem(this.name);
        this.highScoreFLS = JSON.parse(this.highScore);
    };
    Player.prototype.getHighScoreLS = function () {
        return this.highScoreFLS;
    };
    Player.prototype.draw = function () {
        this.setHighScoreLS();
        this.updateScore();
        this.showScore();
        this.saveScore();
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
    background(255);
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
        this.collision = new Collision();
        this.dynamites = [];
        this.interval = 3000;
        this.time = 0;
        this.loaded = false;
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
    World.prototype.checkDynamites = function () {
        this.collision.dynamiteHit(this.dynamites);
    };
    World.prototype.removeDynamite = function () {
        for (var index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].dypos > height + 37 || this.dynamites[index].hit == true) {
                this.dynamites.splice(index, 1);
            }
        }
    };
    World.prototype.gradient = function () {
        noFill();
        for (var i = 0; i < height; i++) {
            var inter = map(i, 0, height, 0, 1);
            var c = lerpColor(color(25), color(65), inter);
            stroke(c);
            line(0, i, width, i);
        }
    };
    World.prototype.dots = function () {
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(width / 2.5, height / 4);
        point(width / 2, height / 2);
        point(width / 1.5, height / 2.9);
        point(width / 5.5, height / 2.5);
        point(width / 1.5, height / 1.1);
        point(width / 5.5, height / 1.2);
        point(width / 1.5, height / 1.9);
        noStroke();
    };
    World.prototype.draw = function () {
        this.gradient();
        this.dots();
        this.ball.draw();
        for (var _i = 0, _a = this.dynamites; _i < _a.length; _i++) {
            var dynamite = _a[_i];
            dynamite.draw();
        }
        this.removeDynamite();
        this.collision.draw();
        this.checkDynamites();
    };
    return World;
}());
//# sourceMappingURL=bundle.js.map