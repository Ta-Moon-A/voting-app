"use strict";
var PollItem = (function () {
    function PollItem(questionText, chartType, chartColor, options) {
        this.questionText = questionText;
        this.chartType = chartType;
        this.chartColor = chartColor;
        this.options = options;
    }
    return PollItem;
}());
exports.PollItem = PollItem;
(function (ChartType) {
    ChartType[ChartType["pie"] = 1] = "pie";
    ChartType[ChartType["line"] = 2] = "line";
    ChartType[ChartType["bar"] = 3] = "bar";
    ChartType[ChartType["doughnut"] = 4] = "doughnut";
})(exports.ChartType || (exports.ChartType = {}));
var ChartType = exports.ChartType;
(function (ChartColor) {
    ChartColor[ChartColor["sunset"] = 1] = "sunset";
    ChartColor[ChartColor["night"] = 2] = "night";
    ChartColor[ChartColor["cherry"] = 3] = "cherry";
    ChartColor[ChartColor["sandy"] = 4] = "sandy";
})(exports.ChartColor || (exports.ChartColor = {}));
var ChartColor = exports.ChartColor;
//# sourceMappingURL=pollItem.js.map