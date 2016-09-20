import {ChartColor} from "./chartColor";
import {ChartType} from "./chartType";

export class PollItem {

    constructor(
        public questionText: string,
        public chartType: string,
        public chartColor: string,
        public options: Array<{ id: number, name: string }>
    ) { }

}



