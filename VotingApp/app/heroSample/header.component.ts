import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "header",
    template: `<div class="row">
                     <div class="col s3 generalTextStyle">
                        <div style="float : left;">
                        <a href="/" class="Link generalTextStyle">
                           <h3>{{title}}</h3>
                        </a>
                     </div>
                     </div>
                     <div class="col s6"></div>
                     <div class="col s3">
                            <div class="float : right">
                                <a class="waves-effect waves-light btn  teal" style="width : 100%"  >
                                       <i class="fa fa-github fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;Log in
                                </a>
                                <br><br>
                                <a class="waves-effect waves-light btn  light-blue darken-4" style="width : 100%">
                                      <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;Log in
                                </a>
                            </div>
                     </div>
                </div>`
})

export class HeaderComponent {
    title = 'EasyVote';

    constructor(private _router: Router) { }

    onGithubAuth() {
        debugger;
        this._router.navigate(['/auth-github']);
        //(click)="onGithubAuth()"
    }
}

