const r = require("raylib");

let direction;
const WIDTH = 1280;
const HEIGHT = 720; // some comment
const VIRTUALWIDTH = 160 / 2;

const VIRTUALHEIGHT = 90 / 2;
let target;

function setup() {
  r.InitWindow(WIDTH, HEIGHT, "hello");
  r.SetTargetFPS(10);
  target = r.LoadRenderTexture(VIRTUALWIDTH, VIRTUALHEIGHT);

  r.SetTextureFilter(target.texture, r.TEXTURE_FILTER_POINT);


}
function loop() {
  let x = 5;
  let y = 5;
  const snakeWidth = 1;
  const snakeHeight = 1;

  let foodX = 6;
  let foodY = 8;
  const foodWidth = 1;
  const foodHeight = 1;

  let score = 0;

  while (!r.WindowShouldClose()) {







    // update();
    directionToMove(x, y);

    if (direction === "right") {

      if (x + snakeWidth === foodX && y === foodY) {

        foodX = r.GetRandomValue(0, VIRTUALWIDTH - foodWidth);

        foodY = r.GetRandomValue(0, VIRTUALHEIGHT - foodHeight);
      }
      x = x + 1;

    }
    else if (direction === "left") {

      if (x === foodX + foodWidth && y === foodY) {

        foodX = r.GetRandomValue(0, VIRTUALWIDTH - foodWidth);

        foodY = r.GetRandomValue(0, VIRTUALHEIGHT - foodHeight);
      }
      x = x - 1;

    }
    else if (direction === "up") {

      if (y === foodY + foodHeight && x === foodX) {

        foodX = r.GetRandomValue(0, VIRTUALWIDTH - foodWidth);

        foodY = r.GetRandomValue(0, VIRTUALHEIGHT - foodHeight);
      }
      y = y - 1;

    }
    else if (direction === "down") {

      if (y + snakeHeight === foodY && x === foodX) {

        foodX = r.GetRandomValue(0, VIRTUALWIDTH - foodWidth);

        foodY = r.GetRandomValue(0, VIRTUALHEIGHT - foodHeight);
      }
      y = y + 1;

    }

    if (x === VIRTUALWIDTH) x = -snakeWidth;
    else if (y === VIRTUALHEIGHT) y = -snakeHeight;
    else if (x + snakeWidth === 0) x = VIRTUALWIDTH;
    else if (y + snakeHeight === 0) y = VIRTUALHEIGHT;


    textureMode(x, y, snakeWidth, snakeHeight, foodX, foodY, foodWidth, foodHeight);
    // draw(x, y, rectangleWidth, rectangleHeight, foodX, foodY, foodWidth, foodHeight);
  }


  function textureMode() {
    r.BeginTextureMode(target);
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(foodX, foodY, foodWidth, foodHeight, r.BLUE);
    r.DrawRectangle(x, y, snakeWidth, snakeHeight, r.RED);

    // Draw a single "pixel" (will appear large when scaled)
    // r.DrawPixel(10, 10, r.WHITE);
    // r.DrawText("Snake", 1, 1, 1 / 1000, r.GREEN);
    r.EndTextureMode();
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);

    const source = { x: 0, y: 0, width: VIRTUALWIDTH, height: -VIRTUALHEIGHT };
    // Define destination rectangle (Stretches the 320x180 canvas to 1280x720)
    const dest = { x: 0, y: 0, width: WIDTH, height: HEIGHT };
    const origin = { x: 0, y: 0 };

    r.DrawTexturePro(target.texture, source, dest, origin, 0.0, r.WHITE);


    // r.DrawRectangle(foodX, foodY, foodWidth, foodHeight, r.BLUE);
    // r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.RED);


    r.EndDrawing();

  }
}

function update() {

}

// function draw(x, y, rectangleWidth, rectangleHeight, foodX, foodY, foodWidth, foodHeight) {



//   r.BeginDrawing();

//   r.ClearBackground(r.WHITE);

//   const source = { x: 0, y: 0, width: VIRTUALWIDTH, height: -VIRTUALHEIGHT };
//   // Define destination rectangle (Stretches the 320x180 canvas to 1280x720)
//   const dest = { x: 0, y: 0, width: WIDTH, height: HEIGHT };
//   const origin = { x: 0, y: 0 };

//   r.DrawTexturePro(target.texture, source, dest, origin, 0.0, r.WHITE);


//   // r.DrawRectangle(foodX, foodY, foodWidth, foodHeight, r.BLUE);
//   // r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.RED);


//   r.EndDrawing();
// }

function directionToMove(x, y) {

  if (r.IsKeyDown(r.KEY_RIGHT) && direction !== "left") {
    direction = "right";
  }
  if (r.IsKeyDown(r.KEY_LEFT) && direction !== "right") {
    direction = "left";
  }
  if (r.IsKeyDown(r.KEY_UP) && direction !== "down") {
    direction = "up";
  }
  if (r.IsKeyDown(r.KEY_DOWN) && direction !== "up") {
    direction = "down";
  }


  return direction === 0 ? x : y;
}
function main() {
  setup();
  loop();
  r.UnloadRenderTexture();

  r.CloseWindow();
}



main();   