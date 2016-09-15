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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            // $(".button-collapse").sideNav();
        }, 0);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "voting-app",
            template: " <div class=\"container mainBoard\">\n                    <header></header>\n                    <nav class=\"teal\">\n                        <div class=\"nav-wrapper\">\n                          <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\"></i></a>\n\n\n                          <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n                            <li class=\"active\"><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n                            <li><a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a></li>\n                            \n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">All Poll</a></li>\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">My Poll</a></li>\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">New Poll</a></li>\n                          </ul>\n                          \n                          <ul class=\"side-nav\" id=\"mobile-demo\">\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">All Poll</a></li>\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">My Poll</a></li>\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">New Poll</a></li>\n                          </ul>\n\n                        </div>\n                      </nav>\n                    <router-outlet></router-outlet>\n                    <footer class=\"center-align footer\"></footer>\n                <div>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
*/ 
//# sourceMappingURL=app.component.js.map