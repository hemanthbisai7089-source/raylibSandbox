const r = require("raylib");

function setup() {
  r.InitWindow(windowWidth, windowHeight, "Raylib");
  r.SetTargetFPS(60);
}

function update() {}

function draw(
  x,
  y,
  outerRectanglewidth,
  outerRectangleheight,
  innerRectangleWidth,
  innerRectangleHeight,
) {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  r.DrawRectangle(x, y, outerRectanglewidth, outerRectangleheight, r.BLACK);

  r.DrawRectangle(
    rectangleStarting(x, outerRectanglewidth, innerRectangleWidth),
    rectangleStarting(y, outerRectangleheight, innerRectangleHeight),
    innerRectangleWidth,
    innerRectangleHeight,
    r.RED,
  );

  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    const x = 300;
    const y = 300;
    const outerRectanglewidth = 900;
    const outerRectangleheight = 500;
    const width = 0.5;
    const height = 0.8;
    const innerRectangleWidth = innerRectangleDimention(
      width,
      outerRectanglewidth,
    );
    const innerRectangleHeight = innerRectangleDimention(
      height,
      outerRectangleheight,
    );

    update();
    draw(
      x,
      y,
      outerRectanglewidth,
      outerRectangleheight,
      innerRectangleWidth,
      innerRectangleHeight,
    );
  }
}

function main() {
  setup();
  loop();

  r.CloseWindow();
}

function innerRectangleDimention(innerRectangleRatio, outerRectangleDimention) {
  return innerRectangleRatio * outerRectangleDimention;
}
function rectangleStarting(
  outerRectangleStarting,
  outerRectangleDimention,
  innerRectangleDimension,
) {
  return (
    outerRectangleStarting +
    (outerRectangleDimention - innerRectangleDimension) / 2
  );
}

const windowWidth = 1500;
const windowHeight = 1500;

main();
