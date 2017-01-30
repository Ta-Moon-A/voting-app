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
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(_router) {
        this._router = _router;
        this.title = 'EasyVote';
    }
    HeaderComponent.prototype.onGithubAuth = function () {
        debugger;
        this._router.navigate(['/auth-github']);
        //(click)="onGithubAuth()"
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "my-header",
            template: "<header>\n               <div class=\"row\" id=\"header\">\n                     <div class=\"col l3 s3 generalColor generalWeight\">\n                        <div class=\"generalLeft\">\n                        <a href=\"/\" class=\"Link generalColor\">\n                           <h3>{{title}}</h3>\n                        </a>\n                     </div>\n                     </div>\n                     <div class=\"col l3 s3\"></div>\n                     <div class=\"col l6 s6\">\n                        <div class=\"fixed-action-btn horizontal click-to-toggle loginbtn generalRight\">\n                                    <a class=\"btn-floating btn-large teal logintxt\">\n                                       <i class=\"\" aria-hidden=\"true\"></i>Log in\n                                    </a>\n                                    <ul>\n                                      <li><a class=\"btn-floating facebook\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n                                      <li><a class=\"btn-floating twitter\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                                      <li><a class=\"btn-floating google\"><i class=\"fa fa-google\" aria-hidden=\"true\"></i></a></li>\n                                      <li><a class=\"btn-floating linkedin\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                                    </ul>\n                         </div>\n                     </div>\n                </div>\n            </header>",
            styleUrls: ['../content/styles/header.comp.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map