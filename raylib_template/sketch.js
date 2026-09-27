const r = require("raylib");
const geometry = require("./geometry");


function setup() {
    // prepare the sketch
}

function running() {
    return !r.WindowShouldClose();
}

function update() {
    // change the state
}

function draw() {
    // draw the current state
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