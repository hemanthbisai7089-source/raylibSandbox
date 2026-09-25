const r = require("raylib");

const windowWidth = 1500;
const windowHeight = 1500;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "hemanth");
  r.SetTargetFPS(60);
}

function update() {}

function draw(
  sourceCircleX,
  sourceCircleY,
  targetCircle1X,
  targetCircle1Y,
  targetCircle2X,
  targetCircle2Y,
) {
  r.BeginDrawing();

  r.DrawCircle(sourceCircleX, sourceCircleY, 10, r.BLUE);
  r.DrawCircle(targetCircle1X, targetCircle1Y, 10, r.RED);
  r.DrawCircle(targetCircle2X, targetCircle2Y, 10, r.RED);

  const distanceToTarget1 = distanceToTarget(
    sourceCircleX,
    sourceCircleY,
    targetCircle1X,
    targetCircle1Y,
  );
  const distanceToTarget2 = distanceToTarget(
    sourceCircleX,
    sourceCircleY,
    targetCircle2X,
    targetCircle2Y,
  );
  if (distanceToTarget1 < distanceToTarget2) {
    r.DrawLine(
      sourceCircleX,
      sourceCircleY,
      targetCircle1X,
      targetCircle1Y,
      r.WHITE,
    );
  } else {
    r.DrawLine(
      sourceCircleX,
      sourceCircleY,
      targetCircle2X,
      targetCircle2Y,
      r.WHITE,
    );
  }
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    const sourceCircleX = 555;
    const sourceCircleY = 450;
    const targetCircle1X = 367;
    const targetCircle1Y = 466;
    const targetCircle2X = 578;
    const targetCircle2Y = 677;

    update();
    draw(
      sourceCircleX,
      sourceCircleY,
      targetCircle1X,
      targetCircle1Y,
      targetCircle2X,
      targetCircle2Y,
    );
  }
}

function main() {
  setup();

  loop();

  r.CloseWindow();
}

function distanceToTarget(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

main();
