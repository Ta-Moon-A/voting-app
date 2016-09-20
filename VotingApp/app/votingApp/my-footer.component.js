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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: "my-footer",
            template: "<footer class=\"page-footer teal lighten-2\">\n                      <div class=\"container\">\n                        <div class=\"row center-align\">\n                          <a href=\"https://github.com/nagasaki1991/VotingApp\" target=\"_blank\" class=\"footerIcon\">\n                               <i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i>\n                           </a>\n                               <br>\n                           <span>\u00A9 2015 Copyright.</span>\n                        </div>\n                      </div>\n                </footer>"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=my-footer.component.js.map