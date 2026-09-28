const sketch = require("./sketch.js");

function loop() {
  while (sketch.running()) {
    sketch.update();
    sketch.draw();
  }
}

function main() {
  const WIDTH = 700;
  const HEIGHT = 400;
  const FPS = 60;
  const TITLE = "scanning for particles";

  sketch.setup(WIDTH, HEIGHT, FPS, TITLE);
  loop();
  sketch.teardown();
}

main();
