import {Component} from "@angular/core";
import {MainBoardComponent} from "./votingApp/main.board.component";


@Component({
    selector: "voting-app",
    template: `<main-board></main-board>`,
    directives: [MainBoardComponent]
})

export class AppComponent {

}
