const r = require("raylib");

const WIDTH = 600;
const HEIGHT = 700;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "Intersecting Circles");
  r.SetTargetFPS(60);
}

function draw(circle1X, circle1Y, circle1Radius, circle2X, circle2Y, circle2Radius, colour) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  r.DrawCircle(circle1X, circle1Y, circle1Radius, colour);
  r.DrawCircle(circle2X, circle2Y, circle2Radius, colour);

  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    const circle1X = 100;
    const circle1Y = 100;
    const circle1Radius = 60;

    const circle2X = 250;
    const circle2Y = 100;
    const circle2Radius = 50;


    const distanceBetweenCircles = distance(
      circle1X,
      circle1Y,
      circle2X,
      circle2Y,
    );

    let colour =
      circle1Radius + circle2Radius >= distanceBetweenCircles ? r.RED : r.BLACK;

    draw(circle1X, circle1Y, circle1Radius, circle2X, circle2Y, circle2Radius, colour);

  }
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function main() {
  setup();
  loop();

  r.CloseWindow();
}

main();

