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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var heroitem_1 = require("./heroitem");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id)
                .then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', heroitem_1.HeroItem)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: "\n              <div *ngIf=\"hero\">\n              <h2>{{hero.name}} details!</h2>\n              <div>\n                  <label>id: </label>{{hero.id}}</div>\n                  <div>\n                    <label>name: </label>\n                    <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n                  </div>\n                  <button (click)=\"goBack()\">Back</button>\n              </div>\n            \n            ",
            styleUrls: ['../content/styles/hero-detail.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map