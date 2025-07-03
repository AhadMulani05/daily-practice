const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");

const gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 1;
let dy = 0;
let score = 0;

function drawBoard() {
  board.innerHTML = "";

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const cell = document.createElement("div");
      const isSnake = snake.some(seg => seg.x === x && seg.y === y);
      const isFood = food.x === x && food.y === y;

      if (isSnake) cell.classList.add("snake");
      else if (isFood) cell.classList.add("food");

      board.appendChild(cell);
    }
  }
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreDisplay.textContent = score;
    food = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
  } else {
    snake.pop();
  }

  // Collision
  if (
    head.x < 0 || head.x >= gridSize ||
    head.y < 0 || head.y >= gridSize ||
    snake.slice(1).some(seg => seg.x === head.x && seg.y === head.y)
  ) {
    alert("Game Over! Your score: " + score);
    resetGame();
  }
}

function resetGame() {
  snake = [{ x: 10, y: 10 }];
  dx = 1;
  dy = 0;
  score = 0;
  scoreDisplay.textContent = score;
  food = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };
}

function update() {
  moveSnake();
  drawBoard();
}

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "ArrowUp": if (dy === 0) { dx = 0; dy = -1; } break;
    case "ArrowDown": if (dy === 0) { dx = 0; dy = 1; } break;
    case "ArrowLeft": if (dx === 0) { dx = -1; dy = 0; } break;
    case "ArrowRight": if (dx === 0) { dx = 1; dy = 0; } break;
  }
});

setInterval(update, 250);
