import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import {GithubLoginComponent} from './votingApp/github.login.component'
import {VotingItemComponent} from './votingApp/new.voting.item';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [

    { path: '', component: VotingItemComponent },
    { path: 'voting-item', component: VotingItemComponent }

];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

