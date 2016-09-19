export class PollItem {

    constructor(
        public questionText: string,
        public chartType: number,
        public chartColor: number,
        public options: Array<{ id: number, name: string }>
    ) { }

}



