import {Component, OnInit } from "@angular/core";

@Component({
    selector: "voting-app",
    template: ` <div class="container mainBoard">
                    <header></header>
                    <nav class="teal">
                        <div class="nav-wrapper">
                          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons"></i></a>


                          <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li class="active"><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
                            <li><a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
                            
                            <li><a routerLink="/" routerLinkActive="active">All Poll</a></li>
                            <li><a routerLink="/" routerLinkActive="active">My Poll</a></li>
                            <li><a routerLink="/" routerLinkActive="active">New Poll</a></li>
                          </ul>
                          
                          <ul class="side-nav" id="mobile-demo">
                            <li><a routerLink="/" routerLinkActive="active">All Poll</a></li>
                            <li><a routerLink="/" routerLinkActive="active">My Poll</a></li>
                            <li><a routerLink="/" routerLinkActive="active">New Poll</a></li>
                          </ul>

                        </div>
                      </nav>
                    <router-outlet></router-outlet>
                    <footer class="center-align footer"></footer>
                <div>`,
    //styleUrls: ['../content/styles/app1.component.css']
})

export class AppComponent implements OnInit {

    ngOnInit() {
        setTimeout(() => {
            // $(".button-collapse").sideNav();
        }, 0);
    }

    //public ngAfterViewChecked(): void {
    //$(document).ready(function () {

    //    console.log("jQuery is ready");
    //    $(".button-collapse").sideNav();
    //});
    //}

}

/*
*/