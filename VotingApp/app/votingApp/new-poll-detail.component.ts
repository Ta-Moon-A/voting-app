﻿import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PollItem} from "./pollItem";
import {ChartType} from "./pollItem";
import {ChartColor} from "./pollItem";

@Component({
    selector: 'new-poll-detail',
    template: `
              <div class="row">
                    <div class="row"></div>
                    <form class="col l6 m6 s6">
                          

                          <div class="row">
                            <div class="input-field col l10 m10 s10">
                              <input id="poll_question" type="text" class="validate" [(ngModel)]="model.questionText" required>
                              <label for="poll_question">Question text</label>
                            </div>
                          </div>
                          
                         <div class="row" *ngFor="let op in model.options">
                            <div class="input-field col l6 m6 s6">
                              <input id="icon_telephone" type="tel" class="validate">
                              <label for="icon_telephone">op</label>
                            </div>
                            <div class="input-field col l3 m3 s3">
                               <a class="btn-floating btn-medium waves-effect waves-light teal lighten-2">
                                      <i class="material-icons">add</i>
                               </a>
                            </div>
                          </div>
                        <div class="row">
                          <div class="input-field col l10 m10 s10">
                                <select>
                                  <option value="" disabled selected>Choose chart type</option>
                                  <option value="1">Pie Chart</option>
                                  <option value="2">Doughnut Chart</option>
                                  <option value="3">Line Chart</option>
                                  <option value="4">Bar Chart</option>
                                </select>
                               
                              </div>
                          </div>
                        
                       <div class="row">
                          <div class="input-field col l10 m10 s10">
                                <select>
                                  <option value="" disabled selected>Choose chart color</option>
                                  <option value="1">Sunset</option>
                                  <option value="2">Night</option>
                                  <option value="3">Cherry</option>
                                  <option value="4">Sandy</option>
                                </select>
                              </div>
                          </div>
                         <div class="row">
                             <div class="col l2 m2 s2">
                                 <button class="btn waves-effect waves-light" type="submit" name="action">Create </button>
                             </div>
                         </div>
                    </form>

                    <div  class="col l6 m6 s6">
                        <div class="row">
                            <div class="col s12 m12 l12">
                            <div class="card-panel teal lighten-2">
                                <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>

              </div>

              `

})
export class NewPollDetailComponent implements OnInit {

    model = new PollItem("სატესტო კითხვა", ChartType.bar, ChartColor.cherry, ["", ""]);

    submitted = false;

    onSubmit() { this.submitted = true; }

    ngOnInit() {
        setTimeout(() => {
            //debugger;
            $('select').material_select();
        }, 0);
    }
}