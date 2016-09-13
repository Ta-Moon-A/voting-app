import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders }   from './app.routing';


import {GithubLoginComponent} from './votingApp/github.login.component';
import {VotingItemComponent} from './votingApp/new.voting.item';
import {NavigationComponent} from './votingApp/navigation.component';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        routing],

    declarations: [AppComponent,
        VotingItemComponent,
        GithubLoginComponent,
        NavigationComponent],

    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }
