import {Component, OnInit} from "@angular/core";

@Component({
    selector: "github-login",
    template: ``
})

export class GithubLoginComponent implements OnInit {

    ngOnInit() {
        debugger;
        window.location.href = "https://github.com/login/oauth/authorize?scope=user:email&client_id=d0e3f88b72ae3bb57b0c";
    }
}