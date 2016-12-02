import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {NewPollDetailComponent} from "./votingApp/components/poll.item.component";
import {HomeComponent} from "./votingApp/components/home.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'new-poll', component: NewPollDetailComponent },
    { path: 'home', component: HomeComponent }
];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

