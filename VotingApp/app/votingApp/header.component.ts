import {Component} from "@angular/core";


@Component({
    selector: "header",
    template: `<div class="row">
                     <div class="col s3">
                        <div style="float : left">
                        <a href="/" class="Link">
                            <img src="./content/images/logo3.png" alt="Logo" width="200" height="200">
                        </a>
                     </div>
                     </div>
                     <div class="col s6"></div>
                     <div class="col s3">
                            <div class="float : right">
                                <a class="waves-effect waves-light btn  teal lighten-3" style="width : 100%">
                                       <i class="fa fa-github fa-2x" aria-hidden="true"> </i> Log in with Github
                                </a>
                                <br><br>
                                <a class="waves-effect waves-light btn  teal lighten-3" style="width : 100%">
                                      <i class="fa fa-facebook fa-2x" aria-hidden="true"> </i> Log in with Facebook
                                </a>
                            </div>
                     </div>
                </div>



               
               `
})

export class HeaderComponent {

}
