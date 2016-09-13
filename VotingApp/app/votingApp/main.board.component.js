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
var core_2 = require('@angular/core');
var footer_component_1 = require("./footer.component");
var header_component_1 = require("./header.component");
var content_component_1 = require("./content.component");
var MainBoardComponent = (function () {
    function MainBoardComponent() {
    }
    MainBoardComponent = __decorate([
        core_1.Component({
            selector: "main-board",
            template: "<div class=\"container mainBoard\">\n                     \n                   <h1>Component Router</h1>\n                      \n                      <nav>\n                        <a routerLink=\"/\" routerLinkActive=\"active\">Main Board</a>\n                        <a routerLink=\"/voting-item\" routerLinkActive=\"active\">New Item</a>\n                      </nav>\n                  <router-outlet></router-outlet>\n\n                <div> "
        }),
        core_2.NgModule({
            declarations: [footer_component_1.FooterComponent, header_component_1.HeaderComponent, content_component_1.ContentComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], MainBoardComponent);
    return MainBoardComponent;
}());
exports.MainBoardComponent = MainBoardComponent;
//   <header></header>
// <footer class="center-align footer"></footer> 
//# sourceMappingURL=main.board.component.js.map