"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var pollItem_1 = require("./pollItem");
var chartType_1 = require("./chartType");
var chartColor_1 = require("./chartColor");
var NewPollDetailComponent = (function () {
    function NewPollDetailComponent() {
        this.chartColors = chartColor_1.ChartColors;
        this.chartTypes = chartType_1.ChartTypes;
        this.model = new pollItem_1.PollItem("", { id: 0, name: "" }, { id: 0, name: "" }, [{ id: 1, name: "" }, { id: 2, name: "" }]);
        this.submitted = false;
    }
    NewPollDetailComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log("model : ");
        console.log(this.model);
    };
    NewPollDetailComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            //debugger;
            $('select').material_select();
        }, 0);
    };
    NewPollDetailComponent.prototype.onOptionAdd = function () {
        this.model.options.push({
            id: this.model.options.length + 1,
            name: ""
        });
    };
    NewPollDetailComponent = __decorate([
        core_1.Component({
            selector: 'new-poll-detail',
            templateUrl: '../content/templates/new-poll-template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewPollDetailComponent);
    return NewPollDetailComponent;
}());
exports.NewPollDetailComponent = NewPollDetailComponent;
//# sourceMappingURL=new-poll-detail.component.js.map