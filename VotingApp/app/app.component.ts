import {Component, OnInit } from "@angular/core";

@Component({
    selector: "voting-app",
    template: `<div class="container mainBoard">
                   <my-header></my-header>
                   <my-main></my-main>
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
