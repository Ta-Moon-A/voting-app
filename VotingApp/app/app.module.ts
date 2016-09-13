import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders }   from './app.routing';


import {MainBoardComponent} from './votingApp/main.board.component';
import {GithubLoginComponent} from './votingApp/github.login.component';
import {VotingItemComponent} from './votingApp/new.voting.item';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        routing],

    declarations: [AppComponent,
        VotingItemComponent,
        GithubLoginComponent,
        MainBoardComponent],

    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }
