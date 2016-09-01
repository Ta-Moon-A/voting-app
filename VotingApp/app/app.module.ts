import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomRouting }       from './app.routes';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        CustomRouting
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
