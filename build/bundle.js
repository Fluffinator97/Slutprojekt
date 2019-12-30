"use strict";
var Ball = (function () {
    function Ball() {
        this.brad = 25;
        this.bxspeed = 25;
        this.byspeed = 2.2;
        this.bxdirection = 1;
        this.bydirection = 1;
        this.bxpos = width / 2;
        this.bypos = height / 4;
        this.theBall = {
            brad: this.brad,
            bypos: this.bypos,
            bxpos: this.bxpos,
            byspeed: this.byspeed,
            bxspeed: this.bxspeed,
            bydirection: this.bydirection,
            bxdirection: this.bxdirection
        };
    }
    Ball.prototype.getBall = function () {
        return this.theBall;
    };
    Ball.prototype.draw = function () {
        ellipseMode(RADIUS);
        fill('yellow');
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
    }
    return Collision;
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
var GameMenu = (function () {
    function GameMenu() {
        this.startGameButton = new Button("Start Game", windowWidth / 1.8 / 2 - 100, windowHeight / 2, 200, 100, "#EEAA3A");
        this.isGameRunning = false;
        this.theRandomStars = new randomStar();
        this.world = new World();
        this.paddle = new Paddle();
    }
    GameMenu.prototype.update = function () {
        this.isGameRunning = this.startGameButton.clicked(this.isGameRunning);
        gameMenu.startGameButton.clicked(this.isGameRunning);
    };
    GameMenu.prototype.draw = function () {
        if (!this.isGameRunning) {
            push();
            fill("#130B1B");
            rect(0, 0, windowWidth / 1.8, windowHeight);
            pop();
            push();
            fill("#E2D8E0");
            rect(0, 0, 30, windowHeight);
            pop();
            push();
            fill("#E2D8E0");
            rect(windowWidth / 1.8 - 30, 0, 30, windowHeight);
            pop();
            push();
            fill("#605559");
            rect(30, 0, windowWidth / 1.8 - 60, 30);
            pop();
            push();
            fill("#605559");
            rect(30, windowHeight - 30, windowWidth / 1.8 - 60, 30);
            pop();
            this.theRandomStars.draw();
            push();
            fill("white");
            textSize(45);
            textFont("punkboy");
            textAlign(CENTER, TOP);
            text("Nobel Popper", windowWidth / 1.8 / 2, 50);
            pop();
            this.startGameButton.draw();
        }
    };
    return GameMenu;
}());
var Paddle = (function () {
    function Paddle() {
    }
    Paddle.prototype.draw = function () {
        ellipseMode(RADIUS);
        rectMode(CENTER);
        fill('purple');
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
var randomStar = (function () {
    function randomStar() {
        this.x0 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x1 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x2 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x3 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x4 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x5 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x6 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x7 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x8 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x9 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x10 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x11 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.x12 = Math.floor(Math.random() * (windowWidth / 1.8 - 30 - 105 + 1) + 105);
        this.y0 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y1 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y2 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y3 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y4 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y5 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y6 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y7 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y8 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y9 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y10 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y11 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
        this.y12 = Math.floor(Math.random() * (windowHeight - 30 - 35 + 1) + 35);
    }
    randomStar.prototype.draw = function () {
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x0, this.y0);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x1, this.y1);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x2, this.y2);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x3, this.y3);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x4, this.y4);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x5, this.y5);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x6, this.y6);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x7, this.y7);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x8, this.y8);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x9, this.y9);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x10, this.y10);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x11, this.y11);
        noStroke();
        pop();
        push();
        fill("white");
        stroke(246, 250, 207);
        strokeWeight(random(3, 6));
        point(this.x12, this.y12);
        noStroke();
        pop();
    };
    return randomStar;
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
var World = (function () {
    function World() {
        this.ball = new Ball();
    }
    World.prototype.draw = function () {
        this.ball.draw();
    };
    return World;
}());
//# sourceMappingURL=bundle.js.map