const r = require("raylib");
const g = require("./geometry");

const windowWidth = 900;
const windowHeight = 700;

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
    const rectangleWidth = 500;
    const rectangleHeight = 400;

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(
        g.rectangleStarting(windowWidth, rectangleWidth),
        g.rectangleStarting(windowHeight, rectangleHeight),
        rectangleWidth,
        rectangleHeight,
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