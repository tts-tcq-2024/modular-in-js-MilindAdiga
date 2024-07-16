const MajorColorNames = require('./MajorColorNames');
const MinorColorNames = require('./MinorColorNames');
const { getColorFromPairNumber } = require('./ColorUtils');

function printManual() {
    const minorSize = MajorColorNames.length;
    const majorSize = MinorColorNames.length;
    let manual = '';

    for (let i = 1; i <= minorSize * majorSize; i++) {
        const colorPair = getColorFromPairNumber(i);
        manual += `Pair Number: ${i}, Colors: ${colorPair.toString()}\n`;
    }

    return manual;
}

module.exports = printManual;
