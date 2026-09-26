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
const detectorOneSpeed = 1;

const detectorTwoStart = WIDTH / 2 + 1;
let detectorTwoX = detectorTwoStart;
let detectorTwoY = 0;
const detectorTwoWidth = 20;
const detectorTwoEnd = WIDTH;
let detectorTwoColor = r.WHITE;
let detectorTwoReached = false;
let twoReached = false;
const detectorTwoSpeed = 1.5;

const verticalDetectorStart = 0;
let verticalDetectorX = verticalDetectorStart;
let verticalDetectorY = 0;
const verticalDetectorheight = 20;
let verticalDetectorColor = r.WHITE;
const verticalDetectorEnd = HEIGHT;
let verticalDetectorReached = false;
let verticalReached = false;
const verticalDetectorSpeed = 1;

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



function scannerPosition(axis, range, detectorStart, detectorEnd, detectorNumber) {
    if (detectorNumber === 1) {
        if (axis + range >= detectorEnd) {
            oneReached = true;
        } else if (axis <= detectorStart) {
            oneReached = false;

        } return oneReached;
    }

    if (detectorNumber === 2) {
        if (axis + range >= detectorEnd) {
            twoReached = true;
        } else if (axis <= detectorStart) {
            twoReached = false;

        } return twoReached;
    }

    if (detectorNumber === 3) {
        if (axis + range >= detectorEnd) {
            verticalReached = true;
        } else if (axis <= detectorStart) {
            verticalReached = false;

        } return verticalReached;
    }
}

function update() {

    detectorOneReached = scannerPosition(detectorOneX, detectorOneWidth, detectorOneStart, detectorOneEnd, 1);
    detectorTwoReached = scannerPosition(detectorTwoX, detectorTwoWidth, detectorTwoStart, detectorTwoEnd, 2);
    verticalDetectorReached = scannerPosition(verticalDetectorY, verticalDetectorheight, verticalDetectorStart, verticalDetectorEnd, 3);

    detectorOneColor = horizontalOverlapCheck(particle1X, particle1End, particle2X, particle2End, detectorOneX, detectorOneWidth);
    detectorTwoColor = horizontalOverlapCheck(particle1X, particle1End, particle2X, particle2End, detectorTwoX, detectorTwoWidth);
    verticalDetectorColor = verticalOverlapCheck(verticalParticleY, verticalParticleEnd, verticalDetectorY, verticalDetectorheight);

    detectorOneX += move(detectorOneReached, detectorOneSpeed);
    detectorTwoX += move(detectorTwoReached, detectorTwoSpeed);
    verticalDetectorY += move(verticalDetectorReached, verticalDetectorSpeed);
}

function move(detectorReached, speed) {
    if (detectorReached) return speed * -1;
    return speed;
}
function verticalOverlapCheck(particleAxis, particleEnd, detectorY, detectorRange) {
    const atParticle = detectorY + detectorRange >= particleAxis && detectorY <= particleEnd;

    if (atParticle) return r.Fade(r.RED, 0.7);
    else {
        return r.WHITE;

    }


}

function horizontalOverlapCheck(particle1Axis, particle1End, particle2Axis, particle2End, detectorX, detectorRange) {
    const atParticle1 = detectorX + detectorRange >= particle1Axis && detectorX <= particle1End;
    const atparticle2 = detectorX + detectorRange >= particle2Axis && detectorX <= particle2End;

    if (atParticle1 || atparticle2) return r.Fade(r.RED, 0.7);
    else {
        return r.WHITE;

    }
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

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