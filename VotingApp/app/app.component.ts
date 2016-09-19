import {Component, OnInit } from "@angular/core";

@Component({
    selector: "voting-app",
    template: ` <div class="container mainBoard">
                    
                    <header></header>
                    <nav class="teal lighten-2">
                        <div class="nav-wrapper">
                          
                          <ul id="nav-mobile" class="left">
                            <li><a routerLink="/" routerLinkActive="active">Home</a></li>
                            <li><a routerLink="/" routerLinkActive="active">My Polls</a></li>
                            <li><a routerLink="/new-poll" routerLinkActive="active">New Poll</a></li>
                          </ul>
                          
                        </div>
                      </nav>
                    <router-outlet></router-outlet>
                   
                    <my-footer></my-footer>
                </div>`
})

export class AppComponent implements OnInit {

    ngOnInit() {
        setTimeout(() => {
            //debugger;
            //$(".button-collapse").sideNav();
        }, 1000);
    }
}
