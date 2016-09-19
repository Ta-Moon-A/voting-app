import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PollItem} from "./pollItem";
import {ChartType} from "./chartType";
import {ChartTypes} from "./chartType";
import {ChartColor} from "./chartColor";
import {ChartColors} from "./chartColor";

@Component({
    selector: 'new-poll-detail',
    templateUrl: '../content/templates/new-poll-template.html'

})
export class NewPollDetailComponent implements OnInit {

    chartColors: ChartColor[] = ChartColors;
    chartTypes: ChartType[] = ChartTypes;



    model = new PollItem("სატესტო კითხვა", 0, 0, [{ id: 1, name: "option 1" }, { id: 2, name: "option 2" }]);

    submitted = false;

    onSubmit() { this.submitted = true; }

    ngOnInit() {
        setTimeout(() => {
            //debugger;
            $('select').material_select();
        }, 0);
    }
}

