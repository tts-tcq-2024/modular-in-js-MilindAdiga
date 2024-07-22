const ColorPair = require('../app/colorPair');
const { getColorFromPairNumber, getPairNumberFromColor } = require('../app/colorUtils');
const buildColorCode = require('../app/buildColorCodeManual');

function runTestCases() {
    const testCases = [
        { pairNumber: 4, expectedMajor: "WHITE", expectedMinor: "BROWN" },
        { pairNumber: 5, expectedMajor: "WHITE", expectedMinor: "SLATE" },
        { pairNumber: 23, expectedMajor: "RED", expectedMinor: "GREEN" }
    ];

    testCases.forEach(({ pairNumber, expectedMajor, expectedMinor }) => {
        const colorPair = getColorFromPairNumber(pairNumber);
        console.log(`[In] Pair Number: ${pairNumber}, [Out] Colors: ${colorPair}`);
        console.assert(colorPair.majorColor === expectedMajor, `Expected Major: ${expectedMajor}, but got: ${colorPair.majorColor}`);
        console.assert(colorPair.minorColor === expectedMinor, `Expected Minor: ${expectedMinor}, but got: ${colorPair.minorColor}`);
    });

    const reverseTestCases = [
        { majorColor: "YELLOW", minorColor: "GREEN", expectedPairNumber: 18 },
        { majorColor: "RED", minorColor: "BLUE", expectedPairNumber: 6 }
    ];

    reverseTestCases.forEach(({ majorColor, minorColor, expectedPairNumber }) => {
        const colorPair = new ColorPair(majorColor, minorColor);
        const pairNumber = getPairNumberFromColor(colorPair);
        console.log(`[In] Colors: ${colorPair}, [Out] Pair Number: ${pairNumber}`);
        console.assert(pairNumber === expectedPairNumber, `Expected Pair Number: ${expectedPairNumber}, but got: ${pairNumber}`);
    });
}

function printColorCodingManual() {
    console.log("Color Coding Manual:\n" + buildColorCode());
}

function main() {
    runTestCases();
    printColorCodingManual();
}

main();
