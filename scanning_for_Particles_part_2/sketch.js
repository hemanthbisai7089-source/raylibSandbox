const r = require("raylib");
// const geometry = require("./geometry");
const d1 = require("./d1.js");
const d2 = require("./d2.js");
const vd = require("./vd.js");


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


// let d1.x = 0;
// const d1.y = 0;
// let d1.Velocity = 1;
// const d1.start = d1.X;
// const d1.width = 20;

// let d2.x = WIDTH / 2;
// const d2.y = 0;
// let d2.velocity = 1.5;
// const d2.start = d2.x;
// const d2.width = 20;

// const vd.x = 0;
// let vd.y = 0;
// let vd.velocity = 1;
// const vd.start = vd.y;
// const vd.height = 20;

// let velocity = 1;


function update() {
    const detectorOneRangewidth = WIDTH / 2;
    const detectorTwoRangewidth = WIDTH / 2;
    const verticalDetectorRangewidth = HEIGHT;


    d1.velocity = isInBounds(d1.x, d1.width - d1.width, d1.start, detectorOneRangewidth - d1.width) ? d1.velocity : -d1.velocity;
    d2.velocity = isInBounds(d2.x, d2.width - d2.width, d2.start, detectorTwoRangewidth - d2.width) ? d2.velocity : -d2.velocity;
    vd.velocity = isInBounds(vd.y, vd.height - vd.height, vd.start, verticalDetectorRangewidth - vd.height) ? vd.velocity : -vd.velocity;

    d1.x += d1.velocity;
    d2.x += d2.velocity;
    vd.y += vd.velocity;
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

    const detectorOneColor = getcolor(isInBounds(particle1X, particle1Width, d1.x, d1.width));
    const detectorTwoColor = getcolor(isInBounds(particle2X, particle2Width, d2.x, d2.width));
    const verticalDetectorColor = getcolor(isInBounds(verticalParticleY, verticalParticleHeight, vd.y, vd.height));

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawText("Hemanth", 10, 150, 10, r.GREEN);

    r.DrawRectangle(particle2X, particle2Y, particle2Width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle1X, particle1Y, particle1Width, HEIGHT, r.BLUE);
    r.DrawRectangle(verticalParticleX, verticalParticleY, WIDTH, verticalParticleHeight, r.BLUE);

    r.DrawRectangle(d1.x, d1.y, d1.width, HEIGHT, detectorOneColor);
    r.DrawRectangle(d2.x, d2.y, d2.width, HEIGHT, detectorTwoColor);
    r.DrawRectangle(vd.x, vd.y, WIDTH, vd.height, verticalDetectorColor);

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