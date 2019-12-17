"use strict";
var Button = (function () {
    function Button() {
    }
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
    }
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
    createCanvas(windowWidth / 2.5, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
}
function draw() {
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