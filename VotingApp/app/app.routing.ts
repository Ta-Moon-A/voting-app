import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import {HeroesComponent} from './heroSample/heroes.component';
import {DashboardComponent} from './heroSample/dashboard.component';
import {HeroDetailComponent} from './heroSample/hero-detail.component';
import {NewPollDetailComponent} from "./votingApp/new-poll-detail.component";


export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'new-poll', component: NewPollDetailComponent }
];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

