// pong.js

// Game Variables
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let ballX = 50;
let ballSpeedX = 15;
let ballY = 50;
let ballSpeedY = 6;
let paddle1Y = 250;
let paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;
let playerScore = 0;
let aiScore = 0;
let intervalId;
let gameSpeed = 1; // Game speed variable

// Beep sound
let beepSound = new Audio('beep.mp3');

// Calculate Mouse Position
function calculateMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

// Paddle Movement
canvas.addEventListener('mousemove', function(evt) {
    let mousePos = calculateMousePos(evt);
    paddle1Y = mousePos.y - (PADDLE_HEIGHT / 2);
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Speed Changer
document.getElementById('speedChanger').addEventListener('change', function() {
    gameSpeed = parseFloat(this.value);
});

// Draw Everything
function drawEverything() {
    // Blank Screen
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Left Paddle
    ctx.fillStyle = 'white';
    ctx.fillRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT);

    // Right Paddle
    ctx.fillStyle = 'white';
    ctx.fillRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT);

    // Ball
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
    ctx.fill();

    // Draw Scores
    ctx.font = '30px Arial';
    ctx.fillText(playerScore, 100, 50);
    ctx.fillText(aiScore, canvas.width - 100, 50);
}

// Move Everything
function moveEverything() {
    ballX += ballSpeedX * gameSpeed;
    ballY += ballSpeedY * gameSpeed;

    // AI Movement
    var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT/2);
    if (deltaY > 0) {
        paddle2Y += Math.min(4, deltaY) * gameSpeed;
    } else {
        paddle2Y -= Math.min(4, -deltaY) * gameSpeed;
    }

    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            beepSound.play(); // Play beep sound
        } else {
            aiScore++; // AI scores a point
            ballReset();
        }
    }
    if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
            ballSpeedX = -ballSpeedX;
            beepSound.play(); // Play beep sound
        } else {
            playerScore++; // Player scores a point
            ballReset();
        }
    }
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}

// Ball Reset
function ballReset() {
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
}

// Game Loop
function gameLoop() {
    drawEverything();
    moveEverything();
}

// Start Game
function startGame() {
    gameSpeed = parseFloat(document.getElementById('speedChanger').value);
    canvas.width = 800;
    canvas.height = 600;
    intervalId = setInterval(gameLoop, 1000 / 60); // Update 60 times per second
}

// Reset Game
function resetGame() {
    clearInterval(intervalId);
    ballX = 50;
    ballY = 50;
    paddle1Y = 250;
    paddle2Y = 250;
    playerScore = 0;
    aiScore = 0;
    document.getElementById('startMenu').style.display = 'flex';
    document.getElementById('gameCanvas').style.display = 'none';
}

// Keydown Event
window.addEventListener('keydown', function(evt) {
    if (evt.key === 'Escape') {
        resetGame();
    }
});