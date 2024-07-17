const MajorColorNames = require('../app/majorColors');
const MinorColorNames = require('../app/minorColors');
const ColorPair = require('../app/colorPair');

function getColorFromPairNumber(pairNumber) {
    const minorSize = MajorColorNames.length;
    const majorSize = MinorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw new Error(`Argument PairNumber: ${pairNumber} is outside the allowed range`);
    }

    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = parseInt(zeroBasedPairNumber / minorSize);
    const minorIndex = parseInt(zeroBasedPairNumber % minorSize);

    return new ColorPair(MajorColorNames[majorIndex], MinorColorNames[minorIndex]);
}

function getPairNumberFromColor(pair) {
    const majorIndex = MajorColorNames.indexOf(pair.majorColor);
    const minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw new Error(`Unknown Colors: ${pair.toString()}`);
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}

module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor
};
