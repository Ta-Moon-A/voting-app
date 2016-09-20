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

    defaultType = 'Select chart type';
    defaultColor = 'Select chart color';
    chartColors: string[] = ChartColors;
    chartTypes: string[] = ChartTypes;



    model = new PollItem("",
        "",
        "",
        [{ id: 1, name: "" }, { id: 2, name: "" }]
    );

    submitted = false;

    onSubmit() {
        this.submitted = true
        console.log("model : ");
        console.log(this.model);
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

