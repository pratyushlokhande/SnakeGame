let food = { x: 1, y: 1 };

export function update() {}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = food.y;
  foodElement.style.gridRowStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
