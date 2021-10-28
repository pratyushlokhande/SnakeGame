import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
} from "./models/Snake.js";

import { update as updateFood, draw as drawFood } from "./models/Food.js";

const gameBoard = document.getElementById("game-board");

let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const deltaTime = (currentTime - lastRenderTime) / 1000;
  if (deltaTime < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
