import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PollItem} from "../classes/pollItem";
import {ChartType} from "../classes/chartType";
import {ChartTypes} from "../classes/chartType";
import {ChartColor} from "../classes/chartColor";
import {ChartColors} from "../classes/chartColor";

@Component({
    selector: 'new-poll-detail',
    templateUrl: '../content/templates/poll.item.template.html'

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
        
    }

    onOptionAdd() {
        this.model.options.push({
            id: this.model.options.length + 1,
            name: ""
        });
    }


}
