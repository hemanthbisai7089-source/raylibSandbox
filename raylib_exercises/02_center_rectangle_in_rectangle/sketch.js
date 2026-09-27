const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 1000;
const windowHeight = 1000;

function setup() {
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
    const x = 200;
    const y = 300;
    const outerRectanglewidth = 700;
    const outerRectangleheight = 300;
    const innerRectangleWidth = 500;
    const innerRectangleHeight = 200;

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(x, y, outerRectanglewidth, outerRectangleheight, r.BLACK);

    r.DrawRectangle(
        geometry.rectangleStarting(x, outerRectanglewidth, innerRectangleWidth),
        geometry.rectangleStarting(y, outerRectangleheight, innerRectangleHeight),
        innerRectangleWidth,
        innerRectangleHeight,
        r.WHITE,
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