const MajorColorNames = require('../app/majorColors');
const MinorColorNames = require('../app/minorColors');
const { getColorFromPairNumber } = require('../app/colorUtils');

function buildColorCodeManual() {
    const minorSize = MajorColorNames.length;
    const majorSize = MinorColorNames.length;
    let manual = '';

    for (let i = 1; i <= minorSize * majorSize; i++) {
        const colorPair = getColorFromPairNumber(i);
        manual += `Pair Number: ${i}, Colors: ${colorPair.toString()}\n`;
    }

    return manual;
}

module.exports = buildColorCodeManual;
