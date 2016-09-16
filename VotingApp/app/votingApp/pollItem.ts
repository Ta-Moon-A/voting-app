export class PollItem {

    constructor(
        public questionText: string,
        public chartType: ChartType,
        public chartColor: ChartColor,
        public options: Array<string>
    ) { }

}



export enum ChartType {
    pie = 1,
    line = 2,
    bar = 3,
    doughnut = 4
}

export enum ChartColor {
    sunset = 1,
    night = 2,
    cherry = 3,
    sandy = 4
}