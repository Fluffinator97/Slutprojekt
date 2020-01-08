"use strict";
var Entity = (function () {
    function Entity(collision, width, height, ypos, xpos) {
        this.collision = collision;
        this.width = width;
        this.height = height;
        this.ypos = ypos;
        this.xpos = xpos;
    }
    return Entity;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this, false, width, height, width / 2, height / 4) || this;
        _this.rad = 36;
        _this.xspeed = 5;
        _this.yspeed = 2.2;
        _this.xdirection = 1;
        _this.ydirection = 1;
        _this.distance = 0;
        return _this;
    }
    Ball.prototype.getBoundingCicle = function () {
        return {
            x: this.xpos,
            y: this.ypos,
            rad: this.rad,
            ydirection: this.ydirection,
            xdirection: this.xdirection
        };
    };
    Ball.prototype.creteDistance = function () {
        this.distance = dist(mouseX, mouseY, this.updateBallY(), this.updateBallX());
    };
    Ball.prototype.flipDirectionY = function () {
        this.ydirection *= -1;
    };
    Ball.prototype.flipDirectionX = function () {
        this.xdirection *= -1;
    };
    Ball.prototype.updateBallX = function () {
        return this.xpos;
    };
    Ball.prototype.updateBallY = function () {
        return this.ypos;
    };
    Ball.prototype.draw = function () {
        this.creteDistance();
        ellipseMode(RADIUS);
        fill('gold');
        ellipse(this.xpos, this.ypos, this.rad, this.rad);
        this.xpos = this.xpos + this.xspeed * this.xdirection;
        this.ypos = this.ypos + this.yspeed * this.ydirection;
        if (this.ydirection == 1) {
            if (this.distance < 48) {
                this.ydirection *= -1;
                console.log("hit in Y");
            }
            else {
                console.log('false');
            }
        }
        if (this.xpos >= width - this.rad || this.xpos < this.rad) {
            this.xdirection *= -1;
        }
        if (this.ypos >= height - this.rad || this.ypos < this.rad) {
            this.ydirection *= -1;
        }
    };
    return Ball;
}(Entity));
var Button = (function () {
    function Button(dialog, x, y, width, height, color, fontColor) {
        this.dialog = dialog;
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.isMouseDown = false;
        this.fontColor = fontColor;
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
        fill(this.fontColor);
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
    Collision.prototype.ballCollision = function (ball, paddle) {
        var _a = paddle.getBoundingCicle(), x = _a.x, y = _a.y, rad = _a.rad;
        var distance = dist(x, y, ball.getBoundingCicle().x, ball.getBoundingCicle().y);
        console.log(distance);
        var combinedRadius = paddle.getBoundingCicle().rad + ball.getBoundingCicle().rad;
        if (ball.bydirection == 1) {
            if (distance <= combinedRadius) {
                ball.flipDirectionY();
                console.log("hit paddle...");
                bounceI.play();
            }
        }
    };
    Collision.prototype.dynamiteHit = function (dynamites, ball) {
        for (var i = 0; i < dynamites.length; i++) {
            if (dynamites[i].dxpos + 22 > ball.getBoundingCicle().x - 18 && dynamites[i].dxpos - 22 < ball.getBoundingCicle().x + 18
                && dynamites[i].dypos + 45 > ball.getBoundingCicle().y - 18 && dynamites[i].dypos - 45 < ball.getBoundingCicle().y + 18) {
                dynamites[i].hit = true;
                dynamites[i].explode();
                console.log("Hit");
            }
        }
    };
    return Collision;
}());
var Dynamite = (function (_super) {
    __extends(Dynamite, _super);
    function Dynamite() {
        var _this = _super.call(this, false, 40, 74, 1, 0) || this;
        _this.hit = false;
        _this.particles = [];
        return _this;
    }
    Dynamite.prototype.counterYPos = function () {
        for (this.ypos < height + 37; this.ypos++;) {
            return this.ypos;
        }
    };
    Dynamite.prototype.randomXPos = function () {
        if (this.xpos == 0) {
            this.xpos = random(10, width - 10);
        }
        return this.xpos;
    };
    Dynamite.prototype.getBoundingRectangle = function () {
        return {
            x: this.xpos,
            y: this.ypos,
            width: this.width,
            height: this.height,
        };
    };
    Dynamite.prototype.explode = function () {
        this.particles.push(new Particle(this.randomXPos(), this.counterYPos()));
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var particle = _a[_i];
            particle.explotion();
        }
    };
    Dynamite.prototype.draw = function () {
        rectMode(CENTER);
        fill('red');
        rect(this.randomXPos(), this.counterYPos(), this.width, this.height, 5, 5, 5, 5);
        fill('white');
        this.particles.push(new Particle(this.randomXPos(), this.counterYPos() - 40));
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var particle = _a[_i];
            particle.fire();
        }
        if (this.hit === true) {
            this.explode();
            explosion.play();
        }
        noStroke();
    };
    return Dynamite;
}(Entity));
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
        this.highScore = 0;
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
    GameManager.prototype.getPlayerName = function () {
        push();
        fill('white');
        text("player " + this.player.name, 200, 380, 300, 300);
        pop();
    };
    GameManager.prototype.highScoreLocalStorage = function () {
        if (this.player.getHighScoreLS() > 1) {
            this.highScore = this.player.getHighScoreLS();
        }
        else {
            this.highScore = 0;
        }
        return this.highScore;
    };
    GameManager.prototype.draw = function () {
        this.player.draw();
    };
    return GameManager;
}());
var GameMenu = (function () {
    function GameMenu() {
        this.gameManager = new GameManager();
        this.theRandomStars = new randomStar();
        this.startGameButton = new Button("Start Game", windowWidth / 3 / 2 - 100, windowHeight / 4, 200, 100, "#EEAA3A", "#673aee");
        this.muteButton = new Button("Mute", windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#EEAA3A", "#673aee");
        this.highScoreButton = new Button("High Score " + this.gameManager.highScoreLocalStorage(), windowWidth / 3 / 2 - 100, windowHeight / 1.35, 200, 100, "#673aee", "#EEAA3A");
        this.isGameRunning = false;
        this.world = new World();
        this.mute = false;
    }
    GameMenu.prototype.update = function () {
        this.gameManager.highScoreLocalStorage();
        if (!this.isGameRunning) {
            this.isGameRunning = this.startGameButton.clicked(this.isGameRunning);
        }
        else {
            this.isGameRunning = true;
        }
        gameMenu.startGameButton.clicked(this.isGameRunning);
    };
    GameMenu.prototype.draw = function () {
        if (!this.isGameRunning) {
            push();
            fill("#130B1B");
            rect(0, 0, windowWidth / 3, windowHeight);
            pop();
            push();
            fill("#E2D8E0");
            rect(0, 0, 30, windowHeight);
            pop();
            push();
            fill("#E2D8E0");
            rect(windowWidth / 3 - 30, 0, 30, windowHeight);
            pop();
            push();
            fill("#605559");
            rect(30, 0, windowWidth / 3 - 60, 30);
            pop();
            push();
            fill("#605559");
            rect(30, windowHeight - 30, windowWidth / 3 - 60, 30);
            pop();
            this.theRandomStars.draw();
            push();
            fill("white");
            textSize(45);
            textFont("punkboy");
            textAlign(CENTER, TOP);
            text("Nobel Popper", windowWidth / 3 / 2, 50);
            pop();
            this.startGameButton.draw();
            this.muteButton.draw();
            this.highScoreButton.draw();
        }
        else {
            this.world.update();
            this.world.draw(this.theRandomStars);
            this.gameManager.draw();
        }
    };
    return GameMenu;
}());
var Paddle = (function () {
    function Paddle() {
        this.ypos = mouseY;
        this.xpos = mouseX;
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
        this.ypos = mouseY;
        this.xpos = mouseX;
        ellipseMode(RADIUS);
        rectMode(CENTER);
        fill('lightblue');
        ellipse(this.xc, this.ypos, this.erad, this.erad);
        fill('purple');
        rect(this.xc, this.ypos, this.rwidth, this.rheight, 10);
        this.xc = constrain(this.xpos, this.leftWall, this.rightWall);
    };
    return Paddle;
}());
var Particle = (function () {
    function Particle(x, y) {
        this.particleX = x;
        this.particleY = y;
        this.particleVX = 0;
        this.particleVY = 0;
        this.particleVXE = 0;
        this.particleVYE = 0;
        this.alpha = 255;
        this.alphaE = 255;
    }
    Particle.prototype.update = function () {
        this.particleVX = random(-3, 3);
        this.particleVY = random(-5, -1);
        this.particleVXE = random(-60, 60);
        this.particleVYE = random(0, 10);
        this.alpha -= 25;
        this.alphaE -= 5;
    };
    Particle.prototype.fire = function () {
        this.update();
        noStroke();
        fill(255, 233, 152, this.alpha);
        ellipse(this.particleX += this.particleVX, this.particleY += this.particleVY, 5);
    };
    Particle.prototype.explotion = function () {
        this.update();
        strokeWeight(1);
        stroke(255, 233, 52, this.alphaE);
        fill(255, 233, 152, this.alphaE);
        ellipse(this.particleX += this.particleVXE, this.particleY += this.particleVYE, 8);
        noStroke();
    };
    return Particle;
}());
var Player = (function () {
    function Player() {
        this.name = "Örjan";
        this.score = 0;
        this.life = 3;
        this.highScoreFLS = 0;
    }
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
        this.setHighScoreLS();
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
var randomStar = (function () {
    function randomStar() {
        this.x0 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x1 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x2 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x3 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x4 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x5 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x6 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x7 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x8 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x9 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x10 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x11 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
        this.x12 = Math.floor(Math.random() * (windowWidth / 3 - 30 - 105 + 1) + 105);
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
var mute;
var song;
var bounceI;
var bounceIII;
var explosion;
var music;
function preload() {
    soundFormats('mp3');
    bounceI = window.loadSound('assets/sound/bounceI');
    bounceIII = window.loadSound('assets/sound/bounceIII.mp3');
    explosion = window.loadSound('assets/sound/explosion.mp3');
}
function setup() {
    createCanvas(windowWidth / 3, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
    song = window.loadSound("/assets/sound/musicIII.mp3", loaded);
    song.setVolume(0.2);
    explosion.setVolume(0.3);
    bounceI.setVolume(0.7);
}
function loaded() {
    song.loop();
}
function draw() {
    background(55);
    gameMenu.update();
    gameMenu.draw();
    if (gameMenu.isGameRunning == true) {
        noCursor();
    }
}
function windowResized() {
    resizeCanvas(windowWidth / 3, windowHeight);
}
var World = (function () {
    function World() {
        this.ball = new Ball();
        this.paddle = new Paddle();
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
        this.collision.dynamiteHit(this.dynamites, this.ball);
    };
    World.prototype.removeDynamite = function () {
        for (var index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].ypos > height + 37 || this.dynamites[index].hit == true) {
                this.dynamites.splice(index, 1);
            }
        }
    };
    World.prototype.checkBall = function () {
        this.collision.ballCollision(this.ball, this.paddle);
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
    World.prototype.draw = function (theRandomStars) {
        this.gradient();
        theRandomStars.draw();
        this.ball.draw();
        this.paddle.draw();
        for (var _i = 0, _a = this.dynamites; _i < _a.length; _i++) {
            var dynamite = _a[_i];
            dynamite.draw();
        }
        this.removeDynamite();
        this.checkDynamites();
        this.checkBall();
    };
    return World;
}());
//# sourceMappingURL=bundle.js.map