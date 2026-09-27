const r = require("raylib");
// const geometry = require("./geometry");


const WIDTH = 300;
const HEIGHT = 200;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "scanning for particles");
    r.SetTargetFPS(60);
}
function running() {
    return !r.WindowShouldClose();
}

function scannerPosition(axis, range, detectorStart, detectorEnd, previousState) {
    if (axis + range >= detectorEnd) {
        return true;
    } else if (axis <= detectorStart) {
        return false;
    } return previousState;

}

function speed(detectorReached, speed) {
    if (detectorReached) return speed * -1;
    return speed;
}

let detectorOneX = 0;
let detectorTwoX = WIDTH / 2 + 1;
const verticalDetectorX = 0;

const detectorOneY = 0;
const detectorTwoY = 0;
let verticalDetectorY = 0;

let detectorOneReached = false;
let detectorTwoReached = false;
let verticalDetectorReached = false;

const detectorOneStart = detectorOneX;
const detectorTwoStart = detectorTwoX;
const verticalDetectorStart = verticalDetectorY;

const verticalDetectorheight = 20;
const detectorTwoWidth = 20;
const detectorOneWidth = 20;

function update() {
    const detectorOneEnd = WIDTH / 2;
    const detectorTwoEnd = WIDTH;
    const verticalDetectorEnd = HEIGHT;

    const detectorOneSpeed = 1;
    const detectorTwoSpeed = 1.5;
    const verticalDetectorSpeed = 1;

    detectorOneReached = scannerPosition(detectorOneX, detectorOneWidth, detectorOneStart, detectorOneEnd, detectorOneReached);
    detectorTwoReached = scannerPosition(detectorTwoX, detectorTwoWidth, detectorTwoStart, detectorTwoEnd, detectorTwoReached);
    verticalDetectorReached = scannerPosition(verticalDetectorY, verticalDetectorheight, verticalDetectorStart, verticalDetectorEnd, verticalDetectorReached);

    detectorOneX += speed(detectorOneReached, detectorOneSpeed);
    detectorTwoX += speed(detectorTwoReached, detectorTwoSpeed);
    verticalDetectorY += speed(verticalDetectorReached, verticalDetectorSpeed);
}

function verticalOverlapCheck(particleAxis, particleEnd, detectorY, detectorRange) {
    const atParticle = detectorY + detectorRange >= particleAxis && detectorY <= particleEnd;

    if (atParticle) return r.Fade(r.RED, 0.7);
    return r.WHITE;
}

function horizontalOverlapCheck(particle1Axis, particle1End, particle2Axis, particle2End, detectorX, detectorRange) {
    const atParticle1 = detectorX + detectorRange >= particle1Axis && detectorX <= particle1End;
    const atparticle2 = detectorX + detectorRange >= particle2Axis && detectorX <= particle2End;

    if (atParticle1 || atparticle2) return r.Fade(r.RED, 0.7);
    return r.WHITE;
}

function draw() {
    const particle1X = 100;
    const particle1Y = 0;
    const particle1Width = 50;
    const particle1End = particle1X + particle1Width;

    const particle2X = 200;
    const particle2Y = 0;
    const particle2Width = 5;
    const particle2End = particle2X + particle2Width;

    const verticalParticleX = 0;
    const verticalParticleY = 90;
    const verticalParticleHeight = 10;
    const verticalParticleEnd = verticalParticleY + verticalParticleHeight;

    const detectorOneColor = horizontalOverlapCheck(particle1X, particle1End, particle2X, particle2End, detectorOneX, detectorOneWidth);
    const detectorTwoColor = horizontalOverlapCheck(particle1X, particle1End, particle2X, particle2End, detectorTwoX, detectorTwoWidth);
    const verticalDetectorColor = verticalOverlapCheck(verticalParticleY, verticalParticleEnd, verticalDetectorY, verticalDetectorheight);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawText("Hemanth", 10, 150, 10, r.GREEN);
    r.DrawRectangle(particle2X, particle2Y, particle2Width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle1X, particle1Y, particle1Width, HEIGHT, r.BLUE);
    r.DrawRectangle(verticalParticleX, verticalParticleY, WIDTH, verticalParticleHeight, r.BLUE);


    r.DrawRectangle(detectorOneX, detectorOneY, detectorOneWidth, HEIGHT, detectorOneColor);
    r.DrawRectangle(detectorTwoX, detectorTwoY, detectorTwoWidth, HEIGHT, detectorTwoColor);
    r.DrawRectangle(verticalDetectorX, verticalDetectorY, WIDTH, verticalDetectorheight, verticalDetectorColor);

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