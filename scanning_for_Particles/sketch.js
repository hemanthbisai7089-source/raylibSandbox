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

const particle1X = 100;
const particle1Y = 0;
const Particle1Width = 50;
const particle1End = particle1X + Particle1Width;
const particle2X = 200;
const particle2Y = 0;
const Particle2Width = 5;
const particle2End = particle2X + Particle2Width;


function update() {

    scannerPosition();
    color = overlapCheck(particle1X, particle1End, particle2X, particle2End);


    if (scannerReached) {

        scannerX -= 1;
    } else {
        scannerX += 1;
    }


}

function overlapCheck(particle1X, particle1End, particle2X, particle2End) {
    const atParticle1 = scannerX + scannerWidth >= particle1X && scannerX <= particle1End;
    const atparticle2 = scannerX + scannerWidth >= particle2X && scannerX <= particle2End;

    if (atParticle1 || atparticle2) return r.Fade(r.RED, 0.7);
    else {
        return r.WHITE;

    }
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle2X, particle2Y, Particle2Width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle1X, particle1Y, Particle1Width, HEIGHT, r.BLUE);
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