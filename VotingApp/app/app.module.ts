import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }   from './app.routing';

import { AppComponent }  from './app.component';
import {FooterComponent} from "./votingApp/components/footer.component";
import {HeaderComponent} from "./votingApp/components/header.component";
import {NewPollDetailComponent} from "./votingApp/components/poll.item.component";
import {MainComponent} from './votingApp/components/main.component';
import {HomeComponent} from './votingApp/components/home.component';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],

    declarations: [AppComponent,
        FooterComponent,
        HeaderComponent,
        NewPollDetailComponent,
        MainComponent,
        HomeComponent],

    providers: [
        //appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
