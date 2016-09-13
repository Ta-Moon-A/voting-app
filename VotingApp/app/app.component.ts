import {Component} from "@angular/core";
import {MainBoardComponent} from "./votingApp/main.board.component";


@Component({
    selector: "voting-app",
    template: ` <h1>Component Router</h1>
                      
                      <nav>
                        <a routerLink="/" routerLinkActive="active">Main Board</a>
                        <a routerLink="/voting-item" routerLinkActive="active">New Item</a>
                      </nav>
                  <router-outlet></router-outlet>`,
})

export class AppComponent {

}
