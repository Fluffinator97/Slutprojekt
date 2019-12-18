"use strict";
var Ball = (function () {
    function Ball() {
    }
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
var Dynamite = (function () {
    function Dynamite() {
    }
    return Dynamite;
}());
var Entity = (function () {
    function Entity() {
    }
    return Entity;
}());
var GameControl = (function () {
    function GameControl() {
    }
    return GameControl;
}());
var GameManager = (function () {
    function GameManager() {
        this.time = 0;
        this.difficulty = 0;
        this.score = 0;
        this.life = 0;
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
        this.updateScore();
        this.updateDifficulty();
        this.getTime();
        this.getPlayerName();
        this.updateLife();
    };
    return GameManager;
}());
var GameMenu = (function () {
    function GameMenu() {
        this.startGameButton = new Button("Start Game", 100, 100, 200, 100, "brown");
        this.isGameRunning = false;
        this.gameManager = new GameManager();
    }
    GameMenu.prototype.update = function () {
        this.isGameRunning = this.startGameButton.getButtonPressed();
        this.gameManager.gameStart(this.isGameRunning);
    };
    GameMenu.prototype.draw = function () {
        if (!this.isGameRunning) {
            this.startGameButton.draw();
            this.gameManager.draw();
        }
    };
    return GameMenu;
}());
var Paddle = (function () {
    function Paddle() {
    }
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
    createCanvas(windowWidth / 1.8, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
}
function draw() {
    background(55);
    gameMenu.update();
    gameMenu.draw();
}
function windowResized() {
    resizeCanvas(windowWidth / 1.8, windowHeight);
}
var Sound = (function () {
    function Sound() {
    }
    return Sound;
}());
var World = (function () {
    function World() {
    }
    return World;
}());
//# sourceMappingURL=bundle.js.map