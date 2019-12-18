"use strict";
var Ball = (function () {
    function Ball() {
    }
    return Ball;
}());
var Button = (function () {
    function Button(dialog, y, x, height, width) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
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
        fill('orange');
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
    }
    return GameManager;
}());
var GameMenu = (function () {
    function GameMenu() {
        this.startGameButton = new Button("Start Game", 100, 100, 200, 100);
        this.isGameRunning = false;
    }
    GameMenu.prototype.update = function () {
        this.isGameRunning = this.startGameButton.getButtonPressed();
    };
    GameMenu.prototype.draw = function () {
        if (!this.isGameRunning) {
            this.startGameButton.draw();
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
    }
    return Player;
}());
var gameMenu;
var gameRunning;
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
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
    resizeCanvas(windowWidth, windowHeight);
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