function innerRectangleDimention(innerRectangleRatio, outerRectangleDimention) {
    return innerRectangleRatio * outerRectangleDimention;
}
function rectangleStarting(
    outerRectangleStarting,
    outerRectangleDimention,
    innerRectangleDimension,
) {
    return (
        outerRectangleStarting +
        (outerRectangleDimention - innerRectangleDimension) / 2
    );
}

module.exports = {
    innerRectangleDimention,
    rectangleStarting,
};