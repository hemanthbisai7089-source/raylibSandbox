const r = require("raylib");
const geometry = require("./geometry");


function setup() {
    const windowWidth = 900;
    const windowHeight = 900;

    r.InitWindow(windowWidth, windowHeight, "Raylib");
    r.SetTargetFPS(60);
}
function running() {
    return !r.WindowShouldClose();
}

function update() {
    // change the state
}

function draw() {
    const x = 300;
    const y = 300;
    const outerRectanglewidth = 500;
    const outerRectangleheight = 400;
    const WIDTH = 0.8;
    const HEIGHT = 0.8;
    const innerRectangleWidth = geometry.innerRectangleDimention(WIDTH, outerRectanglewidth);
    const innerRectangleHeight = geometry.innerRectangleDimention(HEIGHT, outerRectangleheight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, outerRectanglewidth, outerRectangleheight, r.BLACK);

    r.DrawRectangle(
        geometry.rectangleStarting(x, outerRectanglewidth, innerRectangleWidth),
        geometry.rectangleStarting(y, outerRectangleheight, innerRectangleHeight),
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};