﻿import { Component, Input, OnInit  } from '@angular/core';
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

    chartColors = ChartColors;
    chartTypes = ChartTypes;

    model = new PollItem("",
        this.chartTypes[0],
        this.chartColors[0],
        [{ id: 1, name: "" }, { id: 2, name: "" }]
    );

    submitted = false;

    onSubmit() {
        this.submitted = true
    }

    ngOnInit() {
        setTimeout(() => {
            //debugger;
            $('select').material_select();
        }, 0);
    }

    onOptionAdd() {
        this.model.options.push({
            id: this.model.options.length + 1,
            name: ""
        });
    }


}

