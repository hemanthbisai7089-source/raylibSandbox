const r = require("raylib");
const geometry = require("./geometry");


function setup() {
    const WIDTH = 600;
    const HEIGHT = 700;

    r.InitWindow(WIDTH, HEIGHT, "Intersecting Circles");
    r.SetTargetFPS(60);
}

function running() {
    return !r.WindowShouldClose();
}

function update() {
    // change the state
}

function draw() {
    const circle1X = 150;
    const circle1Y = 100;
    const circle1Radius = 60;

    const circle2X = 260;
    const circle2Y = 100;
    const circle2Radius = 50;


    const distanceBetweenCircles = geometry.distance(circle1X, circle1Y, circle2X, circle2Y,);

    const colour = circle1Radius + circle2Radius >= distanceBetweenCircles ? r.RED : r.BLACK;

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(circle1X, circle1Y, circle1Radius, colour);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, colour);

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