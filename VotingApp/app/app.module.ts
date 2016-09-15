import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders }   from './app.routing';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './heroSample/hero-detail.component';
import {HeroesComponent} from './heroSample/heroes.component';
import {DashboardComponent} from './heroSample/dashboard.component';
import {FooterComponent} from "./heroSample/footer.component";
import {HeaderComponent} from "./heroSample/header.component";


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
        HeaderComponent],

    providers: [
        //appRoutingProviders
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
