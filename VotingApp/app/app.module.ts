import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }   from './app.routing';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './heroSample/hero-detail.component';
import {HeroesComponent} from './heroSample/heroes.component';
import {DashboardComponent} from './heroSample/dashboard.component';
import {FooterComponent} from "./votingApp/footer.component";
import {HeaderComponent} from "./votingApp/header.component";
import {NewPollDetailComponent} from "./votingApp/new-poll-detail.component";
import {MyMainComponent} from "./votingApp/main.component";


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],

    declarations: [AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        NewPollDetailComponent,
        MyMainComponent],

    providers: [
        //appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
