import {Component, OnInit } from "@angular/core";

@Component({
    selector: "my-main",
    template: `<main id="wrap">
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
              </main>`,
    styleUrls: ['../content/styles/main.comp.css'],
})

export class MyMainComponent {

}
