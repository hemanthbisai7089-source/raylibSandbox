function rectangleStarting(
    outerRectangleStarting,
    outerRectangleDimention,
    innerRectangleDimension,
) {
    return (
        outerRectangleStarting +
        (outerRectangleDimention - innerRectangleDimension) / 2
    );
} module.exports = {
    rectangleStarting,
};