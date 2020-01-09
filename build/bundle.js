"use strict";
var Ball = (function () {
    function Ball() {
        this.ballRadius = 36;
        this.ballXSpeed = 7;
        this.ballYSpeed = 4.2;
        this.ballXDirection = 1;
        this.ballYDirection = 1;
        this.ballXpos = width / 2;
        this.ballYpos = height / 4;
        this.distance = 0;
    }
    Ball.prototype.getBoundingCicle = function () {
        return {
            x: this.ballXpos,
            y: this.ballYpos,
            rad: this.ballRadius,
            ydirection: this.ballYDirection,
            xdirection: this.ballXDirection
        };
    };
    Ball.prototype.createDistance = function () {
        this.distance = dist(mouseX, mouseY, this.updateBallY(), this.updateBallX());
    };
    Ball.prototype.flipDirectionY = function () {
        this.ballYDirection *= -1;
    };
    Ball.prototype.flipDirectionX = function () {
        this.ballXDirection *= -1;
    };
    Ball.prototype.updateBallX = function () {
        return this.ballXpos;
    };
    Ball.prototype.updateBallY = function () {
        return this.ballYpos;
    };
    Ball.prototype.draw = function () {
        this.createDistance();
        ellipseMode(RADIUS);
        fill('gold');
        ellipse(this.ballXpos, this.ballYpos, this.ballRadius, this.ballRadius);
        this.ballXpos = this.ballXpos + this.ballXSpeed * this.ballXDirection;
        this.ballYpos = this.ballYpos + this.ballYSpeed * this.ballYDirection;
        if (this.ballYDirection == 1) {
            if (this.distance < 1) {
                this.ballYDirection *= -1;
            }
            else {
            }
        }
        if (this.ballXpos >= width - this.ballRadius || this.ballXpos < this.ballRadius) {
            this.ballXDirection *= -1;
            bounce.play();
        }
        if (this.ballYpos < this.ballRadius) {
            this.ballYDirection *= -1;
            bounce.play();
        }
        if (this.ballYpos >= height - this.ballRadius) {
            gameMenu.gameOver = true;
        }
    };
    return Ball;
}());
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
    Button.prototype.clickedMute = function (mute) {
        var left = this.x;
        var right = this.x + this.width;
        var top = this.y;
        var bottom = this.y + this.height;
        mute;
        var isMousePressed = false;
        if (this.isMouseDown && !mouseIsPressed) {
            if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
                isMousePressed = true;
                mute = true;
                return mute;
            }
        }
        this.isMouseDown = mouseIsPressed;
        return isMousePressed;
    };
    Button.prototype.clickedSound = function (mute) {
        var left = this.x;
        var right = this.x + this.width;
        var top = this.y;
        var bottom = this.y + this.height;
        mute;
        var isMousePressed = false;
        if (this.isMouseDown && !mouseIsPressed) {
            if (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom) {
                isMousePressed = true;
                mute = false;
                return mute;
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
        var combinedRadius = paddle.getBoundingCicle().rad + ball.getBoundingCicle().rad;
        if (ball.ballYDirection == 1) {
            if (distance <= combinedRadius) {
                ball.flipDirectionY();
                console.log("hit paddle...");
                bounce.play();
            }
        }
    };
    Collision.prototype.dynamiteHit = function (dynamites, ball) {
        for (var i = 0; i < dynamites.length; i++) {
            if (dynamites[i].dynamiteXPos + 22 > ball.getBoundingCicle().x - 18 && dynamites[i].dynamiteXPos - 22 < ball.getBoundingCicle().x + 18
                && dynamites[i].dynamiteYPos + 45 > ball.getBoundingCicle().y - 18 && dynamites[i].dynamiteYPos - 45 < ball.getBoundingCicle().y + 18) {
                dynamites[i].hit = true;
                dynamites[i].explode();
                console.log("Hit");
            }
        }
    };
    Collision.prototype.paddleHit = function (dynamites, paddle) {
        for (var i = 0; i < dynamites.length; i++) {
            if (dynamites[i].dynamiteXPos + 22 > paddle.paddleXPos - 18 && dynamites[i].dynamiteXPos - 22 < paddle.paddleXPos + 18
                && dynamites[i].dynamiteYPos + 45 > paddle.paddleYPos - 18 && dynamites[i].dynamiteYPos - 45 < paddle.paddleYPos + 18) {
                gameMenu.gameOver = true;
            }
        }
    };
    return Collision;
}());
var Dynamite = (function () {
    function Dynamite() {
        this.dynamiteWidth = 40;
        this.dynamiteHeight = 74;
        this.dynamiteYPos = 1;
        this.dynamiteXPos = 0;
        this.hit = false;
        this.particles = [];
    }
    Dynamite.prototype.counterYPos = function () {
        for (this.dynamiteYPos < height + 37; this.dynamiteYPos++;) {
            this.dynamiteYPos = this.dynamiteYPos + 0.01;
            return this.dynamiteYPos;
        }
    };
    Dynamite.prototype.randomXPos = function () {
        if (this.dynamiteXPos == 0) {
            this.dynamiteXPos = random(15, width - 15);
        }
        return this.dynamiteXPos;
    };
    Dynamite.prototype.getBoundingRectangle = function () {
        return {
            x: this.dynamiteXPos,
            y: this.dynamiteYPos,
            width: this.dynamiteWidth,
            height: this.dynamiteHeight,
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
        rect(this.randomXPos(), this.counterYPos(), this.dynamiteWidth, this.dynamiteHeight, 5, 5, 5, 5);
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
        this.highScore = 0;
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
    GameManager.prototype.getPlayerName = function () {
        push();
        fill('white');
        text("player " + this.player.name, 200, 380, 300, 300);
        pop();
    };
    GameManager.prototype.getScore = function () {
        this.score = this.player.saveScore();
        return this.score;
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
        this.gameIsMuted = new Button("The game is now muted! Restart to undo.", windowWidth / 3 / 2 - 100, windowHeight / 2, 200, 100, "#130B1B", "white");
        this.isGameRunning = false;
        this.world = new World();
        this.mute = false;
        this.gameOver = false;
        this.gameOverImage = loadImage('../assets/img/gameoverII.png');
    }
    GameMenu.prototype.update = function () {
        this.gameManager.highScoreLocalStorage();
        if (!this.mute) {
            this.mute = this.muteButton.clickedMute(this.mute);
        }
        else {
            this.mute = true;
        }
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
            if (this.mute == false) {
                this.muteButton.draw();
            }
            else {
                this.gameIsMuted.draw();
            }
            this.highScoreButton.draw();
        }
        else if (this.isGameRunning && !this.gameOver) {
            this.world.update();
            this.world.draw(this.theRandomStars);
            this.gameManager.draw();
        }
        else if (this.isGameRunning && this.gameOver) {
            background(25);
            var score = void 0;
            var gameOverText = void 0;
            score = this.gameManager.getScore();
            if (score < 1000) {
                gameOverText = "U SUCK!";
            }
            else if (score > 1000) {
                gameOverText = "U are OK!";
            }
            else if (score > 10000) {
                gameOverText = "U are AMAZING!";
            }
            else {
                gameOverText = "Get a LIFE!";
            }
            push();
            fill('white');
            textSize(33);
            text("Score " + score + "..." + gameOverText, width / 2 * 1.1, height / 2 * 1.2, width, height);
            pop();
            push();
            imageMode(CENTER);
            image(this.gameOverImage, width / 2, height / 1.3, width * 1, height * .5);
            pop();
            push();
            fill('white');
            textSize(23);
            text('Restarting..', width / 2 * 1.6, height / 2 * 1.2, width * 1, height * .5);
            pop();
            setTimeout(function () {
                location.reload();
            }, 4000);
        }
    };
    return GameMenu;
}());
var Paddle = (function () {
    function Paddle() {
        this.paddleYPos = mouseY;
        this.paddleXPos = mouseX;
        this.rectangleWidth = width * .3;
        this.rectangleHeight = 15;
        this.bubbleRadius = width * .075;
        this.leftWall = 60;
        this.rightWall = width - 60;
        this.alfredsPaddle = loadImage('../pictures/Alfred_paddel.svg');
    }
    Paddle.prototype.getBoundingCicle = function () {
        return {
            x: this.paddleXPos,
            y: this.paddleYPos,
            rad: this.bubbleRadius
        };
    };
    Paddle.prototype.draw = function () {
        this.paddleYPos = constrain(mouseY, windowHeight / 1.4, windowHeight);
        this.paddleXPos = mouseX;
        ellipseMode(RADIUS);
        rectMode(CENTER);
        noFill();
        ellipse(this.xConstraint, this.paddleYPos, this.bubbleRadius, this.bubbleRadius);
        rect(this.xConstraint, this.paddleYPos, this.rectangleWidth, this.rectangleHeight, 10);
        this.xConstraint = constrain(this.paddleXPos, this.leftWall, this.rightWall);
        imageMode(CENTER);
        image(this.alfredsPaddle, this.xConstraint, this.paddleYPos + 25, width * .3, height * .20);
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
        this.name = "Alfred";
        this.score = 0;
        this.highScoreFLS = 0;
        this.highScore = 0;
    }
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
        return this.score;
    };
    Player.prototype.setHighScoreLS = function () {
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
var song;
var bounce;
var explosion;
var music;
function preload() {
    soundFormats('mp3');
    bounce = window.loadSound('assets/sound/bounceI');
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
    bounce.setVolume(0.7);
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
    if (gameMenu.mute != false) {
        song.setVolume(0);
        explosion.setVolume(0);
        bounce.setVolume(0);
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
        this.interval -= 0.1;
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
    World.prototype.checkDead = function () {
        this.collision.paddleHit(this.dynamites, this.paddle);
    };
    World.prototype.removeDynamite = function () {
        for (var index = 0; index < this.dynamites.length; index++) {
            if (this.dynamites[index].dynamiteYPos > height + 37 || this.dynamites[index].hit == true) {
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
    World.prototype.constrainLine = function () {
        push();
        strokeWeight(2);
        stroke("grey");
        line(windowWidth - windowWidth, windowHeight / 1.4, windowWidth, windowHeight / 1.4);
        pop();
    };
    World.prototype.draw = function (theRandomStars) {
        this.gradient();
        theRandomStars.draw();
        this.constrainLine();
        this.ball.draw();
        for (var _i = 0, _a = this.dynamites; _i < _a.length; _i++) {
            var dynamite = _a[_i];
            dynamite.draw();
        }
        this.paddle.draw();
        this.removeDynamite();
        this.checkDynamites();
        this.checkBall();
        this.checkDead();
    };
    return World;
}());
//# sourceMappingURL=bundle.js.map