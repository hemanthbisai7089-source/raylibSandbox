const r = require("raylib");
let x = 10;
let y = 20;
let rectangleWidth = 50;
let rectangleHeight = 50;
let rectangle2Width = 0;
let rectangle2Height = 50;
const windowWidth = 400;
const windowHeight = 400;
r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  x = x + 1;

  r.BeginDrawing();

  r.ClearBackground(r.BLACK);
  r.DrawLine(windowWidth / 2, 0, windowWidth / 2, windowHeight, r.WHITE);

  
  r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.WHITE);
  if (rectangleWidth + x === windowWidth / 2) {
    rectangleWidth -= 1;
    rectangle2Width += 1;
  }
  r.EndDrawing();
}

r.CloseWindow();
