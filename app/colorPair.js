function ColorPair(majorColor, minorColor) {
    this.majorColor = majorColor;
    this.minorColor = minorColor;
}

ColorPair.prototype.toString = function() {
    return `MajorColor: ${this.majorColor}, MinorColor: ${this.minorColor}`;
};

module.exports = ColorPair;
