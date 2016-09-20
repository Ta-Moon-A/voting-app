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
var MyMainComponent = (function () {
    function MyMainComponent() {
    }
    MyMainComponent = __decorate([
        core_1.Component({
            selector: "my-main",
            template: "<main>\n                   <nav class=\"teal lighten-2\">\n                      <div class=\"nav-wrapper\">\n                         <ul id=\"nav-mobile\" class=\"left\">\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">Home</a></li>\n                            <li><a routerLink=\"/\" routerLinkActive=\"active\">My Polls</a></li>\n                            <li><a routerLink=\"/new-poll\" routerLinkActive=\"active\">New Poll</a></li>\n                         </ul>\n                      </div>\n                   </nav>\n                   <router-outlet></router-outlet>\n              </main>"
        }), 
        __metadata('design:paramtypes', [])
    ], MyMainComponent);
    return MyMainComponent;
}());
exports.MyMainComponent = MyMainComponent;
//# sourceMappingURL=main.component.js.map