import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-header",
    template: `<header>
               <div class="row" id="header">
                     <div class="col l3 s3 generalColor generalWeight">
                        <div class="generalLeft">
                        <a href="/" class="Link generalColor">
                           <h3>{{title}}</h3>
                        </a>
                     </div>
                     </div>
                     <div class="col l3 s3"></div>
                     <div class="col l6 s6">
                        <div class="fixed-action-btn horizontal click-to-toggle loginbtn generalRight">
                                    <a class="btn-floating btn-large teal logintxt">
                                       <i class="" aria-hidden="true"></i>Log in
                                    </a>
                                    <ul>
                                      <li><a class="btn-floating facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                      <li><a class="btn-floating twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                      <li><a class="btn-floating google"><i class="fa fa-google" aria-hidden="true"></i></a></li>
                                      <li><a class="btn-floating linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                         </div>
                     </div>
                </div>
            </header>`,
    styleUrls: ['../content/styles/header.comp.css'],
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
