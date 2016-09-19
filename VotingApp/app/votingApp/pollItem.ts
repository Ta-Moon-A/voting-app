import {ChartColor} from "./chartColor";
import {ChartType} from "./chartType";

export class PollItem {

    constructor(
        public questionText: string,
        public chartType: ChartType,
        public chartColor: ChartColor,
        public options: Array<{ id: number, name: string }>
    ) { }

}



