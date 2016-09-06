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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "header",
            template: "<div class=\"row\">\n                     <div class=\"col s3\">\n                        <div style=\"float : left\">\n                        <a href=\"/\" class=\"Link\">\n                           \n                        </a>\n                     </div>\n                     </div>\n                     <div class=\"col s6\"></div>\n                     <div class=\"col s3\">\n                            <div class=\"float : right\">\n                                <a class=\"waves-effect waves-light btn  teal lighten-3\" style=\"width : 100%\">\n                                       <i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"> </i> Log in with Github\n                                </a>\n                                <br><br>\n                                <a class=\"waves-effect waves-light btn  teal lighten-3\" style=\"width : 100%\">\n                                      <i class=\"fa fa-facebook fa-2x\" aria-hidden=\"true\"> </i> Log in with Facebook\n                                </a>\n                            </div>\n                     </div>\n                </div>\n\n\n\n               \n               "
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
// <img src="./content/images/logo3.png" alt="Logo" width="200" height="200"> 
//# sourceMappingURL=header.component.js.map