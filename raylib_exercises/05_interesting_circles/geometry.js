
function distance(x1, y1, x2, y2) {
    return Math.sqrt(sqr(x2 - x1) + sqr(y2 - y1));
}
function sqr(a) {
    return a * a;
}
module.exports = {
    distance,
    sqr,
};