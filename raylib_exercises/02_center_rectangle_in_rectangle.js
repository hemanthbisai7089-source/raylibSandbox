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
    r.WHITE,
  );

  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    const x = 300;
    const y = 300;
    const outerRectanglewidth = 600;
    const outerRectangleheight = 500;
    const innerRectangleWidth = 500;
    const innerRectangleHeight = 400;
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

function main() {
  setup();

  loop();

  r.CloseWindow();
}

const windowWidth = 1500;
const windowHeight = 1500;

main();
