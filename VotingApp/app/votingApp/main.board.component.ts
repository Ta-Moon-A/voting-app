import {Component} from "@angular/core";
import {FooterComponent} from "./footer.component";
import {HeaderComponent} from "./header.component";
import {ContentComponent} from "./content.component";

@Component({
    selector: "main-board",
    template: `<div class="container mainBoard">
                    <header ></header>
                   
                    <footer class="center-align footer"></footer>
               <div> `,
    directives: [FooterComponent, HeaderComponent, ContentComponent]
})

export class MainBoardComponent {

}


// <content></content>