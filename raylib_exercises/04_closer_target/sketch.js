const r = require("raylib");
const geometry = require("./geometry");


function setup() {
    const windowWidth = 1500;
    const windowHeight = 1500;
    r.InitWindow(windowWidth, windowHeight, "hemanth");
    r.SetTargetFPS(60);
}

function running() {
    return !r.WindowShouldClose();
}

function update() {
    // change the state
}

function draw() {
    const sourceCircleX = 555;
    const sourceCircleY = 450;
    const targetCircle1X = 555;
    const targetCircle1Y = 420;
    const targetCircle2X = 578;
    const targetCircle2Y = 677;

    r.BeginDrawing();

    r.DrawCircle(sourceCircleX, sourceCircleY, 10, r.BLUE);
    r.DrawCircle(targetCircle1X, targetCircle1Y, 10, r.RED);
    r.DrawCircle(targetCircle2X, targetCircle2Y, 10, r.RED);

    const distanceToTarget1 = geometry.distanceToTarget(sourceCircleX, sourceCircleY, targetCircle1X, targetCircle1Y,);
    const distanceToTarget2 = geometry.distanceToTarget(sourceCircleX, sourceCircleY, targetCircle2X, targetCircle2Y,);

    if (distanceToTarget1 < distanceToTarget2) {
        r.DrawLine(sourceCircleX, sourceCircleY, targetCircle1X, targetCircle1Y, r.WHITE,);
    } else {
        r.DrawLine(sourceCircleX, sourceCircleY, targetCircle2X, targetCircle2Y, r.WHITE,);
    }
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