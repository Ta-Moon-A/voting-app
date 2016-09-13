import {Component} from "@angular/core";


@Component({
    selector: "navigation",
    template: `     <nav>
                        <a routerLink="/" routerLinkActive="active">Main Board</a>
                        <a routerLink="/voting-item" routerLinkActive="active">New Item</a>
                    </nav>`
})

export class NavigationComponent {

}
