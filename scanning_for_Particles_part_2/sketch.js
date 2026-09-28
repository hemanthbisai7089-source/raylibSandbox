const r = require("raylib");
// const geometry = require("./geometry.js");
const d1 = require("./d1.js");


const WIDTH = 300;
const HEIGHT = 200;
const FPS = 60;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "scanning for particles");
    r.SetTargetFPS(FPS);
}
function running() {
    return !r.WindowShouldClose();
}

function detectorPosition(axis, range, detectorStart, detectorEnd, previousState) {
    if (axis + range >= detectorEnd) return true;
    if (axis <= detectorStart) return false;
    return previousState;

}

function speed(detectorReached, speed) {
    return detectorReached ? -speed : speed;
}

// let d1.X = 0;
// const d1.Y = 0;
// let d1.Velocity = 1;
// const d1.Start = d1.X;
// const d1.Width = 20;

let detectorTwoX = WIDTH / 2;
const detectorTwoY = 0;
let detectorTwoVelocity = 1.5;
const detectorTwoStart = detectorTwoX;
const detectorTwoWidth = 20;

const verticalDetectorX = 0;
let verticalDetectorY = 0;
let verticalDetectorVelocity = 1;
const verticalDetectorStart = verticalDetectorY;
const verticalDetectorheight = 20;





function update() {
    const d1.Rangewidth = WIDTH / 2;
    const detectorTwoRangewidth = WIDTH / 2;
    const verticalDetectorRangewidth = HEIGHT;

    d1.X += isInBounds(d1.X, d1.Width - d1.Width, d1.Start, d1.Rangewidth - d1.Width) ? d1.Velocity : -d1.Velocity;
    detectorTwoX += isInBounds(detectorTwoX, detectorTwoWidth - detectorTwoWidth, detectorTwoStart, detectorTwoRangewidth - detectorTwoWidth) ? detectorTwoVelocity : -detectorTwoVelocity;
    verticalDetectorY += isInBounds(verticalDetectorY, verticalDetectorheight - verticalDetectorheight, verticalDetectorStart, verticalDetectorRangewidth - verticalDetectorheight) ? verticalDetectorVelocity : -verticalDetectorVelocity;
}

function isInBounds(start1, width1, start2, width2) {
    const end1 = start1 + width1;
    const end2 = start2 + width2;

    return !(end2 < start1 || start2 > end1);


}
function getcolor(overlaped) {
    return overlaped ? r.Fade(r.RED, 0.7) : r.WHITE;
}

function draw() {
    const particle1X = 100;
    const particle1Y = 0;
    const particle1Width = 50;

    const particle2X = 200;
    const particle2Y = 0;
    const particle2Width = 5;

    const verticalParticleX = 0;
    const verticalParticleY = 90;
    const verticalParticleHeight = 10;

    const d1.Color = getcolor(isInBounds(particle1X, particle1Width, d1.X, d1.Width));
    const detectorTwoColor = getcolor(isInBounds(particle2X, particle2Width, detectorTwoX, detectorTwoWidth));
    const verticalDetectorColor = getcolor(isInBounds(verticalParticleY, verticalParticleHeight, verticalDetectorY, verticalDetectorheight));

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawText("Hemanth", 10, 150, 10, r.GREEN);

    r.DrawRectangle(particle2X, particle2Y, particle2Width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle1X, particle1Y, particle1Width, HEIGHT, r.BLUE);
    r.DrawRectangle(verticalParticleX, verticalParticleY, WIDTH, verticalParticleHeight, r.BLUE);

    r.DrawRectangle(d1.X, d1.Y, d1.Width, HEIGHT, d1.Color);
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