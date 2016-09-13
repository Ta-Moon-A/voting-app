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
var core_1 = require("@angular/core");
var GithubLoginComponent = (function () {
    function GithubLoginComponent() {
    }
    GithubLoginComponent.prototype.ngOnInit = function () {
        debugger;
        window.location.href = "https://github.com/login/oauth/authorize?scope=user:email&client_id=d0e3f88b72ae3bb57b0c";
    };
    GithubLoginComponent = __decorate([
        core_1.Component({
            selector: "github-login",
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], GithubLoginComponent);
    return GithubLoginComponent;
}());
exports.GithubLoginComponent = GithubLoginComponent;
//# sourceMappingURL=github.login.component.js.map