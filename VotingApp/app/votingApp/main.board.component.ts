import {Component} from "@angular/core";
import { NgModule }      from '@angular/core';
import {FooterComponent} from "./footer.component";
import {HeaderComponent} from "./header.component";
import {ContentComponent} from "./content.component";

@Component({
    selector: "main-board",
    template: `<div class="container mainBoard">
                     
                   <h1>Component Router</h1>
                      
                      <nav>
                        <a routerLink="/" routerLinkActive="active">Main Board</a>
                        <a routerLink="/voting-item" routerLinkActive="active">New Item</a>
                      </nav>
                  <router-outlet></router-outlet>

                <div> `

})

@NgModule({
    declarations: [FooterComponent, HeaderComponent, ContentComponent],

})


export class MainBoardComponent {

}


//   <header></header>
// <footer class="center-align footer"></footer>