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
var pollItem_2 = require("./pollItem");
var pollItem_3 = require("./pollItem");
var NewPollDetailComponent = (function () {
    function NewPollDetailComponent() {
        this.model = new pollItem_1.PollItem("სატესტო კითხვა", pollItem_2.ChartType.bar, pollItem_3.ChartColor.cherry, ["", ""]);
        this.submitted = false;
    }
    NewPollDetailComponent.prototype.onSubmit = function () { this.submitted = true; };
    NewPollDetailComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            //debugger;
            $('select').material_select();
        }, 0);
    };
    NewPollDetailComponent = __decorate([
        core_1.Component({
            selector: 'new-poll-detail',
            template: "\n              <div class=\"row\">\n                    <div class=\"row\"></div>\n                    <form class=\"col l6 m6 s6\">\n                          \n\n                          <div class=\"row\">\n                            <div class=\"input-field col l10 m10 s10\">\n                              <input id=\"poll_question\" type=\"text\" class=\"validate\" [(ngModel)]=\"model.questionText\" required>\n                              <label for=\"poll_question\">Question text</label>\n                            </div>\n                          </div>\n                          \n                         <div class=\"row\" *ngFor=\"let op in model.options\">\n                            <div class=\"input-field col l6 m6 s6\">\n                              <input id=\"icon_telephone\" type=\"tel\" class=\"validate\">\n                              <label for=\"icon_telephone\">op</label>\n                            </div>\n                            <div class=\"input-field col l3 m3 s3\">\n                               <a class=\"btn-floating btn-medium waves-effect waves-light teal lighten-2\">\n                                      <i class=\"material-icons\">add</i>\n                               </a>\n                            </div>\n                          </div>\n                        <div class=\"row\">\n                          <div class=\"input-field col l10 m10 s10\">\n                                <select>\n                                  <option value=\"\" disabled selected>Choose chart type</option>\n                                  <option value=\"1\">Pie Chart</option>\n                                  <option value=\"2\">Doughnut Chart</option>\n                                  <option value=\"3\">Line Chart</option>\n                                  <option value=\"4\">Bar Chart</option>\n                                </select>\n                               \n                              </div>\n                          </div>\n                        \n                       <div class=\"row\">\n                          <div class=\"input-field col l10 m10 s10\">\n                                <select>\n                                  <option value=\"\" disabled selected>Choose chart color</option>\n                                  <option value=\"1\">Sunset</option>\n                                  <option value=\"2\">Night</option>\n                                  <option value=\"3\">Cherry</option>\n                                  <option value=\"4\">Sandy</option>\n                                </select>\n                              </div>\n                          </div>\n                         <div class=\"row\">\n                             <div class=\"col l2 m2 s2\">\n                                 <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Create </button>\n                             </div>\n                         </div>\n                    </form>\n\n                    <div  class=\"col l6 m6 s6\">\n                        <div class=\"row\">\n                            <div class=\"col s12 m12 l12\">\n                            <div class=\"card-panel teal lighten-2\">\n                                <span class=\"white-text\">I am a very simple card. I am good at containing small bits of information.\n                                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.\n                                </span>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n\n              </div>\n\n              "
        }), 
        __metadata('design:paramtypes', [])
    ], NewPollDetailComponent);
    return NewPollDetailComponent;
}());
exports.NewPollDetailComponent = NewPollDetailComponent;
//# sourceMappingURL=new-poll-detail.component.js.map