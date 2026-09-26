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
const detectorOneStart = 0;
let detectorOneX = detectorOneStart;
let detectorOneY = 0;
const detectorOneWidth = 20;
let detectorOneColor = r.WHITE;
const detectorOneEnd = WIDTH / 2;
let detectorOneReached = false;
let oneReached = false;

const detectorTwoStart = WIDTH / 2 + 1;
let detectorTwoX = detectorTwoStart;
let detectorTwoY = 0;
const detectorTwoWidth = 20;
const detectorTwoEnd = WIDTH;
let detectorTwoColor = r.WHITE;
let detectorTwoReached = false;
let twoReached = false;


const particle1X = 100;
const particle1Y = 0;
const Particle1Width = 50;
const particle1End = particle1X + Particle1Width;
const particle2X = 200;
const particle2Y = 0;
const Particle2Width = 5;
const particle2End = particle2X + Particle2Width;

function scannerPosition(detectorX, detectorWidth, detectorEnd, detectorNumber) {
    if (detectorNumber === 1) {
        if (detectorX + detectorWidth >= detectorEnd) {
            oneReached = true;
        } else if (detectorX <= 0) {
            oneReached = false;

        } return oneReached;
    }
    if (detectorNumber === 2) {
        if (detectorX + detectorWidth >= detectorEnd) {
            twoReached = true;
        } else if (detectorX <= detectorTwoStart) {
            twoReached = false;

        } return twoReached;
    }
}

function update() {

    detectorOneReached = scannerPosition(detectorOneX, detectorOneWidth, detectorOneEnd, 1);
    detectorTwoReached = scannerPosition(detectorTwoX, detectorTwoWidth, detectorTwoEnd, 2);

    detectorOneColor = overlapCheck(particle1X, particle1End, particle2X, particle2End, detectorOneX);
    detectorTwoColor = overlapCheck(particle1X, particle1End, particle2X, particle2End, detectorTwoX);

    if (detectorOneReached) {

        detectorOneX -= 1;

    } else {
        detectorOneX += 1;
    }
    if (detectorTwoReached) {

        detectorTwoX -= 3;

    } else {
        detectorTwoX += 3;
    }



}

function overlapCheck(particle1X, particle1End, particle2X, particle2End, detectorX) {
    const atParticle1 = detectorX + detectorOneWidth >= particle1X && detectorX <= particle1End;
    const atparticle2 = detectorX + detectorOneWidth >= particle2X && detectorX <= particle2End;

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
    r.DrawRectangle(detectorOneX, detectorOneY, detectorOneWidth, HEIGHT, detectorOneColor);
    r.DrawRectangle(detectorTwoX, detectorTwoY, detectorTwoWidth, HEIGHT, detectorTwoColor);


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