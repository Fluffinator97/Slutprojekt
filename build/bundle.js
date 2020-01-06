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
            }
            else {
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
    Collision.prototype.ballCollision = function (ball, paddle) {
        var distance = dist(paddle.getBoundingCicle().x, paddle.getBoundingCicle().y, ball.getBoundingCicle().x, ball.getBoundingCicle().y);
        var combinedRadius = paddle.getBoundingCicle().rad + ball.getBoundingCicle().rad;
        if (distance < combinedRadius) {
            ball.flipDirectionY();
            console.log("hit");
        }
    };
    Collision.prototype.dynamiteHit = function (dynamites, ball) {
        for (var i = 0; i < dynamites.length; i++) {
            if (dynamites[i].dxpos > ball.getBoundingCicle().x && dynamites[i].dypos > ball.getBoundingCicle().y) {
                dynamites[i].hit = true;
                dynamites[i].explode();
                console.log("Remove");
            }
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
        this.hit = false;
        this.particles = [];
        this.player = new Player();
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
        rect(this.randomXPos(), this.counterYPos(), this.dwidth, this.dheight, 5, 5, 5, 5);
        fill('white');
        this.particles.push(new Particle(this.randomXPos(), this.counterYPos() - 40));
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var particle = _a[_i];
            particle.fire();
        }
        if (this.hit === true) {
            this.explode();
        }
        noStroke();
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
        this.highScore = 0;
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
        this.startGameButton = new Button("Start Game", windowWidth / 3 / 2 - 100, windowHeight / 4, 200, 100, "#EEAA3A");
        this.highScoreButton = new Button("High Score " + this.gameManager.highScoreLocalStorage(), windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#EEAA3A");
        this.isGameRunning = false;
        this.world = new World();
        this.paddle = new Paddle();
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
            this.highScoreButton.draw();
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
var song;
function preload() {
    soundFormats('mp3');
}
function setup() {
    createCanvas(windowWidth / 1.8, windowHeight);
    frameRate(60);
    fullscreen();
    gameMenu = new GameMenu();
    song = window.loadSound("/assets/backgroundSound.mp3", loaded);
    song.setVolume(0.1);
}
function loaded() {
    song.play();
}
function draw() {
    background(55);
    gameMenu.update();
    gameMenu.draw();
    noCursor();
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
        this.checkDynamites();
    };
    return World;
}());
//# sourceMappingURL=bundle.js.map