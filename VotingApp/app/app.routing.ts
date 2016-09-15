import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import {HeroesComponent} from './heroSample/heroes.component';
import {DashboardComponent} from './heroSample/dashboard.component';
import {HeroDetailComponent} from './heroSample/hero-detail.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

