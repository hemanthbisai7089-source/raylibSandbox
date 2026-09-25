// const r = require("raylib");

// function rectangleDimension(windowDimension, coordinate) {
//   return windowDimension - coordinate * 2;
// }

// const windowWidth = 1000;
// const windowHeight = 700;

// // 200 * 300

// r.InitWindow(windowWidth, windowHeight, "Raylib");
// r.SetTargetFPS(60);

// while (!r.WindowShouldClose()) {
//   const x = 100;
//   const y = 100;

//   r.BeginDrawing();
//   r.ClearBackground(r.BLUE);

//   r.DrawRectangle(
//     x,
//     y,
//     rectangleDimension(windowWidth, x),
//     rectangleDimension(windowHeight, y),
//     r.WHITE,
//   );

//   r.EndDrawing();
// }

// r.CloseWindow();

const r = require("raylib");

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(60);
}

function update() {}

function draw(rectangleWidth, rectangleHeight) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawRectangle(
    rectangleStarting(windowWidth, rectangleWidth),
    rectangleStarting(windowHeight, rectangleHeight),
    rectangleWidth,
    rectangleHeight,
    r.WHITE,
  );

  r.EndDrawing();
}
function loop() {
  while (!r.WindowShouldClose()) {
    const rectangleWidth = 500;
    const rectangleHeight = 400;

    update();
    draw(rectangleWidth, rectangleHeight);
  }
}

function rectangleStarting(windowDimension, rectangleDimension) {
  return (windowDimension - rectangleDimension) / 2;
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}

const windowWidth = 800;
const windowHeight = 700;

main();
