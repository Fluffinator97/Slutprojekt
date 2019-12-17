"use strict";
var Ball = (function () {
    function Ball() {
    }
    return Ball;
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
    function GameMenu(x, highscore) {
        this.x = x;
        this.highscore = highscore;
    }
    GameMenu.prototype.draw = function (x, highscore) {
        this.highscore = 20;
        this.x = 100;
        rectMode(CENTER);
        rect(windowWidth / 2, windowHeight / 2, 100, 100);
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
function preload() {
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu(10, 20);
    console.log(gameMenu.highscore);
}
function draw() {
    background(50);
    gameMenu.draw(10, 100);
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