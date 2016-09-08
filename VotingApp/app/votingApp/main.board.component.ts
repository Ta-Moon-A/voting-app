import {Component} from "@angular/core";
import {FooterComponent} from "./footer.component";
import {HeaderComponent} from "./header.component";
import {ContentComponent} from "./content.component";

@Component({
    selector: "main-board",
    template: `<div class="container mainBoard">
                     
                   <h1>Component Router</h1>
                      
                  <nav>
                    <a [routerLink]="['']">Main Board</a> |
                    <a [routerLink]="['/voting-item']">New Item</a> |
                  </nav>

                  <router-outlet></router-outlet>

                <div> `,
    directives: [FooterComponent, HeaderComponent, ContentComponent]
})

export class MainBoardComponent {

}


//   <header></header>
// <footer class="center-align footer"></footer>