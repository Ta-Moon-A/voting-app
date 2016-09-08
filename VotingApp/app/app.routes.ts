import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//import {MainBoardComponent} from './votingApp/main.board.component';
//import {GithubLoginComponent} from './votingApp/github.login.component'
import {VotingItemComponent} from './votingApp/new.voting.item';

export const CustomRoutes: Routes = [

    { path: '', component: 'VotingItemComponent' },
    //{ path: 'voting-item', component: 'VotingItemComponent' }

];

export const appRoutingProviders: any[] = [
];

export const CustomRouting: ModuleWithProviders = RouterModule.forRoot(CustomRoutes);

