const r = require("raylib");
//const geometry = require("./geometrya");

function running() {
    return !r.WindowShouldClose();
}

const WIDTH = 300;
const HEIGHT = 200;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "scanning for particles");
    r.SetTargetFPS(60);
}

let scannerX = 0;
let scannerY = 0;
const scannerWidth = 20;
let color = r.WHITE;
let scannerReached = false;

function scannerPosition() {
    if (scannerX + scannerWidth === WIDTH) {
        scannerReached = true;
    } else if (scannerX === 0) {
        scannerReached = false;
    }
}

function update() {

    scannerPosition();
    overlapCheck();

    if (scannerReached) {

        scannerX -= 1;
    } else {
        scannerX += 1;
    }


}
const particleX = 100;
const particleY = 0;
const ParticleWidth = 50;
const particleEnd = particleX + ParticleWidth;

function overlapCheck() {
    if (scannerX + scannerWidth >= particleX && scannerX <= particleEnd) color = r.RED;
    else {
        color = r.WHITE;

    }
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);


    r.DrawRectangle(particleX, particleY, ParticleWidth, HEIGHT, r.BLUE);
    r.DrawRectangle(scannerX, scannerY, scannerWidth, HEIGHT, color);

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